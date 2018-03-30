package com.masonliu.lib_weex.util;

import android.app.Application;
import android.support.annotation.Nullable;
import android.view.animation.BounceInterpolator;
import android.widget.ImageView;

import com.masonliu.lib_weex.generated.R;
import com.masonliu.lib_weex.manager.WXCommonModuleManager;
import com.masonliu.lib_weex.manager.WXLoadAndCacheManager;
import com.masonliu.lib_weex.manager.WXNavigatorManager;
import com.masonliu.lib_weex.manager.WXURLManager;
import com.masonliu.lib_weex.manager.WeexImageLoaderManager;
import com.masonliu.lib_weex.module.CommonModule;
import com.masonliu.lib_weex.ui.ImageAdapter;
import com.masonliu.lib_weex.ui.WeexPageActivity;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.yhao.floatwindow.FloatWindow;
import com.yhao.floatwindow.MoveType;
import com.yhao.floatwindow.Screen;

public class WeexUtil {
    public static void init(Application application,
                            boolean connectDebuggerOnAppDebug,
                            @Nullable String debuggerHost,
                            @Nullable IWXImgLoaderAdapter iwxImgLoaderAdapter) {
        if (!WXSDKEngine.isInitialized()) {
            //设置Debugger
            if (DebugableUtil.isApkDebugable(application) && connectDebuggerOnAppDebug) {
                initDebugEnvironment(true, debuggerHost);
            }

            //设置图片处理器
            if (iwxImgLoaderAdapter == null) {
                WeexImageLoaderManager.init(application);
                iwxImgLoaderAdapter = new ImageAdapter();
            }
            InitConfig config = new InitConfig.Builder().setImgAdapter(iwxImgLoaderAdapter).build();
            WXSDKEngine.initialize(application, config);

            //添加debug按钮
            if (DebugableUtil.isApkDebugable(application)) {
                ImageView imageView = new ImageView(application);
                imageView.setImageResource(R.drawable.debug);
                FloatWindow.with(application)
                        .setView(imageView)
                        .setWidth(Screen.width, 0.2f)
                        .setHeight(Screen.width, 0.2f)
                        .setX(Screen.width, 0.8f)
                        .setY(Screen.height, 0.3f)
                        .setMoveType(MoveType.slide)
                        .setMoveStyle(500, new BounceInterpolator())
                        .setDesktopShow(false)
                        .setFilter(true, WeexPageActivity.class)
                        .build();
            }

            //注册module
            try {
                WXSDKEngine.registerModule("CommonModule", CommonModule.class);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * boolean sDebugServerConnectable; // DebugServer是否可连通, 默认true
     * boolean sRemoteDebugMode; // 是否开启debug模式, 默认关闭
     * String sRemoteDebugProxyUrl; // DebugServer的websocket地址
     */
    private static void initDebugEnvironment(boolean enable, String host) {
        try {
            WXEnvironment.sDebugServerConnectable = enable;
            WXEnvironment.sRemoteDebugMode = enable;
            WXEnvironment.sRemoteDebugProxyUrl = "ws://" + host + ":8088/debugProxy/native";
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void setDebugable(boolean isDebug) {
        DebugableUtil.setIsApkDebug(isDebug);
    }

    public static void setNavigatorPushHandler(WXNavigatorManager.WXNavigatorPushHandler handler) {
        //设置pushNavigatorHandler
        WXNavigatorManager.INSTANCE.setHandler(handler);
    }

    public static void setURLIntercepter(WXURLManager.WXURLHandler handler) {
        WXURLManager.INSTANCE.setHandler(handler);
    }

    public static void setCommonModuleHandler(WXCommonModuleManager.WXCommonModuleHandler handler) {
        WXCommonModuleManager.INSTANCE.setHandler(handler);
    }

    public static void setCacheHandler(WXLoadAndCacheManager.WXCacheHandler handler) {
        WXLoadAndCacheManager.INSTANCE.setCacheHandler(handler);
    }

    public static void setNetworkHandler(WXLoadAndCacheManager.WXNetworkHandler handler) {
        WXLoadAndCacheManager.INSTANCE.setNetworkHandler(handler);
    }
}
