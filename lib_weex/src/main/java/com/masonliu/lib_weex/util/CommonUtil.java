package com.masonliu.lib_weex.util;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.telephony.TelephonyManager;
import android.text.TextUtils;

import com.masonliu.lib_weex.generated.BuildConfig;

import java.io.ByteArrayOutputStream;
import java.io.Closeable;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class CommonUtil {

    private static final int BUFFER_LENGTH = 256;
    private static final int CHAR_SIZE = 128;
    private static final String DECODING = "utf-8";
    private static Boolean isApkDebug;
    private static Map<String, Object> sysOptionMap;

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

    //stream是个中转
    public static String streamToString(InputStream inputStream, String charset) throws Exception {
        ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        byte[] data = new byte[BUFFER_LENGTH];
        int count = -1;
        while ((count = inputStream.read(data, 0, BUFFER_LENGTH)) != -1) {
            outStream.write(data, 0, count);
        }
        data = null;
        closeQuietly(inputStream);
        String result = new String(outStream.toByteArray(), charset);
        closeQuietly(outStream);
        return result;
    }

    private static int getVersionCode(final Context con) {
        int version = 1;
        try {
            PackageManager packageManager = con.getPackageManager();
            PackageInfo packageInfo = packageManager.getPackageInfo(con.getPackageName(), 0);
            version = packageInfo.versionCode;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return version;
    }

    public static void appendSysOption(Map<String, Object> map, Context context) {
        if (sysOptionMap == null) {
            sysOptionMap = new HashMap<>();
            sysOptionMap.put("debug", CommonUtil.isApkDebugable(context));
            sysOptionMap.put("versionCode", getVersionCode(context));
            sysOptionMap.put("weexcVersionCode", BuildConfig.VERSION_CODE);
            sysOptionMap.put("weexcVersionName", BuildConfig.VERSION_NAME);

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
            sysOptionMap.put("androidStatusBarHeight", height);

            //国家代码
            String countryCode;
            TelephonyManager tm = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
            String countryIso = tm.getSimCountryIso();//返回SIM卡提供商的国家代码
            if (!TextUtils.isEmpty(countryIso)) {
                countryCode = countryIso;
            } else {
                countryCode = Locale.getDefault().getCountry(); //CN
            }
            sysOptionMap.put("countryCode", countryCode);

            //获取系统当前使用的语言
            Locale locale = Locale.getDefault();
            sysOptionMap.put("language", locale.getLanguage() + "-" + locale.getCountry());
        }
        map.putAll(sysOptionMap);
    }
}
