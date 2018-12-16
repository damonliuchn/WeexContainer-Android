package com.masonliu.lib_weex.util;

import android.app.Application;
import android.content.Intent;
import android.os.Looper;
import android.support.annotation.Nullable;

import com.masonliu.lib_weex.manager.WXCommonModuleManager;
import com.masonliu.lib_weex.manager.WXImgLoaderAdapter;
import com.masonliu.lib_weex.manager.WXLoadAndCacheManager;
import com.masonliu.lib_weex.manager.WXURLManager;
import com.masonliu.lib_weex.module.CommonModule;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;

import okhttp3.OkHttpClient;

import static com.taobao.weex.WXSDKInstance.ACTION_INSTANCE_RELOAD;

public class WeexUtil {
    public static void init(final Application application,
                            boolean connectDebuggerOnAppDebug,
                            @Nullable final String debuggerHost,
                            @Nullable IWXImgLoaderAdapter iwxImgLoaderAdapter) {
        if (!WXSDKEngine.isInitialized()) {
            //设置图片处理器
            if (iwxImgLoaderAdapter == null) {
                iwxImgLoaderAdapter = new WXImgLoaderAdapter();
            }
            InitConfig config = new InitConfig.Builder().setImgAdapter(iwxImgLoaderAdapter).build();
            WXSDKEngine.initialize(application, config);
            //注册module
            try {
                WXSDKEngine.registerModule("CommonModule", CommonModule.class);
            } catch (Exception e) {
                e.printStackTrace();
            }
            //设置Debugger
            if (CommonUtil.isApkDebugable(application) && connectDebuggerOnAppDebug) {
                new android.os.Handler(Looper.getMainLooper()).postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        initDebugEnvironment(true, debuggerHost);
                        new android.os.Handler(Looper.getMainLooper()).postDelayed(new Runnable() {
                            @Override
                            public void run() {
                                Intent intent = new Intent(ACTION_INSTANCE_RELOAD);
                                application.sendBroadcast(intent);
                            }
                        }, 500);
                    }
                }, 2000);
            }
        }
    }

    /**
     * boolean sDebugServerConnectable; // DebugServer是否可连通, 默认true
     * boolean sRemoteDebugMode; // 是否开启debug模式, 默认关闭
     * String sRemoteDebugProxyUrl; // DebugServer的websocket地址
     */
    public static void initDebugEnvironment(boolean enable, String host) {
        try {
            WXEnvironment.sDebugServerConnectable = enable;
            WXEnvironment.sRemoteDebugMode = enable;
            WXEnvironment.sRemoteDebugProxyUrl = "ws://" + host + ":8088/debugProxy/native/5fe33630-9324-4210-843d-185ff8fa5bf5";
            WXSDKEngine.reload();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void setDebugable(boolean isDebug) {
        CommonUtil.setIsApkDebug(isDebug);
    }

    public static void setURLIntercepter(WXURLManager.WXURLHandler handler) {
        WXURLManager.INSTANCE.setHandler(handler);
    }


    public static void setCommonModuleHandler(WXCommonModuleManager.WXCommonModuleHandler handler) {
        WXCommonModuleManager.INSTANCE.setHandler(handler);
    }

    public static void setOkHttpClient(OkHttpClient okHttpClient) {
        WXLoadAndCacheManager.INSTANCE.setOkHttpClient(okHttpClient);
    }
}
