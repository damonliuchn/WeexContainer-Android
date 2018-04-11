package com.masonliu.lib_weex.task;

import android.os.AsyncTask;
import android.os.Build;
import android.text.TextUtils;

import com.masonliu.lib_weex.manager.WXLoadAndCacheManager;
import com.masonliu.lib_weex.util.CommonUtil;
import com.taobao.weex.WXEnvironment;

import java.io.File;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.concurrent.Executors;

import static com.masonliu.lib_weex.manager.WXLoadAndCacheManager.WEEX_CACHE_BUNDLE_PATH;

/**
 * Created by liumeng02 on 2018/4/3.
 */

public class WXDownloadAsyncTask extends AsyncTask<Void, Void, String> {
    private String url;
    private WXLoadAndCacheManager.WXDownloadListener wxDownloadListener;
    private WXLoadAndCacheManager manager;

    public WXDownloadAsyncTask(WXLoadAndCacheManager manager, String url, WXLoadAndCacheManager.WXDownloadListener wxDownloadListener) {
        this.url = url;
        this.wxDownloadListener = wxDownloadListener;
        this.manager = manager;
    }

    public void executeOnMyExecutor(Void... params) {
        if (Build.VERSION.SDK_INT >= 11) {
            this.executeOnExecutor(Executors.newCachedThreadPool(), params);
        } else {
            this.execute(params);
        }
    }

    @Override
    protected void onPreExecute() {
        super.onPreExecute();
    }

    @Override
    protected String doInBackground(Void... params) {
        String cacheUrl = null;
        try {
            InputStream inputStream = null;
            //download
            if (manager.networkHandler == null) {
                inputStream = download(url);
            } else {
                inputStream = manager.networkHandler.executeDownload(url);
            }
            //cache
            if (manager.cacheHandler == null) {
                cache(inputStream, url);
            } else {
                manager.cacheHandler.cache(inputStream, url);
            }
            cacheUrl = manager.getOrCacheUri(url);
            if (cacheUrl.startsWith("http")) {
                cacheUrl = null;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return cacheUrl;
    }


    @Override
    protected void onPostExecute(String cacheUrl) {
        super.onPostExecute(cacheUrl);
        if (TextUtils.isEmpty(cacheUrl)) {
            wxDownloadListener.onFailed();
        } else {
            wxDownloadListener.onSuccess(cacheUrl);
        }
    }

    private InputStream download(String urlAddress) {
        URLConnection connection = null;
        InputStream inputStream = null;
        try {
            // 创建URL对象
            URL url = new URL(urlAddress);
            // 打开连接 获取连接对象
            connection = url.openConnection();
            // 从连接对象中获取网络连接中的输入字节流对象
            inputStream = connection.getInputStream();
            return inputStream;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private void cache(final InputStream inputStream, final String url) throws Exception {
        File f = manager.getCacheFile(url);
        if (!f.exists()) {
            //使之在头部位置
            manager.lruMap.put(f.getAbsolutePath(), f.getAbsolutePath());
            manager.lruMap.get(f.getAbsolutePath());
            //save
            CommonUtil.streamTofile(inputStream, f);
            //delete不在缓存池的bundle
            File dirFile = new File(WXEnvironment.sApplication.getCacheDir(), WEEX_CACHE_BUNDLE_PATH);
            if (dirFile.exists() && dirFile.isDirectory()) {
                File[] cacheFiles = dirFile.listFiles();
                for (File cacheFile : cacheFiles) {
                    if (manager.lruMap.get(cacheFile.getAbsolutePath()) == null) {
                        cacheFile.delete();
                    }
                }
            }
        }
    }
}