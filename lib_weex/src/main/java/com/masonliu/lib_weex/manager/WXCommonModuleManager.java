package com.masonliu.lib_weex.manager;

import com.masonliu.lib_weex.module.CommonModule;
import com.squareup.okhttp.OkHttpClient;
import com.taobao.weex.WXSDKInstance;

import java.util.Map;

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

    public Map<String, Object> handle(String content, CommonModule commonModule) {
        if (handler != null) {
            return handler.handle(content, commonModule.mWXSDKInstance, commonModule);
        }
        return null;
    }

    public interface WXCommonModuleHandler {
        Map<String, Object> handle(String content, WXSDKInstance mWXSDKInstance, CommonModule commonModule);
    }
}
