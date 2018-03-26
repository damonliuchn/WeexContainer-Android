//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.taobao.weex.appfram.navigator;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.net.Uri.Builder;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONException;
import com.alibaba.fastjson.JSONObject;
import com.masonliu.lib_weex.manager.WXNavigatorManager;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.bridge.WXBridgeManager;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.utils.WXLogUtils;

public class WXNavigatorModule extends WXModule {
    public static final String MSG_SUCCESS = "WX_SUCCESS";
    public static final String MSG_FAILED = "WX_FAILED";
    public static final String MSG_PARAM_ERR = "WX_PARAM_ERR";
    public static final String CALLBACK_RESULT = "result";
    public static final String CALLBACK_MESSAGE = "message";
    private static final String INSTANCE_ID = "instanceId";
    private static final String TAG = "Navigator";
    private static final String WEEX = "com.taobao.android.intent.category.WEEX";
    private static final String URL = "url";

    public WXNavigatorModule() {
    }

    @JSMethod(
            uiThread = true
    )
    public void open(JSONObject options, JSCallback success, JSCallback failure) {
        if(options != null) {
            String url = options.getString("url");
            JSCallback callback = success;
            JSONObject result = new JSONObject();
            if(!TextUtils.isEmpty(url)) {
                Uri rawUri = Uri.parse(url);
                String scheme = rawUri.getScheme();
                if(!TextUtils.isEmpty(scheme) && !"http".equalsIgnoreCase(scheme) && !"https".equalsIgnoreCase(scheme)) {
                    try {
                        Intent intent = new Intent("android.intent.action.VIEW", rawUri);
                        this.mWXSDKInstance.getContext().startActivity(intent);
                        result.put("result", "WX_SUCCESS");
                    } catch (Throwable var10) {
                        var10.printStackTrace();
                        result.put("result", "WX_FAILED");
                        result.put("message", "Open page failed.");
                        callback = failure;
                    }
                } else {
                    this.push(options.toJSONString(), success);
                }
            } else {
                result.put("result", "WX_PARAM_ERR");
                result.put("message", "The URL parameter is empty.");
                callback = failure;
            }

            if(callback != null) {
                callback.invoke(result);
            }
        }

    }

    @JSMethod(
            uiThread = true
    )
    public void close(JSONObject options, JSCallback success, JSCallback failure) {
        JSONObject result = new JSONObject();
        JSCallback callback = null;
        if(this.mWXSDKInstance.getContext() instanceof Activity) {
            callback = success;
            ((Activity)this.mWXSDKInstance.getContext()).finish();
        } else {
            result.put("result", "WX_FAILED");
            result.put("message", "Close page failed.");
            callback = failure;
        }

        if(callback != null) {
            callback.invoke(result);
        }

    }

    @JSMethod(
            uiThread = true
    )
    public void push(String param, JSCallback callback) {
        if(!TextUtils.isEmpty(param)) {
            if(WXSDKEngine.getActivityNavBarSetter() != null && WXSDKEngine.getActivityNavBarSetter().push(param)) {
                if(callback != null) {
                    callback.invoke("WX_SUCCESS");
                }

                return;
            }

            try {
                JSONObject jsonObject = JSON.parseObject(param);
                String url = jsonObject.getString("url");
                if(!TextUtils.isEmpty(url)) {
                    Uri rawUri = Uri.parse(url);
                    String scheme = rawUri.getScheme();
                    Builder builder = rawUri.buildUpon();
                    if(TextUtils.isEmpty(scheme)) {
                        builder.scheme("http");
                    }
//                    Intent intent = new Intent("android.intent.action.VIEW", builder.build());
//                    intent.addCategory("com.taobao.android.intent.category.WEEX");
//                    intent.putExtra("instanceId", this.mWXSDKInstance.getInstanceId());
//                    this.mWXSDKInstance.getContext().startActivity(intent);
                    WXNavigatorManager.INSTANCE.push(mWXSDKInstance,builder.build(),mWXSDKInstance.getInstanceId());
                    if(callback != null) {
                        callback.invoke("WX_SUCCESS");
                    }
                }
            } catch (Exception var9) {
                WXLogUtils.eTag("Navigator", var9);
                if(callback != null) {
                    callback.invoke("WX_FAILED");
                }
            }
        } else if(callback != null) {
            callback.invoke("WX_FAILED");
        }

    }

    @JSMethod(
            uiThread = true
    )
    public void pop(String param, JSCallback callback) {
        if(WXSDKEngine.getActivityNavBarSetter() != null && WXSDKEngine.getActivityNavBarSetter().pop(param)) {
            if(callback != null) {
                callback.invoke("WX_SUCCESS");
            }

        } else {
            if(this.mWXSDKInstance.getContext() instanceof Activity) {
                if(callback != null) {
                    callback.invoke("WX_SUCCESS");
                }

                ((Activity)this.mWXSDKInstance.getContext()).finish();
            }

        }
    }

    @JSMethod(
            uiThread = true
    )
    public void setNavBarRightItem(String param, JSCallback callback) {
        if(!TextUtils.isEmpty(param) && WXSDKEngine.getActivityNavBarSetter() != null && WXSDKEngine.getActivityNavBarSetter().setNavBarRightItem(param)) {
            if(callback != null) {
                callback.invoke("WX_SUCCESS");
            }

        } else {
            if(callback != null) {
                callback.invoke("WX_FAILED");
            }

        }
    }

    @JSMethod(
            uiThread = true
    )
    public void clearNavBarRightItem(String param, JSCallback callback) {
        if(WXSDKEngine.getActivityNavBarSetter() != null && WXSDKEngine.getActivityNavBarSetter().clearNavBarRightItem(param)) {
            if(callback != null) {
                callback.invoke("WX_SUCCESS");
            }

        } else {
            if(callback != null) {
                callback.invoke("WX_FAILED");
            }

        }
    }

    @JSMethod(
            uiThread = true
    )
    public void setNavBarLeftItem(String param, JSCallback callback) {
        if(!TextUtils.isEmpty(param) && WXSDKEngine.getActivityNavBarSetter() != null && WXSDKEngine.getActivityNavBarSetter().setNavBarLeftItem(param)) {
            if(callback != null) {
                callback.invoke("WX_SUCCESS");
            }

        } else {
            if(callback != null) {
                callback.invoke("WX_FAILED");
            }

        }
    }

    @JSMethod(
            uiThread = true
    )
    public void clearNavBarLeftItem(String param, JSCallback callback) {
        if(WXSDKEngine.getActivityNavBarSetter() != null && WXSDKEngine.getActivityNavBarSetter().clearNavBarLeftItem(param)) {
            if(callback != null) {
                callback.invoke("WX_SUCCESS");
            }

        } else {
            if(callback != null) {
                callback.invoke("WX_FAILED");
            }

        }
    }

    @JSMethod(
            uiThread = true
    )
    public void setNavBarMoreItem(String param, JSCallback callback) {
        if(!TextUtils.isEmpty(param) && WXSDKEngine.getActivityNavBarSetter() != null && WXSDKEngine.getActivityNavBarSetter().setNavBarMoreItem(param)) {
            if(callback != null) {
                callback.invoke("WX_SUCCESS");
            }

        } else {
            if(callback != null) {
                callback.invoke("WX_FAILED");
            }

        }
    }

    @JSMethod(
            uiThread = true
    )
    public void clearNavBarMoreItem(String param, JSCallback callback) {
        if(WXSDKEngine.getActivityNavBarSetter() != null && WXSDKEngine.getActivityNavBarSetter().clearNavBarMoreItem(param)) {
            if(callback != null) {
                callback.invoke("WX_SUCCESS");
            }

        } else {
            if(callback != null) {
                callback.invoke("WX_FAILED");
            }

        }
    }

    @JSMethod(
            uiThread = true
    )
    public void setNavBarTitle(String param, JSCallback callback) {
        if(!TextUtils.isEmpty(param) && WXSDKEngine.getActivityNavBarSetter() != null && WXSDKEngine.getActivityNavBarSetter().setNavBarTitle(param)) {
            if(callback != null) {
                callback.invoke("WX_SUCCESS");
            }

        } else {
            if(callback != null) {
                callback.invoke("WX_FAILED");
            }

        }
    }

    @JSMethod
    public void setNavBarHidden(String param, String callback) {
        String message = "WX_FAILED";

        try {
            JSONObject jsObj = JSON.parseObject(param);
            int visibility = jsObj.getInteger("hidden").intValue();
            boolean success = this.changeVisibilityOfActionBar(this.mWXSDKInstance.getContext(), visibility);
            if(success) {
                message = "WX_SUCCESS";
            }
        } catch (JSONException var7) {
            WXLogUtils.e("Navigator", WXLogUtils.getStackTrace(var7));
        }

        WXBridgeManager.getInstance().callback(this.mWXSDKInstance.getInstanceId(), callback, message);
    }

    private boolean changeVisibilityOfActionBar(Context context, int visibility) {
        boolean result = false;
        boolean hasAppCompatActivity = false;

        try {
            Class.forName("android.support.v7.app.AppCompatActivity");
            hasAppCompatActivity = true;
        } catch (ClassNotFoundException var6) {
            var6.printStackTrace();
        }

        if(hasAppCompatActivity && this.mWXSDKInstance.getContext() instanceof AppCompatActivity) {
            ActionBar actionbar = ((AppCompatActivity)this.mWXSDKInstance.getContext()).getSupportActionBar();
            if(actionbar != null) {
                switch(visibility) {
                    case 0:
                        actionbar.show();
                        result = true;
                        break;
                    case 1:
                        actionbar.hide();
                        result = true;
                }
            }
        } else if(this.mWXSDKInstance.getContext() instanceof Activity) {
            android.app.ActionBar actionbar = ((Activity)this.mWXSDKInstance.getContext()).getActionBar();
            if(actionbar != null) {
                switch(visibility) {
                    case 0:
                        actionbar.show();
                        result = true;
                        break;
                    case 1:
                        actionbar.hide();
                        result = true;
                }
            }
        }

        return result;
    }
}
