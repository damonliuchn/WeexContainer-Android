package com.masonliu.lib_weex.util;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Environment;
import android.text.TextUtils;

import com.masonliu.lib_weex.generated.BuildConfig;
import com.taobao.weex.bridge.JSCallback;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.Closeable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.StringReader;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

public class CommonUtil {

    private static final int BUFFER_LENGTH = 256;
    private static final int CHAR_SIZE = 128;
    private static final String DECODING = "utf-8";
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

    public static String streamToString(InputStream is, String decoding) {
        StringBuilder sb = new StringBuilder();
        InputStreamReader isr = null;
        try {
            if (!TextUtils.isEmpty(decoding)) {
                isr = new InputStreamReader(is, decoding);
            } else {
                isr = new InputStreamReader(is, DECODING);
            }
            char[] buf = new char[CHAR_SIZE];
            int hasRead = 0;
            while ((hasRead = isr.read(buf)) > 0) {
                sb.append(buf, 0, hasRead);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            closeQuietly(isr);
            closeQuietly(is);
        }
        return sb.toString();
    }

    public static void appendSysOption(Map<String, Object> map,Context context) {
        map.put("debug", CommonUtil.isApkDebugable(context));
        map.put("weexContainerVersionCode", BuildConfig.VERSION_CODE);
        map.put("weexContainerVersionName", BuildConfig.VERSION_NAME);

        //STATUS_BAR_HEIGHT
        int height = 0;
        try {
            int resourceId = context.getResources().getIdentifier("status_bar_height", "dimen", "android");
            if (resourceId > 0) {
                height = context.getResources().getDimensionPixelSize(resourceId);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        map.put("androidStatusBarHeight", height);

        //BUILD_PROP
        String buildProp = "";
        try {
            buildProp = CommonUtil.streamToString(
                    new FileInputStream(
                            new File(Environment.getRootDirectory(), "build.prop")),
                    null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        map.put("androidBuildProp", buildProp);

        //BUILD_CLASS
        String buildClass = "";
        try {
            StringBuilder sbBuilder = new StringBuilder();
            Field[] fields = Build.class.getDeclaredFields();
            for(Field field:fields){
                field.setAccessible(true);
                try {
                    sbBuilder.append(field.getName()+":"+field.get(null).toString()+"\n");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            buildClass = sbBuilder.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        map.put("androidBuildClass", buildClass);
    }
}
