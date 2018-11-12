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
    private static final String PAGE_NAME = "WXMason";
    private static final String KEY_URI = "URI";
    private static final String KEY_BACKUPS_FILE_NAME = "BACKUPS_FILE_NAME";
    private WXSDKInstance mWXSDKInstance;
    private FrameLayout mContainer;
    private ProgressBar mProgress;
    private String mUri;
    private String mBackupsFileName;
    private RefreshBroadcastReceiver mReceiver;
    private boolean renderSuccess;
    private Map<String, Object> options;

    /**
     * net 模式
     * debug时：net
     * release时：net + filecache + assets
     * <p>
     * local 模式
     * debug时：net
     * release时：assets
     *
     * @param activity
     * @param uri
     * @param mBackupsFileName
     */
    public static void startFrom(Context activity, String uri, String mBackupsFileName) {
        if (TextUtils.isEmpty(uri)) {
            return;
        }
        uri = WXURLManager.INSTANCE.handle(uri);
        Intent intent = new Intent(activity, WeexPageActivity.class);
        intent.putExtra(KEY_URI, uri);
        intent.putExtra(KEY_BACKUPS_FILE_NAME, mBackupsFileName);
        activity.startActivity(intent);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        getWindow().requestFeature(Window.FEATURE_ACTION_BAR);
        getSupportActionBar().hide();
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_network);
        mContainer = (FrameLayout) findViewById(R.id.container);
        mProgress = (ProgressBar) findViewById(R.id.progress);
        mUri = getIntent().getStringExtra(KEY_URI);
        mBackupsFileName = getIntent().getStringExtra(KEY_BACKUPS_FILE_NAME);

        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);
        /**
         * "http://dev.bingocc.com/buiweex-demo/app.weex.js"
         * pageName:自定义，一个标示符号。
         * url:远程bundle JS的下载地址
         * options:初始化时传入WEEX的参数，比如 bundle JS地址 用来指定远程静态资源的base url
         * flag:渲染策略。WXRenderStrategy.APPEND_ASYNC:异步策略先返回外层View，其他View渲染完成后调用onRenderSuccess。WXRenderStrategy.APPEND_ONCE 所有控件渲染完后后一次性返回。
         */
        options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL, mUri);
        init();
        registerBroadcastReceiver();
    }

    private void init() {
        //获取缓存文件
        String wrapUrl = mUri;//debug时直接使用net,远程url使用https
        if (!CommonUtil.isApkDebugable(this)) {
            //查找缓存文件
            wrapUrl = WXLoadAndCacheManager.INSTANCE.getOrCacheUri(mUri);
            //查找asset文件
            wrapUrl = getOrAssetsUri(wrapUrl);
            //如果都没找到则去http下载
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
     * file://local  代表assets
     *
     * @param httpUrl
     * @return
     */
    private String getAssetsUrl(String httpUrl) {
        try {
            URI uri = new URI(httpUrl);
            String[] names = uri.getPath().split("/");
            String name = names[names.length - 1];
            String renderUrl = "file://local/weex/" + name;
            return renderUrl;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    private String getOrAssetsUri(String httpUrl) {
        if (httpUrl.contains("http://")) {
            String assetsUrl = getAssetsUrl(httpUrl);
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
        }
        return httpUrl;
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
            Map<String, Object> params = new HashMap<>();
            params.put("name", "returnmsg");
            mWXSDKInstance.fireGlobalEventCallback("androidback", params);
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
     * file://local/weex
     * file://xx
     * https://xxx or http://
     *
     * @param url
     */
    public void refresh(String url) {
        if (url.startsWith("http")) {
            WXLoadAndCacheManager.INSTANCE.download(url,
                    new WXDownloadListener() {

                        @Override
                        public void onSuccess(String localUrl) {
                            mWXSDKInstance.renderByUrl(PAGE_NAME, localUrl, options, null, WXRenderStrategy.APPEND_ASYNC);
                        }

                        @Override
                        public void onFailed() {
                            onException(mWXSDKInstance, "-1000", "Download Failed");
                        }
                    });
        } else {
            mWXSDKInstance.renderByUrl(PAGE_NAME, url, options, null, WXRenderStrategy.APPEND_ASYNC);
        }
    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
        if (!CommonUtil.isApkDebugable(getApplicationContext())) {
            //删除缓存文件
            WXLoadAndCacheManager.INSTANCE.deleteCache(mUri);
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
