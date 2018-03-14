package com.masonliu.lib_weex;

import android.app.Application;
import android.support.annotation.Nullable;
import android.view.animation.BounceInterpolator;
import android.widget.ImageView;

import com.masonliu.lib_weex.generated.R;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.yhao.floatwindow.FloatWindow;
import com.yhao.floatwindow.MoveType;
import com.yhao.floatwindow.Screen;

public class WeexUtil {
    public static void init(Application application,
                            @Nullable String debugHost,
                            @Nullable WXNavigatorManager.WXNavigatorPushHandler pushHandler,
                            @Nullable IWXImgLoaderAdapter iwxImgLoaderAdapter) {
        if (!WXSDKEngine.isInitialized()) {
            if (DebugableUtil.isApkDebugable(application)) {
                initDebugEnvironment(true, debugHost);
            }
            if (iwxImgLoaderAdapter == null) {
                iwxImgLoaderAdapter = new ImageAdapter();
            }
            InitConfig config = new InitConfig.Builder().setImgAdapter(iwxImgLoaderAdapter).build();
            WXSDKEngine.initialize(application, config);

            //设置pushHandler
            WXNavigatorManager.INSTANCE.setHandler(pushHandler);
            if (DebugableUtil.isApkDebugable(application)) {
                //添加debug按钮
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

    public static void setURLIntercepter(WXURLManager.WXURLHandler handler) {
        WXURLManager.INSTANCE.setHandler(handler);
    }

    public static void setDebugable(boolean isDebug) {
        DebugableUtil.setIsApkDebug(isDebug);
    }
}
