package com.masonliu.base;

import android.app.Application;

import com.masonliu.lib_weex.util.WeexUtil;
import com.masonliu.weex_container_demo.BuildConfig;


public class AppApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        SharedPre.init(this);
        //WeexUtil.setDebugable(false);//可以在debug环境下单独测试WeexContainer release功能是否可用
        WeexUtil.init(this, true, BuildConfig.BUILD_IP, null);
    }
}