package com.masonliu.base;

import android.app.Application;
import android.net.Uri;
import android.util.Log;

import com.masonliu.lib_weex.WXNavigatorManager;
import com.masonliu.lib_weex.WXURLManager;
import com.masonliu.lib_weex.WeexPageActivity;
import com.masonliu.lib_weex.WeexUtil;
import com.masonliu.weex_container_demo.BuildConfig;
import com.taobao.weex.WXSDKInstance;


public class AppApplication extends Application {
    public static AppApplication application;

    @Override
    public void onCreate() {
        super.onCreate();
        application = this;
        //初始化  debug server ip
        WeexUtil.init(this,
                BuildConfig.BUILD_IP,
                new WXNavigatorManager.WXNavigatorPushHandler() {
                    @Override
                    public void push(boolean isNativeAcion, String nativePathQuery, WXSDKInstance mWXSDKInstance, Uri uri, String instanceId) {
                        if (isNativeAcion) {//如果scheme是native
                            Log.e("WXNavigatorPushHandler", nativePathQuery);
                        } else {
                            WeexPageActivity.startFrom(
                                    mWXSDKInstance.getContext(),
                                    uri.toString(),
                                    instanceId);
                        }
                    }
                },
                null
        );
        WeexUtil.setURLIntercepter(new WXURLManager.WXURLHandler() {
            @Override
            public String handle(String url) {
                return url;
            }
        });
    }
}