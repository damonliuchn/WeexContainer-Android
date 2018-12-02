package com.masonliu.lib_weex.module;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.text.TextUtils;

import com.masonliu.lib_weex.manager.WXCommonModuleManager;
import com.masonliu.lib_weex.manager.WXLoadAndCacheManager;
import com.masonliu.lib_weex.util.CommonUtil;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import java.io.File;
import java.io.FileInputStream;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by liumeng02 on 2018/3/26.
 */

public class CommonModule extends WXModule {

    @JSMethod(uiThread = true)
    public void handle(String url) {
        //处理weex发出的操作信息url
        WXCommonModuleManager.INSTANCE.handle(url, this.mWXSDKInstance);
    }

    @JSMethod(uiThread = true)
    public void handleWithResult(String url, JSCallback callback) {
        //处理weex发出的操作信息url,带返回值
        Map<String, Object> map = new HashMap<>();
        try {
            map = WXCommonModuleManager.INSTANCE.handle(url, this.mWXSDKInstance);
        } catch (Exception e) {
            e.printStackTrace();
        }
        callback.invoke(map);
    }

    @JSMethod(uiThread = false)
    public void handleWithResultInThread(String url, JSCallback callback) {
        //处理weex发出的操作信息url,带返回值，新开子线程
        Map<String, Object> map = new HashMap<>();
        try {
            map = WXCommonModuleManager.INSTANCE.handle(url, this.mWXSDKInstance);
        } catch (Exception e) {
            e.printStackTrace();
        }
        callback.invoke(map);
    }

    /**
     * 内置桥接功能
     **/
    @JSMethod(uiThread = false)//这个地方weex会自动开一个子线程执行方法
    public void nativeHttpGet(String url, JSCallback callback) {
        nativeHttpGetWithCharset(url, null, callback);
    }

    @JSMethod(uiThread = false)//在java端如果有两个相同名字的方法，weex端不能通过参数的不同区分拿一个，会默认调用参数多的那一个
    public void nativeHttpGetWithCharset(String url, String charset, JSCallback callback) {
        Map<String, Object> map = new HashMap<>();
        try {
            Request request = new Request.Builder().url(url).build();
            Response response = WXLoadAndCacheManager.INSTANCE.getOkHttpClient().newCall(request).execute();
            map.put("status", response.code());
            String data;
            if (TextUtils.isEmpty(charset)) {
                data = response.body().string();//自己会到responsebody里找charset
            } else {
                data = CommonUtil.streamToString(response.body().byteStream(), charset);
            }
            map.put("data", data);
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

    /**
     * 内置功能
     **/
    @JSMethod(uiThread = true)
    public void openBrowser(String url) {
        try {
            Intent intent = new Intent();
            intent.setAction("android.intent.action.VIEW");
            Uri uri = Uri.parse(url);
            intent.setData(uri);
            this.mWXSDKInstance.getContext().startActivity(intent);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @JSMethod(uiThread = false)
    public void getBuildInfo(JSCallback callback) {
        Map<String, Object> map = new HashMap<>();
        //BUILD_PROP
        String buildProp = "";
        try {
            buildProp = CommonUtil.streamToString(
                    new FileInputStream(
                            new File(Environment.getRootDirectory(), "build.prop")),
                    null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        map.put("androidBuildProp", buildProp);

        //BUILD_CLASS
        String buildClass = "";
        try {
            StringBuilder sbBuilder = new StringBuilder();
            Field[] fields = Build.class.getDeclaredFields();
            for (Field field : fields) {
                field.setAccessible(true);
                try {
                    sbBuilder.append(field.getName() + ":" + field.get(null).toString() + "\n");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            buildClass = sbBuilder.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        map.put("androidBuildClass", buildClass);
        callback.invoke(map);
    }
}