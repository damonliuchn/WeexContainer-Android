package com.masonliu.lib_weex;

/**
 * Created by liumeng02 on 2018/1/23.
 */
public enum WXURLManager {
    INSTANCE;
    private WXURLHandler handler;

    public void setHandler(WXURLHandler handler) {
        this.handler = handler;
    }

    public String handle(String url) {
        if (handler == null) {
            return url;
        } else {
            return handler.handle(url);
        }
    }

    public interface WXURLHandler {
        String handle(String url);
    }
}
