package com.masonliu.lib_weex;

import android.content.Context;
import android.content.pm.ApplicationInfo;

public class DebugableUtil {

    private static Boolean isApkDebug;

    private DebugableUtil() {
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
        DebugableUtil.isApkDebug = isApkDebug;
    }
}
