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

    public void setHandler(WXCommonModuleHandler handler) {
        this.handler = handler;
    }

    public Map<String, Object> handle(String path, WXSDKInstance mWXSDKInstance) {
        if (handler != null) {
            return handler.handle(path, mWXSDKInstance);
        }
        return null;
    }

    public interface WXCommonModuleHandler {
        Map<String, Object> handle(String path, WXSDKInstance mWXSDKInstance);
    }
}
