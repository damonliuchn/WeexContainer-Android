package com.masonliu.lib_weex;

import android.net.Uri;
import android.util.Log;

import com.taobao.weex.WXSDKInstance;

import java.net.URLDecoder;

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
        String pathQuery = "";
        if ("native".equals(uri.getHost())) {//如果scheme是native则使用arouter
            try {
                pathQuery = URLDecoder.decode(uri.getQueryParameter("pathQuery"), "UTF-8");
            } catch (Exception e) {
                e.printStackTrace();
            }
            if (handler == null) {
                Log.e("MASONLIU_LIB_WEEX", "this is native host ,but the handler who handle native host is null");
            } else {
                handler.push(true, pathQuery, mWXSDKInstance, uri, instanceId);
            }
        } else {
            if (handler == null) {
                WeexPageActivity.startFrom(mWXSDKInstance.getContext(), uri.toString(), instanceId);
            } else {
                handler.push(false, pathQuery, mWXSDKInstance, uri, instanceId);
            }
        }
    }

    public interface WXNavigatorPushHandler {
        void push(boolean isNativeAcion, String nativePathQuery, WXSDKInstance mWXSDKInstance, Uri uri, String instanceId);
    }
}
