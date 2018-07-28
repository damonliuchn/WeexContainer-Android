package com.masonliu.lib_weex.util;

import android.content.Context;
import android.content.pm.ApplicationInfo;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.Closeable;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.StringReader;

public class CommonUtil {

    private static final int BUFFER_LENGTH = 256;
    private static Boolean isApkDebug;

    private CommonUtil() {
    }

    public static boolean isApkDebugable(Context context) {
        if (isApkDebug == null) {
            try {
                ApplicationInfo info = context.getApplicationInfo();
                isApkDebug = (info.flags & 2) != 0;
            } catch (Exception var1) {
                var1.printStackTrace();
                isApkDebug = false;
            }
            return isApkDebug;
        }
        return isApkDebug;
    }

    public static void setIsApkDebug(Boolean isApkDebug) {
        CommonUtil.isApkDebug = isApkDebug;
    }

    public static void closeQuietly(Closeable closeable) {
        if (closeable != null) {
            try {
                closeable.close();
            } catch (Throwable ignored) {
            }
        }
    }

    public static void streamTofile(InputStream initialStream, File targetFile) throws Exception {
        if (!targetFile.getParentFile().exists()) {
            targetFile.getParentFile().mkdirs();
        }
        OutputStream outStream = new FileOutputStream(targetFile);
        byte[] buffer = new byte[BUFFER_LENGTH];
        int bytesRead;
        while ((bytesRead = initialStream.read(buffer)) != -1) {
            outStream.write(buffer, 0, bytesRead);
        }
        closeQuietly(initialStream);
        closeQuietly(outStream);
    }

    public static boolean string2File(String res, String filePath) {
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
            char buf[] = new char[BUFFER_LENGTH]; // 字符缓冲区
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
}
