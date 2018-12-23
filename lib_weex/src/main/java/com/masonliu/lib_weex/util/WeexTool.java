package com.masonliu.lib_weex.util;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Build;
import android.provider.Settings;
import android.telephony.TelephonyManager;
import android.text.TextUtils;

import com.masonliu.lib_weex.generated.BuildConfig;

import java.io.ByteArrayOutputStream;
import java.io.Closeable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.security.DigestInputStream;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class WeexTool {

    private static final int BUFFER_LENGTH = 256;
    private static final int CHAR_SIZE = 128;
    private static final String DECODING = "utf-8";
    private static Boolean isApkDebug;
    private static Map<String, Object> sysOptionMap;

    private WeexTool() {
    }

    static boolean isApkDebugable(Context context) {
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
        WeexTool.isApkDebug = isApkDebug;
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
            sysOptionMap.put("debug", WeexTool.isApkDebugable(context));
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
            TelephonyManager tm = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
            String countryCode = tm.getSimCountryIso();//返回SIM卡提供商的国家代码
            if (TextUtils.isEmpty(countryCode)) {
                countryCode = Locale.getDefault().getCountry(); //CN
            }
            sysOptionMap.put("countryCode", countryCode);

            //获取系统当前使用的语言
            Locale locale = Locale.getDefault();
            sysOptionMap.put("language", locale.getLanguage() + "-" + locale.getCountry());

            //获取系统当前使用的语言
            sysOptionMap.put("deviceId", getTrueDeviceId(context));
        }
        map.putAll(sysOptionMap);
    }

    /**
     * //     * 获取 设备系统唯一ID
     * //     * 1、刷机或升级以后会变
     * //     * 2、相同品牌型号手机可能相同
     * //     * 3、可以根据 deviceId 、Build.BRAND、Build.MODEL 粗略判断是否是模拟器
     * //     * 模拟器deviceId一般全0，Build.BRAND一般是generic，Build.MODEL一般是sdk或google_sdk
     * //     * 4、root后的手机 用户可以随意修改deviceid 和 androidid
     * //     * 5、此方法返回一个不可靠的设备系统唯一ID
     * //     *
     * //     * @return
     * //
     */
    private static String getTrueDeviceId(Context context) {
        try {
            /**
             * 非手机设备： 如果只带有Wifi的设备或者音乐播放器没有通话的硬件功能的话就没有这个DEVICE_ID
             * bug：在少数的一些手机设备上，该实现有漏洞，会返回垃圾，如:zeros或者asterisks的产品
             * 这个还需要权限
             */
//            TelephonyManager telephonyManager = (TelephonyManager) context.getSystemService(Service.TELEPHONY_SERVICE);
//            String deviceId = telephonyManager.getDeviceId();
//            if (TextUtils.isEmpty(deviceId)) {
//                deviceId = "NoDeviceId";
//            }
            String serial = Build.SERIAL;
            if (TextUtils.isEmpty(serial)) {
                serial = "NoSerial";
            }
            /**
             * ANDROID_ID是设备第一次启动时产生和存储的64bit的一个数，当设备被wipe后该数重置
             * ANDROID_ID似乎是获取Device ID的一个好选择，但它也有缺陷：
             * 它在Android <=2.1 or Android >=2.3的版本是可靠、稳定的，但在2.2的版本并不是100%可靠的
             * 在主流厂商生产的设备上，有一个很经常的bug，就是每个设备都会产生相同的ANDROID_ID：9774d56d682e549c
             */
            String androidID = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ANDROID_ID);
            if (TextUtils.isEmpty(androidID)) {
                androidID = "NoAndroidId";
            }
            StringBuilder sb = new StringBuilder();
            sb.append(serial).append("#").append(androidID);
            return sb.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    public static String getMd5FromFile(File inputFile) {
        try {
            MessageDigest messageDigest = MessageDigest.getInstance("MD5");
            // 使用DigestInputStream
            FileInputStream fileInputStream = new FileInputStream(inputFile);
            DigestInputStream digestInputStream = new DigestInputStream(fileInputStream, messageDigest);
            // read的过程中进行MD5处理，直到读完文件
            byte[] buffer = new byte[BUFFER_LENGTH];
            while (digestInputStream.read(buffer) > 0) ;
            messageDigest = digestInputStream.getMessageDigest();
            byte[] resultByteArray = messageDigest.digest();
            return bytesToHexString(resultByteArray);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    private static String bytesToHexString(byte[] src) {
        StringBuilder stringBuilder = new StringBuilder("");
        if (src == null || src.length <= 0) {
            return null;
        }
        for (int i = 0; i < src.length; i++) {
            String hv = Integer.toHexString(src[i] & 0xFF);
            if (hv.length() < 2) {
                stringBuilder.append(0);
            }
            stringBuilder.append(hv);
        }
        return stringBuilder.toString();
    }

}
