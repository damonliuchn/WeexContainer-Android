package com.masonliu.lib_weex.manager;

import com.masonliu.lib_weex.task.WXDownloadAsyncTask;
import com.squareup.okhttp.OkHttpClient;
import com.taobao.weex.WXEnvironment;

import java.io.File;
import java.net.URLEncoder;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * Created by liumeng02 on 2018/1/23.
 */
public enum WXLoadAndCacheManager {
    INSTANCE;
    public static final String WEEX_CACHE_BUNDLE_PATH = "weex/cacheBundle/";
    private final int cacheSize = 50;
    public Map<String, String> lruMap = new LinkedHashMap<String, String>(//初始容量和默认加载因子,Math.ceil() 函数返回 >= 一个给定数字的最小整数
            (int) Math.ceil(cacheSize / 0.75f),
            0.75f,
            true) {
        @Override
        protected boolean removeEldestEntry(Map.Entry<String, String> eldest) {
            return size() > cacheSize;
        }
    };
    private OkHttpClient okHttpClient;

    public OkHttpClient getOkHttpClient() {
        if (okHttpClient == null) {
            okHttpClient = new OkHttpClient();
            okHttpClient.setConnectTimeout(20, TimeUnit.SECONDS);
            okHttpClient.setWriteTimeout(20, TimeUnit.SECONDS);
            okHttpClient.setReadTimeout(20, TimeUnit.SECONDS);
        }
        return okHttpClient;
    }

    public void setOkHttpClient(OkHttpClient okHttpClient) {
        this.okHttpClient = okHttpClient;
    }


    /**
     * 获取本地JS路径，没有找到时返回null
     */
    public String getCache(String uri) {
        if (uri.startsWith("file")) {
            return uri;
        }
        File f = getCacheFile(uri);
        if (f != null && f.exists()) {
            return "file://" + f.getAbsolutePath();
        }
        return null;
    }

    public void deleteCache(String uri) {
        if (uri.startsWith("file")) {
            return;
        }
        File f = getCacheFile(uri);
        if (f != null && f.exists()) {
            f.delete();
        }
    }

    public File getCacheFile(String mUri) {
        //String hostPath = mUri.split("\\?")[0];//问号分割
        //String fileName = Base64.encodeToString(hostPath.getBytes(), Base64.NO_PADDING | Base64.NO_WRAP | Base64.URL_SAFE);
        String fileName = URLEncoder.encode(mUri).replace("%", "-");//支持全路径,replace%,防止后面代码decode如Uri.getPath
        // put into  lru cache
        File f = new File(WXEnvironment.sApplication.getCacheDir(), WEEX_CACHE_BUNDLE_PATH + fileName + ".js");
        if (f.exists()) {
            lruMap.get(f.getAbsolutePath());
        }
        return f;
    }

    public void download(String url, WXDownloadListener wxDownloadListener) {
        new WXDownloadAsyncTask(this, url, wxDownloadListener).executeOnMyExecutor();
    }

    public interface WXDownloadListener {
        void onSuccess(String localUrl);

        void onFailed();
    }


}
