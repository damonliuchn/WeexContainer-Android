package com.masonliu.base;

import android.app.Application;
import android.util.Log;

import com.masonliu.lib_weex.util.WeexUtil;
import com.masonliu.weex_container_demo.BuildConfig;


public class AppApplication extends Application {
    public static AppApplication application;

    @Override
    public void onCreate() {
        super.onCreate();
        application = this;
        SharedPre.init(application);
        //WeexUtil.setDebugable(false);
        //初始化  debug server ip
        WeexUtil.init(this,
                false,
                BuildConfig.BUILD_IP,
                null
        );
        WeexUtil.setURLIntercepter(url -> {
            Log.e("url", url);
            return url;
        });
    }
}