package com.masonliu.base;

import android.app.Application;
import android.util.Log;

import com.masonliu.lib_weex.util.WeexUtil;
import com.masonliu.weex_container_demo.BuildConfig;


public class AppApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        SharedPre.init(this);
        WeexUtil.init(this, false, BuildConfig.BUILD_IP, null);
    }
}