package com.masonliu.lib_weex.manager;

import android.net.Uri;

import com.masonliu.lib_weex.ui.WeexPageActivity;
import com.taobao.weex.WXSDKInstance;

/**
 * Created by liumeng02 on 2018/1/23.
 */
public enum WXNavigatorManager {
    INSTANCE;
    private WXNavigatorPushHandler handler;

    public void setHandler(WXNavigatorPushHandler handler) {
        this.handler = handler;
    }

    public void push(WXSDKInstance mWXSDKInstance, Uri uri, String instanceId) {
        if (handler == null) {
            WeexPageActivity.startFrom(mWXSDKInstance.getContext(), uri.toString(), instanceId);
        } else {
            handler.push(mWXSDKInstance, uri, instanceId);
        }

    }

    public interface WXNavigatorPushHandler {
        void push(WXSDKInstance mWXSDKInstance, Uri uri, String instanceId);
    }
}
