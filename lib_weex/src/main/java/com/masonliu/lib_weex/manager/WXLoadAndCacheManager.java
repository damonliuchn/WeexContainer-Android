package com.masonliu.lib_weex.manager;

import android.text.TextUtils;

import com.masonliu.lib_weex.task.WXDownloadAsyncTask;
import com.squareup.okhttp.OkHttpClient;
import com.taobao.weex.WXEnvironment;

import java.io.File;
import java.io.FileFilter;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * Created by liumeng02 on 2018/1/23.
 */
public enum WXLoadAndCacheManager {
    INSTANCE;
    public static final String WEEX_CACHE_BUNDLE_PATH = "weex/cacheBundle/";
    public static final String WEEX_ASSETS_VIRTUAL_PREFIX = "file://local/";
    public static final String WEEX_ASSETS_TRUE_PATH = "weex/";
    public static final String WEEX_ASSETS_ALL_PREFIX = WEEX_ASSETS_VIRTUAL_PREFIX + WEEX_ASSETS_TRUE_PATH;

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
    public String getCache(String uri, String bundleName) {
        if (uri.startsWith("file")) {
            return uri;
        }
        File f = getCacheFile(uri, bundleName);
        if (f != null && f.exists()) {
            return "file://" + f.getAbsolutePath();
        }
        return null;
    }

    public void deleteCache(String uri, String bundleName) {
        if (uri.startsWith("file")) {
            return;
        }
        File f = getCacheFile(uri, bundleName);
        if (f != null && f.exists()) {
            f.delete();
        }
    }

    public File getCacheFile(String mUri, String bundleName) {
        if (TextUtils.isEmpty(bundleName)) {
            bundleName = "noBundleName";
        }
        String fileName = bundleName + "-" + URLEncoder.encode(mUri).replace("%", "-");//支持全路径,replace%,防止后面代码decode如Uri.getPath
        // put into  lru cache
        File f = new File(WXEnvironment.sApplication.getCacheDir(), WEEX_CACHE_BUNDLE_PATH + fileName + ".js");
        if (f.exists()) {
            lruMap.get(f.getAbsolutePath());
        }
        return f;
    }

    public String getLastCache(final String mBundleName) {
        if (TextUtils.isEmpty(mBundleName)) {
            return null;
        }
        //去缓存文件夹里找
        //去asset里找前缀为mBundleName的文件
        try {
            File[] files = new File(WXEnvironment.sApplication.getCacheDir(), WEEX_CACHE_BUNDLE_PATH).listFiles(new FileFilter() {
                @Override
                public boolean accept(File file) {
                    return file.getName().startsWith(mBundleName + "-");
                }
            });
            if (files != null && files.length > 0) {
                Arrays.sort(files, new Comparator<File>() {
                    public int compare(File f1, File f2) {
                        long diff = f1.lastModified() - f2.lastModified();
                        if (diff > 0)
                            return -1;
                        else if (diff == 0)
                            return 0;
                        else
                            return 1;
                    }
                });
                return "file://" + files[0].getAbsolutePath();
            } else {
                String[] assetsFiles = WXEnvironment.sApplication.getAssets().list("weex");
                for (int i = 0; assetsFiles != null && i < assetsFiles.length; i++) {
                    if (assetsFiles[i].startsWith(mBundleName)) {
                        return WEEX_ASSETS_ALL_PREFIX + assetsFiles[i];
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public void download(String url, String bundleName, String bundleMd5, WXDownloadListener wxDownloadListener) {
        new WXDownloadAsyncTask(this, url, bundleName, bundleMd5, wxDownloadListener).executeOnMyExecutor();
    }

    public interface WXDownloadListener {
        void onSuccess(String localUrl);

        void onFailed();
    }


}
