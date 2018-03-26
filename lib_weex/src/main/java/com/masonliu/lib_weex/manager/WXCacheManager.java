package com.masonliu.lib_weex.manager;

import android.util.Base64;

import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.StringReader;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Created by liumeng02 on 2018/1/23.
 */
public enum WXCacheManager {
    INSTANCE;
    final int cacheSize = 15;
    Map<String, String> lruMap = new LinkedHashMap<String, String>(//初始容量和默认加载因子,Math.ceil() 函数返回 >= 一个给定数字的最小整数
            (int) Math.ceil(cacheSize / 0.75f),
            0.75f,
            true) {
        @Override
        protected boolean removeEldestEntry(Map.Entry<String, String> eldest) {
            return size() > cacheSize;
        }
    };
    private WXCacheHandler handler;

    private static boolean string2File(String res, String filePath) {
        boolean flag = true;
        BufferedReader bufferedReader = null;
        BufferedWriter bufferedWriter = null;
        try {
            File distFile = new File(filePath);
            if (!distFile.getParentFile().exists()) {
                distFile.getParentFile().mkdirs();
            }
            bufferedReader = new BufferedReader(new StringReader(res));
            // bufferedWriter = new BufferedWriter(new FileWriter(distFile));
            java.io.FileOutputStream writerStream = new java.io.FileOutputStream(filePath);
            bufferedWriter = new BufferedWriter(new java.io.OutputStreamWriter(writerStream, "UTF-8"));
            char buf[] = new char[1024]; // 字符缓冲区
            int len;
            while ((len = bufferedReader.read(buf)) != -1) {
                bufferedWriter.write(buf, 0, len);
            }
            bufferedWriter.flush();
            bufferedReader.close();
            bufferedWriter.close();
        } catch (Exception e) {
            e.printStackTrace();
            flag = false;
            return flag;
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            if (bufferedWriter != null) {
                try {
                    bufferedWriter.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        return flag;
    }

    public void setHandler(WXCacheHandler handler) {
        this.handler = handler;
    }

    public void cache(final String pageName, final String template, final Map<String, Object> options, final String jsonInitData, final WXRenderStrategy flag) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    if (handler == null) {
                        String url = (String) options.get(WXSDKInstance.BUNDLE_URL);
                        File f = getCacheFile(url);
                        if (f != null && !f.exists()) {
                            lruMap.put(f.getAbsolutePath(), f.getAbsolutePath());
                            lruMap.get(f.getAbsolutePath());
                            //save
                            string2File(template, f.getAbsolutePath());
                            //delete超过缓存池的bundle
                            File dirFile = new File(WXEnvironment.sApplication.getFilesDir(), "weex/bundle/");
                            if (dirFile.exists() && dirFile.isDirectory()) {
                                File[] cacheFiles = dirFile.listFiles();
                                for (File cacheFile : cacheFiles) {
                                    if (lruMap.get(cacheFile.getAbsolutePath()) == null) {
                                        cacheFile.delete();
                                    }
                                }
                            }
                        }
                    } else {
                        handler.cache(pageName, template, options, jsonInitData, flag);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }).start();
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

    private File getCacheFile(String mUri) {
        try {
            String hostPath = mUri.split("\\?")[0];//问号分割
            String fileName = Base64.encodeToString(hostPath.getBytes(), Base64.DEFAULT);
            // put into  lru cache
            File f = new File(WXEnvironment.sApplication.getFilesDir(), "weex/bundle/" + fileName + ".json");
            if (f.exists()) {
                lruMap.get(f.getAbsolutePath());
            }
            return f;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public interface WXCacheHandler {
        void cache(String pageName, String template, Map<String, Object> options, String jsonInitData, WXRenderStrategy flag);
    }


}
