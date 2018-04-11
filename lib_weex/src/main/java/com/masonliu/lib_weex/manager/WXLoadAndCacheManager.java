package com.masonliu.lib_weex.manager;

import android.util.Base64;

import com.masonliu.lib_weex.task.WXDownloadAsyncTask;
import com.taobao.weex.WXEnvironment;

import java.io.File;
import java.io.InputStream;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Created by liumeng02 on 2018/1/23.
 */
public enum WXLoadAndCacheManager {
    INSTANCE;
    public static final String WEEX_CACHE_BUNDLE_PATH = "weex/cacheBundle/";
    final int cacheSize = 15;
    public WXNetworkHandler networkHandler;
    public WXCacheHandler cacheHandler;
    public Map<String, String> lruMap = new LinkedHashMap<String, String>(//初始容量和默认加载因子,Math.ceil() 函数返回 >= 一个给定数字的最小整数
            (int) Math.ceil(cacheSize / 0.75f),
            0.75f,
            true) {
        @Override
        protected boolean removeEldestEntry(Map.Entry<String, String> eldest) {
            return size() > cacheSize;
        }
    };

    public void setCacheHandler(WXCacheHandler cacheHandler) {
        this.cacheHandler = cacheHandler;
    }

    public void setNetworkHandler(WXNetworkHandler networkHandler) {
        this.networkHandler = networkHandler;
    }

    /**
     * 获取本地JS路径
     */
    public String getOrCacheUri(String uri) {
        File f = getCacheFile(uri);
        if (f != null && f.exists()) {
            return "file://" + f.getAbsolutePath();
        }
        return uri;
    }

    public File getCacheFile(String mUri) {
        String hostPath = mUri.split("\\?")[0];//问号分割
        String fileName = Base64.encodeToString(hostPath.getBytes(), Base64.NO_PADDING | Base64.NO_WRAP | Base64.URL_SAFE);
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

    public interface WXCacheHandler {
        void cache(InputStream inputStream, String url);
    }

    public interface WXNetworkHandler {
        InputStream executeDownload(String url) throws Exception;
    }

    public interface WXDownloadListener {
        void onSuccess(String localUrl);

        void onFailed();
    }


}
