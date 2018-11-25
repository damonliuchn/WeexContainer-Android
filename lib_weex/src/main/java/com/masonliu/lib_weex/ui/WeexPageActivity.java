package com.masonliu.lib_weex.ui;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.FrameLayout;
import android.widget.ProgressBar;

import com.masonliu.lib_weex.generated.R;
import com.masonliu.lib_weex.manager.WXLoadAndCacheManager;
import com.masonliu.lib_weex.manager.WXLoadAndCacheManager.WXDownloadListener;
import com.masonliu.lib_weex.manager.WXURLManager;
import com.masonliu.lib_weex.util.CommonUtil;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.IWXDebugProxy;
import com.taobao.weex.common.WXRenderStrategy;

import java.io.InputStream;
import java.net.URI;
import java.util.HashMap;
import java.util.Map;

public class WeexPageActivity extends AppCompatActivity implements IWXRenderListener {
    private static final String PAGE_NAME = "WeexContainer";
    private static final String KEY_URI = "URI";
    private static final String KEY_BACKUPS_URI = "BACKUPS_URI";
    private WXSDKInstance mWXSDKInstance;
    private FrameLayout mContainer;
    private ProgressBar mProgress;
    private String mUri;
    private String mBackupsUri;
    private RefreshBroadcastReceiver mReceiver;
    private boolean renderSuccess;
    private Map<String, Object> options;

    /**
     *
     * @param activity
     * @param uri
     * assets文件： file://local/weex
     * 存储文件： file://xx
     * https地址： https://xxx
     * http地址： http://
     * @param mBackupsUri
     */
    public static void startFrom(Context activity, String uri, String mBackupsUri) {
        if (TextUtils.isEmpty(uri)) {
            return;
        }
        uri = WXURLManager.INSTANCE.handle(uri);
        Intent intent = new Intent(activity, WeexPageActivity.class);
        intent.putExtra(KEY_URI, uri);
        intent.putExtra(KEY_BACKUPS_URI, mBackupsUri);
        activity.startActivity(intent);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        getWindow().requestFeature(Window.FEATURE_ACTION_BAR);
        getSupportActionBar().hide();
        super.onCreate(savedInstanceState);
        setContentView(R.layout.weexc_activity_container);
        mContainer =  findViewById(R.id.weexc_container);
        mProgress = findViewById(R.id.weexc_progress);

        mUri = getIntent().getStringExtra(KEY_URI);
        mBackupsUri = getIntent().getStringExtra(KEY_BACKUPS_URI);

        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);

        options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL, mUri);
        CommonUtil.appendSysOption(options,this);

        init();
        registerBroadcastReceiver();
    }

    private void init() {
        //获取缓存文件
        String wrapUrl = mUri;
        if (!CommonUtil.isApkDebugable(this)) {//debug时不查找缓存
            //查找缓存文件
            wrapUrl = WXLoadAndCacheManager.INSTANCE.getCache(mUri);
            if(TextUtils.isEmpty(wrapUrl)){
                //查找asset文件
                wrapUrl = getAssetsUri(mUri);
                if(TextUtils.isEmpty(wrapUrl)){
                    //如果assets没有找到则还是使用原始uri
                    //如果有则免去第一次的下载时间
                    wrapUrl = mUri;
                }
            }
        }
        refresh(wrapUrl);
    }


    private void registerBroadcastReceiver() {
        mReceiver = new RefreshBroadcastReceiver();
        IntentFilter filter = new IntentFilter();
        filter.addAction(IWXDebugProxy.ACTION_DEBUG_INSTANCE_REFRESH);
        filter.addAction(IWXDebugProxy.ACTION_INSTANCE_RELOAD);
        registerReceiver(mReceiver, filter);
    }

    private void unregisterBroadcastReceiver() {
        if (mReceiver != null) {
            unregisterReceiver(mReceiver);
        }
        mReceiver = null;
    }

    /**
     * 通过url里的path名获取assetsUri，获取url里斜杠后边，问号前面的名字
     * @param uri
     * @return
     */
    private String getAssetsUri(String uri) {
        if(uri.startsWith("file")){
            return uri;
        }
        //通过path名获取assetsUri，获取url里斜杠后边，问号前面的名字
        String assetsUrl = null;
        try {
            URI uriTemp = new URI(uri);
            String[] names = uriTemp.getPath().split("/");
            String name = names[names.length - 1];
            assetsUrl = "file://local/weex/" + name;
        } catch (Exception e) {
            e.printStackTrace();
        }
        //判断assets文件是否存在
        boolean assetsFileExist = false;
        InputStream in = null;
        try {
            in = getResources().getAssets().open(assetsUrl.replace("file://local/", ""));
            assetsFileExist = true;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            CommonUtil.closeQuietly(in);
        }
        if (assetsFileExist) {
            return assetsUrl;
        }
        return null;
    }

    @Override
    protected void onStart() {
        super.onStart();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStart();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStop();
        }
    }

    public void onBackPressed() {
        if (mWXSDKInstance != null && renderSuccess) {
            mWXSDKInstance.fireGlobalEventCallback("androidBack", new HashMap<String, Object>());
            //兼容老版本bundle文件
            mWXSDKInstance.fireGlobalEventCallback("androidback", new HashMap<String, Object>());
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityDestroy();
        }
        unregisterBroadcastReceiver();
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        if (view.getParent() != null) {
            ((ViewGroup) view.getParent()).removeView(view);
        }
        mProgress.setVisibility(View.INVISIBLE);
        mContainer.removeAllViews();
        mContainer.addView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
        renderSuccess = true;
    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

    }

    /**
     * assets文件： file://local/weex
     * 存储文件： file:///xx
     * https地址： https://xxx
     * http地址： http://
     *
     * @param url
     */
    public void refresh(String url) {
        if (url.startsWith("http")) {
            WXLoadAndCacheManager.INSTANCE.download(url,
                    new WXDownloadListener() {

                        @Override
                        public void onSuccess(String localUrl) {
                            refresh(localUrl);
                        }

                        @Override
                        public void onFailed() {
                            onException(mWXSDKInstance, "-1000", "Download Failed");
                        }
                    });
        } else {
            /**
             * pageName:自定义，一个标示符号。
             * url:支持如下
                 assets文件： file://local/weex
                 存储文件： file:///xx
                 https地址： https://xxx
                 http地址： http://
             * options:初始化时传入WEEX的参数，比如 bundle JS地址 用来指定远程静态资源的base url
             * flag:渲染策略。WXRenderStrategy.APPEND_ASYNC:异步策略先返回外层View，其他View渲染完成后调用onRenderSuccess。
             *  WXRenderStrategy.APPEND_ONCE 所有控件渲染完后后一次性返回。
             */
            mWXSDKInstance.renderByUrl(PAGE_NAME, url, options, null, WXRenderStrategy.APPEND_ASYNC);
        }
    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
        if (!CommonUtil.isApkDebugable(getApplicationContext())) {
            //删除缓存文件
            WXLoadAndCacheManager.INSTANCE.deleteCache(mUri);
            //使用mBackupsUri
            if(!TextUtils.isEmpty(mBackupsUri)){
                mUri = mBackupsUri;
            }
            //重新加载
            init();
        }
    }


    public class RefreshBroadcastReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            if (IWXDebugProxy.ACTION_INSTANCE_RELOAD.equals(intent.getAction()) ||
                    IWXDebugProxy.ACTION_DEBUG_INSTANCE_REFRESH.equals(intent.getAction())) {
                mWXSDKInstance = new WXSDKInstance(WeexPageActivity.this);
                mWXSDKInstance.registerRenderListener(WeexPageActivity.this);
                init();
            }
        }
    }
}
