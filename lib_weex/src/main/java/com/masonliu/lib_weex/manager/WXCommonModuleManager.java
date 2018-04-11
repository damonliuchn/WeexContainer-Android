package com.masonliu.lib_weex.manager;

import com.masonliu.lib_weex.module.CommonModule;
import com.squareup.okhttp.OkHttpClient;
import com.taobao.weex.WXSDKInstance;

/**
 * Created by liumeng on 2018/1/23.
 */
public enum WXCommonModuleManager {
    INSTANCE;
    private WXCommonModuleHandler handler;
    private OkHttpClient okHttpClient;

    public OkHttpClient getOkHttpClient() {
        if (okHttpClient == null) {
            okHttpClient = new OkHttpClient();
        }
        return okHttpClient;
    }

    public void setOkHttpClient(OkHttpClient okHttpClient) {
        this.okHttpClient = okHttpClient;
    }

    public void setHandler(WXCommonModuleHandler handler) {
        this.handler = handler;
    }

    public void handle(String content, CommonModule commonModule) {
        if (handler != null) {
            handler.handle(content, commonModule.mWXSDKInstance, commonModule);
        }
    }

    public interface WXCommonModuleHandler {
        void handle(String content, WXSDKInstance mWXSDKInstance, CommonModule commonModule);
    }
}
