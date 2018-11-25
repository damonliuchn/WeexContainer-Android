package com.masonliu.base;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;

/**
 * 系统临时保存辅助
 * LIU MENG
 */
public class SharedPre {
    private static SharedPreferences sharedPreferences;
    private static Context context;
    private static SharedPreferences.Editor editor;

    public static void init(Context con) {
        context = con.getApplicationContext();
        sharedPreferences = context.getSharedPreferences("SharedPreUtil", Activity.MODE_PRIVATE);
        editor = sharedPreferences.edit();
    }

    public static boolean set(String key, boolean value) {
        editor.putBoolean(key, value);
        return editor.commit();
    }

    public static boolean getBoolean(String key) {
        return getBoolean(key, false);
    }

    public static boolean getBoolean(String key, boolean defaultValue) {
        return sharedPreferences.getBoolean(key, defaultValue);
    }

    public static boolean set(String key, String value) {
        editor.putString(key, value);
        return editor.commit();
    }

    public static String getString(String name) {
        return getString(name, "");
    }

    public static String getString(String name, String defaultValue) {
        return sharedPreferences.getString(name, defaultValue);
    }

    public static boolean set(String key, int value) {
        editor.putInt(key, value);
        return editor.commit();
    }

    public static int getInt(String key) {
        return getInt(key, 0);
    }

    public static int getInt(String key, int defaultValue) {
        return sharedPreferences.getInt(key, defaultValue);
    }

    public static boolean set(String key, long value) {
        editor.putLong(key, value);
        return editor.commit();
    }

    public static long getLong(String key) {
        return getLong(key, 0);
    }

    public static long getLong(String key, long defaultValue) {
        return sharedPreferences.getLong(key, defaultValue);
    }
}
