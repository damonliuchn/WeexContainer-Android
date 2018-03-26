package com.masonliu.lib_weex.module;

import com.masonliu.lib_weex.manager.WXCommonModuleManager;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;

/**
 * Created by liumeng02 on 2018/3/26.
 */

public class CommonModule extends WXModule {

    //run ui thread
    @JSMethod(uiThread = true)
    public void handle(String url) {
        WXCommonModuleManager.INSTANCE.handle(url, this);
    }

//    //run JS thread
//    @JSMethod(uiThread = false)
//    public void fireEventSyncCall() {
//        //implement your module logic here
//    }
}
