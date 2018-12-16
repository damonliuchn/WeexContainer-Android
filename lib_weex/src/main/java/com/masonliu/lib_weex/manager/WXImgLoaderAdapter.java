package com.masonliu.lib_weex.manager;

import android.text.TextUtils;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

/**
 * Created by liumeng02 on 2018/12/22.
 */

public class WXImgLoaderAdapter implements IWXImgLoaderAdapter {

    @Override
    public void setImage(final String url, final ImageView view, WXImageQuality quality, WXImageStrategy strategy) {
        WXSDKManager.getInstance().postOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (view == null || view.getLayoutParams() == null
                        || view.getLayoutParams().width <= 0 || view.getLayoutParams().height <= 0) {
                    return;
                }
                if (TextUtils.isEmpty(url)) {
                    view.setImageBitmap(null);
                    return;
                }
                /**
                 * image src接收格式为
                 1、file://xxx
                 2、http://xxx
                 3、//xxx     weex-ui中的图片地址是//开头的
                 当第三种时，控件会根据bundle是否是远程bundle来拼上http:或者file:
                 */
                String temp = url.replace("file://", "http://");
                Glide.with(view.getContext())
                        .load(temp)
                        .into(view);
            }
        }, 0);
    }
}