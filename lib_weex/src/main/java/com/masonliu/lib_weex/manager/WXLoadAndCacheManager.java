package com.masonliu.lib_weex.manager;

import android.os.AsyncTask;
import android.os.Build;
import android.text.TextUtils;
import android.util.Base64;

import com.taobao.weex.WXEnvironment;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;
import java.io.StringReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.Executors;

/**
 * Created by liumeng02 on 2018/1/23.
 */
public enum WXLoadAndCacheManager {
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
    private WXCacheHandler cacheHandler;

    private WXNetworkHandler networkHandler;

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

    private File getCacheFile(String mUri) {
        try {
            String hostPath = mUri.split("\\?")[0];//问号分割
            String fileName = Base64.encodeToString(hostPath.getBytes(), Base64.NO_PADDING | Base64.NO_WRAP | Base64.URL_SAFE);
            // put into  lru cache
            File f = new File(WXEnvironment.sApplication.getFilesDir(), "weex/cacheBundle/" + fileName + ".js");
            if (f.exists()) {
                lruMap.get(f.getAbsolutePath());
            }
            return f;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public void download(String url, WXDownloadListener wxDownloadListener) {
        new DownloadAsyncTask(url, wxDownloadListener).executeOnMyExecutor();
    }

    public void cache(final String template, final String url) {
        try {
            if (cacheHandler == null) {
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
                cacheHandler.cache(template, url);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public interface WXCacheHandler {
        void cache(String template, String url);
    }

    public interface WXNetworkHandler {
        byte[] executeDownload(String url) throws Exception;
    }

    public interface WXDownloadListener {
        void onSuccess(String localUrl);

        void onFailed();
    }

    class DownloadAsyncTask extends AsyncTask<Void, Void, String> {
        private String url;
        private WXDownloadListener wxDownloadListener;

        public DownloadAsyncTask(String url, WXDownloadListener wxDownloadListener) {
            this.url = url;
            this.wxDownloadListener = wxDownloadListener;
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
                if (networkHandler == null) {
                    networkHandler = new WXNetworkHandler() {
                        @Override
                        public byte[] executeDownload(String url) throws Exception {
                            return downLoad(url);
                        }
                    };
                }
                byte[] bytes = networkHandler.executeDownload(url);
                //to string
                String cacheData = new String(bytes);
                //cache
                cache(cacheData, url);
                cacheUrl = getOrCacheUri(url);
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

        public byte[] downLoad(String urlAddress) {
            URLConnection connection = null;
            InputStream inputStream = null;
            ByteArrayOutputStream outputStream = null;
            try {
                // 创建URL对象
                URL url = new URL(urlAddress);
                // 打开连接 获取连接对象
                connection = url.openConnection();
                // 从连接对象中获取网络连接中的输入字节流对象
                inputStream = connection.getInputStream();
                outputStream = new ByteArrayOutputStream();
                byte[] buff = new byte[100];
                int rc = 0;
                while ((rc = inputStream.read(buff, 0, 100)) > 0) {
                    outputStream.write(buff, 0, rc);
                }
                return outputStream.toByteArray();
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                if (inputStream != null) {
                    try {
                        inputStream.close();
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
                if (outputStream != null) {
                    try {
                        outputStream.close();
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
            return null;
        }
    }
}
