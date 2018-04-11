package com.masonliu.lib_weex.module;

import com.masonliu.lib_weex.manager.WXCommonModuleManager;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by liumeng02 on 2018/3/26.
 */

public class CommonModule extends WXModule {

    //run ui thread
    @JSMethod(uiThread = true)
    public void handle(String url) {
        WXCommonModuleManager.INSTANCE.handle(url, this);
    }

    /*****jscallback*****/
    @JSMethod(uiThread = false)
    public void nativeHttpGet(String url, JSCallback callback) {
        Map<String, Object> map = new HashMap<>();
        try {
            Request request = new Request.Builder().url(url).build();
            Response response = WXCommonModuleManager.INSTANCE.getOkHttpClient().newCall(request).execute();
            map.put("status", response.code());
            map.put("data", response.body().string());
            if (response.isSuccessful()) {
                map.put("ok", true);
            } else {
                map.put("ok", false);
            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("status", 500);
            map.put("data", e.toString());
            map.put("ok", false);
        }
        callback.invoke(map);
    }

//    //run JS thread
//    @JSMethod(uiThread = false)
//    public void fireEventSyncCall() {
//        //implement your module logic here
//    }
}