package com.masonliu.lib_weex.manager;

import com.masonliu.lib_weex.module.CommonModule;
import com.taobao.weex.WXSDKInstance;

/**
 * Created by liumeng on 2018/1/23.
 */
public enum WXCommonModuleManager {
    INSTANCE;
    private WXCommonModuleHandler handler;

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
