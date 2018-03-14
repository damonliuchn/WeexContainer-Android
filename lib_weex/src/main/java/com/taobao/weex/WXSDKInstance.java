//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.taobao.weex;

import android.app.AlertDialog.Builder;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.Message;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.annotation.RestrictTo;
import android.support.annotation.RestrictTo.Scope;
import android.text.TextUtils;
import android.view.Menu;
import android.view.View;
import android.view.ViewGroup;
import android.view.View.OnLayoutChangeListener;
import android.view.ViewGroup.LayoutParams;
import android.widget.ScrollView;
import com.alibaba.fastjson.JSONObject;
import com.masonliu.lib_weex.WXCacheManager;
import com.taobao.weex.WXRenderErrorCode.DegradPassivityCode;
import com.taobao.weex.adapter.IDrawableLoader;
import com.taobao.weex.adapter.IWXHttpAdapter;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.adapter.IWXUserTrackAdapter;
import com.taobao.weex.adapter.URIAdapter;
import com.taobao.weex.adapter.IWXHttpAdapter.OnHttpListener;
import com.taobao.weex.appfram.websocket.IWebSocketAdapter;
import com.taobao.weex.bridge.EventResult;
import com.taobao.weex.bridge.NativeInvokeHelper;
import com.taobao.weex.bridge.SimpleJSCallback;
import com.taobao.weex.bridge.WXBridgeManager;
import com.taobao.weex.bridge.WXModuleManager;
import com.taobao.weex.common.Destroyable;
import com.taobao.weex.common.OnWXScrollListener;
import com.taobao.weex.common.WXErrorCode;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXPerformance;
import com.taobao.weex.common.WXRefreshData;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.common.WXRequest;
import com.taobao.weex.common.WXResponse;
import com.taobao.weex.dom.DomContext;
import com.taobao.weex.dom.WXDomTask;
import com.taobao.weex.dom.WXEvent;
import com.taobao.weex.http.WXHttpUtil;
import com.taobao.weex.tracing.WXTracing;
import com.taobao.weex.tracing.WXTracing.TraceEvent;
import com.taobao.weex.ui.component.NestedContainer;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentFactory;
import com.taobao.weex.ui.component.WXEmbed;
import com.taobao.weex.ui.flat.FlatGUIContext;
import com.taobao.weex.ui.view.WXScrollView;
import com.taobao.weex.ui.view.WXScrollView.WXScrollViewListener;
import com.taobao.weex.utils.Trace;
import com.taobao.weex.utils.WXExceptionUtils;
import com.taobao.weex.utils.WXFileUtils;
import com.taobao.weex.utils.WXJsonUtils;
import com.taobao.weex.utils.WXLogUtils;
import com.taobao.weex.utils.WXReflectionUtils;
import com.taobao.weex.utils.WXViewUtils;
import java.io.Serializable;
import java.io.UnsupportedEncodingException;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

public class WXSDKInstance implements IWXActivityStateListener, DomContext, OnLayoutChangeListener {
    private static final String SOURCE_TEMPLATE_BASE64_MD5 = "templateSourceBase64MD5";
    public boolean mEnd = false;
    public static final String BUNDLE_URL = "bundleUrl";
    private IWXUserTrackAdapter mUserTrackAdapter;
    private IWXRenderListener mRenderListener;
    private IWXStatisticsListener mStatisticsListener;
    Context mContext;
    private final String mInstanceId;
    private RenderContainer mRenderContainer;
    private WXComponent mRootComp;
    private boolean mRendered;
    private WXRefreshData mLastRefreshData;
    private WXSDKInstance.NestedInstanceInterceptor mNestedInstanceInterceptor;
    private String mBundleUrl = "";
    public static String requestUrl = "requestUrl";
    private boolean isDestroy = false;
    private Map<String, Serializable> mUserTrackParams;
    private NativeInvokeHelper mNativeInvokeHelper;
    private boolean isCommit = false;
    private WXGlobalEventReceiver mGlobalEventReceiver = null;
    private boolean trackComponent;
    private boolean enableLayerType = true;
    private boolean mNeedValidate = false;
    private boolean mNeedReLoad = false;
    private static volatile int mViewPortWidth = 750;
    private int mInstanceViewPortWidth = 750;
    @NonNull
    private FlatGUIContext mFlatGUIContext = new FlatGUIContext();
    public long mRenderStartNanos;
    public int mExecJSTraceId = WXTracing.nextId();
    public String[] mwxDims = new String[5];
    public long[] measureTimes = new long[5];
    public WeakReference<String> templateRef;
    public Map<String, List<String>> responseHeaders = new HashMap();
    private WXRenderStrategy mRenderStrategy;
    public long mRenderStartTime;
    private long mRefreshStartTime;
    private WXPerformance mWXPerformance;
    private ScrollView mScrollView;
    private WXScrollViewListener mWXScrollViewListener;
    private List<OnWXScrollListener> mWXScrollListeners;
    private volatile boolean isPreRenderMode;
    private LayoutFinishListener mLayoutFinishListener;
    private boolean mCurrentGround;
    private ComponentObserver mComponentObserver;
    private boolean mIsCommitedDomAtionExp;
    public PriorityQueue<WXEmbed> hiddenEmbeds;
    private int maxHiddenEmbedsNum;
    private int mMaxDeepLayer;
    private List<WXSDKInstance.OnInstanceVisibleListener> mVisibleListeners;
    private boolean mCreateInstance;
    private HashMap<String, List<String>> mGlobalEvents;

    public boolean getismIsCommitedDomAtionExp() {
        return this.mIsCommitedDomAtionExp;
    }

    public void setmIsCommitedDomAtionExp(boolean mIsCommitedDomAtionExp) {
        this.mIsCommitedDomAtionExp = mIsCommitedDomAtionExp;
    }

    public int getMaxHiddenEmbedsNum() {
        return this.maxHiddenEmbedsNum;
    }

    public void setMaxHiddenEmbedsNum(int maxHiddenEmbedsNum) {
        this.maxHiddenEmbedsNum = maxHiddenEmbedsNum;
    }

    public void setRenderContainer(RenderContainer a) {
        if(a != null) {
            a.setSDKInstance(this);
            a.addOnLayoutChangeListener(this);
        }

        this.mRenderContainer = a;
    }

    public boolean isTrackComponent() {
        return this.trackComponent;
    }

    public void setTrackComponent(boolean trackComponent) {
        this.trackComponent = trackComponent;
    }

    public boolean isLayerTypeEnabled() {
        return this.enableLayerType;
    }

    public void enableLayerType(boolean enable) {
        this.enableLayerType = enable;
    }

    @RestrictTo({Scope.LIBRARY})
    @NonNull
    public FlatGUIContext getFlatUIContext() {
        return this.mFlatGUIContext;
    }

    public boolean isNeedValidate() {
        return this.mNeedValidate;
    }

    public boolean isNeedReLoad() {
        return this.mNeedReLoad;
    }

    public void setNeedLoad(boolean load) {
        this.mNeedReLoad = load;
    }

    /** @deprecated */
    @Deprecated
    public void setViewPortWidth(int viewPortWidth) {
        mViewPortWidth = viewPortWidth;
    }

    /** @deprecated */
    @Deprecated
    public static int getViewPortWidth() {
        return mViewPortWidth;
    }

    public void setInstanceViewPortWidth(int instanceViewPortWidth) {
        this.mInstanceViewPortWidth = instanceViewPortWidth;
    }

    public int getInstanceViewPortWidth() {
        return this.mInstanceViewPortWidth;
    }

    public WXSDKInstance(Context context) {
        this.mRenderStrategy = WXRenderStrategy.APPEND_ASYNC;
        this.mCurrentGround = false;
        this.mIsCommitedDomAtionExp = false;
        this.maxHiddenEmbedsNum = -1;
        this.mVisibleListeners = new ArrayList();
        this.mCreateInstance = true;
        this.mGlobalEvents = new HashMap();
        this.mInstanceId = WXSDKManager.getInstance().generateInstanceId();
        this.init(context);
    }

    @RestrictTo({Scope.TESTS})
    WXSDKInstance(Context context, String id) {
        this.mRenderStrategy = WXRenderStrategy.APPEND_ASYNC;
        this.mCurrentGround = false;
        this.mIsCommitedDomAtionExp = false;
        this.maxHiddenEmbedsNum = -1;
        this.mVisibleListeners = new ArrayList();
        this.mCreateInstance = true;
        this.mGlobalEvents = new HashMap();
        this.mInstanceId = id;
        this.init(context);
    }

    public WXComponent getRootComponent() {
        return this.mRootComp;
    }

    public void setNestedInstanceInterceptor(WXSDKInstance.NestedInstanceInterceptor interceptor) {
        this.mNestedInstanceInterceptor = interceptor;
    }

    public final WXSDKInstance createNestedInstance(NestedContainer container) {
        WXSDKInstance sdkInstance = this.newNestedInstance();
        if(this.mNestedInstanceInterceptor != null) {
            this.mNestedInstanceInterceptor.onCreateNestInstance(sdkInstance, container);
        }

        return sdkInstance;
    }

    protected WXSDKInstance newNestedInstance() {
        return new WXSDKInstance(this.mContext);
    }

    public void addOnInstanceVisibleListener(WXSDKInstance.OnInstanceVisibleListener l) {
        this.mVisibleListeners.add(l);
    }

    public void removeOnInstanceVisibleListener(WXSDKInstance.OnInstanceVisibleListener l) {
        this.mVisibleListeners.remove(l);
    }

    public void init(Context context) {
        this.mContext = context;
        this.mNativeInvokeHelper = new NativeInvokeHelper(this.mInstanceId);
        this.mWXPerformance = new WXPerformance();
        this.mWXPerformance.WXSDKVersion = WXEnvironment.WXSDK_VERSION;
        this.mWXPerformance.JSLibInitTime = WXEnvironment.sJSLibInitTime;
        this.mUserTrackAdapter = WXSDKManager.getInstance().getIWXUserTrackAdapter();
    }

    public void setComponentObserver(ComponentObserver observer) {
        this.mComponentObserver = observer;
    }

    public ComponentObserver getComponentObserver() {
        return this.mComponentObserver;
    }

    public NativeInvokeHelper getNativeInvokeHelper() {
        return this.mNativeInvokeHelper;
    }

    public void setBizType(String bizType) {
        if(!TextUtils.isEmpty(bizType)) {
            this.mWXPerformance.bizType = bizType;
        }

    }

    public ScrollView getScrollView() {
        return this.mScrollView;
    }

    public void setRootScrollView(ScrollView scrollView) {
        this.mScrollView = scrollView;
        if(this.mWXScrollViewListener != null) {
            ((WXScrollView)this.mScrollView).addScrollViewListener(this.mWXScrollViewListener);
        }

    }

    /** @deprecated */
    @Deprecated
    public void registerScrollViewListener(WXScrollViewListener scrollViewListener) {
        this.mWXScrollViewListener = scrollViewListener;
    }

    /** @deprecated */
    @Deprecated
    public WXScrollViewListener getScrollViewListener() {
        return this.mWXScrollViewListener;
    }

    /** @deprecated */
    @Deprecated
    public void setIWXUserTrackAdapter(IWXUserTrackAdapter adapter) {
    }

    public void render(String template, Map<String, Object> options, String jsonInitData) {
        this.render(template, options, jsonInitData, WXRenderStrategy.APPEND_ASYNC);
    }

    /** @deprecated */
    @Deprecated
    public void render(String template, Map<String, Object> options, String jsonInitData, WXRenderStrategy flag) {
        this.render("default", template, options, jsonInitData, flag);
    }

    public void render(String pageName, String template, Map<String, Object> options, String jsonInitData, WXRenderStrategy flag) {
        if(WXEnvironment.isApkDebugable() && "default".equals(pageName)) {
            WXLogUtils.e("WXSDKInstance", "Please set your pageName or your js bundle url !!!!!!!");
            if(this.getUIContext() != null) {
                (new Builder(this.getUIContext())).setTitle("Error: Missing pageName").setMessage("We highly recommend you to set pageName. Call\nWXSDKInstance#render(String pageName, String template, Map<String, Object> options, String jsonInitData, WXRenderStrategy flag)\nto fix it.").show();
            }

        } else {
            this.renderInternal(pageName, template, options, jsonInitData, flag);
        }
    }

    private void ensureRenderArchor() {
        if(this.mRenderContainer == null && this.getContext() != null) {
            this.mRenderContainer = new RenderContainer(this.getContext());
            this.mRenderContainer.setLayoutParams(new LayoutParams(-1, -1));
            this.mRenderContainer.setBackgroundColor(0);
            this.mRenderContainer.setSDKInstance(this);
            this.mRenderContainer.addOnLayoutChangeListener(this);
        }

    }

    private void renderInternal(String pageName, String template, Map<String, Object> options, String jsonInitData, WXRenderStrategy flag) {
        if(!this.mRendered && !TextUtils.isEmpty(template)) {
            this.mWXPerformance.pageName = TextUtils.isEmpty(pageName)?"defaultBundleUrl":pageName;
            if(TextUtils.isEmpty(this.mBundleUrl)) {
                this.mBundleUrl = this.mWXPerformance.pageName;
            }

            WXLogUtils.d("WXSDKInstance", "Start render page: " + pageName);
            if(WXTracing.isAvailable()) {
                TraceEvent traceEvent = WXTracing.newEvent("executeBundleJS", this.mInstanceId, -1);
                traceEvent.traceId = this.mExecJSTraceId;
                traceEvent.iid = this.mInstanceId;
                traceEvent.tname = "JSThread";
                traceEvent.ph = "B";
                traceEvent.submit();
                this.mRenderStartNanos = System.nanoTime();
            }

            this.ensureRenderArchor();
            Map<String, Object> renderOptions = options;
            if(options == null) {
                renderOptions = new HashMap();
            }

            if(WXEnvironment.sDynamicMode && !TextUtils.isEmpty(WXEnvironment.sDynamicUrl) && ((Map)renderOptions).get("dynamicMode") == null) {
                ((Map)renderOptions).put("dynamicMode", "true");
                this.renderByUrl(pageName, WXEnvironment.sDynamicUrl, (Map)renderOptions, jsonInitData, flag);
            } else {
                this.mWXPerformance.JSTemplateSize = (double)((float)template.length() / 1024.0F);
                this.mRenderStartTime = System.currentTimeMillis();
                this.mRenderStrategy = flag;
                WXSDKManager.getInstance().setCrashInfo("wx_current_url", pageName);
                WXSDKManager.getInstance().createInstance(this, template, (Map)renderOptions, jsonInitData);
                this.mRendered = true;
            }
        }
    }

    private void renderByUrlInternal(String pageName, String url, Map<String, Object> options, String jsonInitData, WXRenderStrategy flag) {
        this.ensureRenderArchor();
        pageName = this.wrapPageName(pageName, url);
        this.mBundleUrl = url;
        if(WXSDKManager.getInstance().getValidateProcessor() != null) {
            this.mNeedValidate = WXSDKManager.getInstance().getValidateProcessor().needValidate(this.mBundleUrl);
        }

        Map<String, Object> renderOptions = options;
        if(options == null) {
            renderOptions = new HashMap();
        }

        if(!((Map)renderOptions).containsKey("bundleUrl")) {
            ((Map)renderOptions).put("bundleUrl", url);
        }

        Uri uri = Uri.parse(url);
        if(uri != null && TextUtils.equals(uri.getScheme(), "file")) {
            this.render(pageName, WXFileUtils.loadFileOrAsset(this.assembleFilePath(uri), this.mContext), (Map)renderOptions, jsonInitData, flag);
        } else {
            IWXHttpAdapter adapter = WXSDKManager.getInstance().getIWXHttpAdapter();
            WXRequest wxRequest = new WXRequest();
            wxRequest.url = this.rewriteUri(Uri.parse(url), "bundle").toString();
            if(wxRequest != null && !TextUtils.isEmpty(wxRequest.url)) {
                requestUrl = wxRequest.url;
            } else {
                requestUrl = pageName;
            }

            if(wxRequest.paramMap == null) {
                wxRequest.paramMap = new HashMap();
            }

            wxRequest.paramMap.put("user-agent", WXHttpUtil.assembleUserAgent(this.mContext, WXEnvironment.getConfig()));
            WXSDKInstance.WXHttpListener httpListener = new WXSDKInstance.WXHttpListener(pageName, (Map)renderOptions, jsonInitData, flag, System.currentTimeMillis());
            httpListener.setSDKInstance(this);
            adapter.sendRequest(wxRequest, httpListener);
        }
    }

    /** @deprecated */
    @Deprecated
    public void render(String pageName, String template, Map<String, Object> options, String jsonInitData, int width, int height, WXRenderStrategy flag) {
        this.render(pageName, template, options, jsonInitData, flag);
    }

    public void render(String template) {
        this.render("default", template, (Map)null, (String)null, this.mRenderStrategy);
    }

    /** @deprecated */
    @Deprecated
    public void render(String template, int width, int height) {
        this.render(template);
    }

    /** @deprecated */
    @Deprecated
    public void renderByUrl(String pageName, String url, Map<String, Object> options, String jsonInitData, int width, int height, WXRenderStrategy flag) {
        this.renderByUrl(pageName, url, options, jsonInitData, flag);
    }

    public void renderByUrl(String pageName, String url, Map<String, Object> options, String jsonInitData, WXRenderStrategy flag) {
        this.renderByUrlInternal(pageName, url, options, jsonInitData, flag);
    }

    private String wrapPageName(String pageName, String url) {
        if(TextUtils.equals(pageName, "default")) {
            pageName = url;
            WXExceptionUtils.degradeUrl = url;

            try {
                Uri uri = Uri.parse(url);
                if(uri != null) {
                    android.net.Uri.Builder builder = new android.net.Uri.Builder();
                    builder.scheme(uri.getScheme());
                    builder.authority(uri.getAuthority());
                    builder.path(uri.getPath());
                    pageName = builder.toString();
                }
            } catch (Exception var5) {
                ;
            }
        }

        return pageName;
    }

    private String assembleFilePath(Uri uri) {
        return uri != null && uri.getPath() != null?uri.getPath().replaceFirst("/", ""):"";
    }

    public void reloadPage(boolean reloadThis) {
        WXSDKEngine.reload();
        if(reloadThis && this.mContext != null) {
            Intent intent = new Intent();
            intent.setAction("INSTANCE_RELOAD");
            intent.putExtra("url", this.mBundleUrl);
            this.mContext.sendBroadcast(intent);
        }

    }

    public void refreshInstance(Map<String, Object> data) {
        if(data != null) {
            this.refreshInstance(WXJsonUtils.fromObjectToJSONString(data));
        }
    }

    public void refreshInstance(String jsonData) {
        if(jsonData != null) {
            this.mRefreshStartTime = System.currentTimeMillis();
            if(this.mLastRefreshData != null) {
                this.mLastRefreshData.isDirty = true;
            }

            this.mLastRefreshData = new WXRefreshData(jsonData, false);
            WXSDKManager.getInstance().refreshInstance(this.mInstanceId, this.mLastRefreshData);
        }
    }

    public WXRenderStrategy getRenderStrategy() {
        return this.mRenderStrategy;
    }

    public Context getUIContext() {
        return this.mContext;
    }

    public String getInstanceId() {
        return this.mInstanceId;
    }

    public Context getContext() {
        if(this.mContext == null) {
            WXLogUtils.e("WXSdkInstance mContext == null");
        }

        return this.mContext;
    }

    public int getWeexHeight() {
        return this.mRenderContainer == null?0:this.mRenderContainer.getHeight();
    }

    public int getWeexWidth() {
        return this.mRenderContainer == null?0:this.mRenderContainer.getWidth();
    }

    public IWXImgLoaderAdapter getImgLoaderAdapter() {
        return WXSDKManager.getInstance().getIWXImgLoaderAdapter();
    }

    public IDrawableLoader getDrawableLoader() {
        return WXSDKManager.getInstance().getDrawableLoader();
    }

    public URIAdapter getURIAdapter() {
        return WXSDKManager.getInstance().getURIAdapter();
    }

    public Uri rewriteUri(Uri uri, String type) {
        return this.getURIAdapter().rewrite(this, type, uri);
    }

    public IWXHttpAdapter getWXHttpAdapter() {
        return WXSDKManager.getInstance().getIWXHttpAdapter();
    }

    public IWXStatisticsListener getWXStatisticsListener() {
        return this.mStatisticsListener;
    }

    @Nullable
    public IWebSocketAdapter getWXWebSocketAdapter() {
        return WXSDKManager.getInstance().getIWXWebSocketAdapter();
    }

    /** @deprecated */
    @Deprecated
    public void reloadImages() {
        if(this.mScrollView != null) {
            ;
        }
    }

    public boolean isPreRenderMode() {
        return this.isPreRenderMode;
    }

    public void setPreRenderMode(final boolean isPreRenderMode) {
        WXSDKManager.getInstance().getWXRenderManager().postOnUiThread(new Runnable() {
            public void run() {
                WXSDKInstance.this.isPreRenderMode = isPreRenderMode;
            }
        }, 0L);
    }

    public void setContext(@NonNull Context context) {
        this.mContext = context;
    }

    public void registerRenderListener(IWXRenderListener listener) {
        this.mRenderListener = listener;
    }

    /** @deprecated */
    @Deprecated
    public void registerActivityStateListener(IWXActivityStateListener listener) {
    }

    public void registerStatisticsListener(IWXStatisticsListener listener) {
        this.mStatisticsListener = listener;
    }

    public void setLayoutFinishListener(@Nullable LayoutFinishListener listener) {
        this.mLayoutFinishListener = listener;
    }

    public LayoutFinishListener getLayoutFinishListener() {
        return this.mLayoutFinishListener;
    }

    public void setRenderStartTime(long renderStartTime) {
        this.mRenderStartTime = renderStartTime;
    }

    public void onActivityCreate() {
        WXModuleManager.onActivityCreate(this.getInstanceId());
        if(this.mRootComp != null) {
            this.mRootComp.onActivityCreate();
        } else {
            WXLogUtils.w("Warning :Component tree has not build completely,onActivityCreate can not be call!");
        }

        this.mGlobalEventReceiver = new WXGlobalEventReceiver(this);
        this.getContext().registerReceiver(this.mGlobalEventReceiver, new IntentFilter("wx_global_action"));
    }

    public void onActivityStart() {
        WXModuleManager.onActivityStart(this.getInstanceId());
        if(this.mRootComp != null) {
            this.mRootComp.onActivityStart();
        } else {
            WXLogUtils.w("Warning :Component tree has not build completely,onActivityStart can not be call!");
        }

    }

    public boolean onCreateOptionsMenu(Menu menu) {
        WXModuleManager.onCreateOptionsMenu(this.getInstanceId(), menu);
        if(this.mRootComp != null) {
            this.mRootComp.onCreateOptionsMenu(menu);
        } else {
            WXLogUtils.w("Warning :Component tree has not build completely,onActivityStart can not be call!");
        }

        return true;
    }

    public void onActivityPause() {
        this.onViewDisappear();
        if(!this.isCommit) {
            Set<String> componentTypes = WXComponentFactory.getComponentTypesByInstanceId(this.getInstanceId());
            if(componentTypes != null && componentTypes.contains("scroller")) {
                this.mWXPerformance.useScroller = 1;
            }

            this.mWXPerformance.maxDeepViewLayer = this.getMaxDeepLayer();
            this.mWXPerformance.wxDims = this.mwxDims;
            this.mWXPerformance.measureTimes = this.measureTimes;
            if(this.mUserTrackAdapter != null) {
                this.mUserTrackAdapter.commit(this.mContext, (String)null, "load", this.mWXPerformance, this.getUserTrackParams());
            }

            this.isCommit = true;
        }

        WXModuleManager.onActivityPause(this.getInstanceId());
        if(this.mRootComp != null) {
            this.mRootComp.onActivityPause();
        } else {
            WXLogUtils.w("Warning :Component tree has not build completely,onActivityPause can not be call!");
        }

        WXLogUtils.i("Application onActivityPause()");
        if(!this.mCurrentGround) {
            WXLogUtils.i("Application to be in the backround");
            Intent intent = new Intent("wx_global_action");
            intent.putExtra("eventName", "WXApplicationWillResignActiveEvent");
            intent.putExtra("wx_instanceid", this.getInstanceId());
            this.mContext.sendBroadcast(intent);
            this.mCurrentGround = true;
        }

    }

    public void onActivityResume() {
        WXModuleManager.onActivityResume(this.getInstanceId());
        if(this.mRootComp != null) {
            this.mRootComp.onActivityResume();
        } else {
            WXLogUtils.w("Warning :Component tree has not build completely, onActivityResume can not be call!");
        }

        if(this.mCurrentGround) {
            WXLogUtils.i("Application  to be in the foreground");
            Intent intent = new Intent("wx_global_action");
            intent.putExtra("eventName", "WXApplicationDidBecomeActiveEvent");
            intent.putExtra("wx_instanceid", this.getInstanceId());
            this.mContext.sendBroadcast(intent);
            this.mCurrentGround = false;
        }

        this.onViewAppear();
        this.setViewPortWidth(this.mInstanceViewPortWidth);
    }

    public void onActivityStop() {
        WXModuleManager.onActivityStop(this.getInstanceId());
        if(this.mRootComp != null) {
            this.mRootComp.onActivityStop();
        } else {
            WXLogUtils.w("Warning :Component tree has not build completely, onActivityStop can not be call!");
        }

    }

    public void onActivityDestroy() {
        WXModuleManager.onActivityDestroy(this.getInstanceId());
        if(this.mRootComp != null) {
            this.mRootComp.onActivityDestroy();
        } else {
            WXLogUtils.w("Warning :Component tree has not build completely, onActivityDestroy can not be call!");
        }

        this.destroy();
    }

    public boolean onActivityBack() {
        WXModuleManager.onActivityBack(this.getInstanceId());
        if(this.mRootComp != null) {
            return this.mRootComp.onActivityBack();
        } else {
            WXLogUtils.w("Warning :Component tree has not build completely, onActivityBack can not be call!");
            return false;
        }
    }

    public boolean onBackPressed() {
        WXComponent comp = this.getRootComponent();
        if(comp != null) {
            WXEvent events = comp.getDomObject().getEvents();
            boolean hasBackPressed = events.contains("clickbackitem");
            if(hasBackPressed) {
                this.fireEvent(comp.getRef(), "clickbackitem", (Map)null, (Map)null);
            }

            return hasBackPressed;
        } else {
            return false;
        }
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        WXModuleManager.onActivityResult(this.getInstanceId(), requestCode, resultCode, data);
        if(this.mRootComp != null) {
            this.mRootComp.onActivityResult(requestCode, resultCode, data);
        } else {
            WXLogUtils.w("Warning :Component tree has not build completely, onActivityResult can not be call!");
        }

    }

    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        WXModuleManager.onRequestPermissionsResult(this.getInstanceId(), requestCode, permissions, grantResults);
        if(this.mRootComp != null) {
            this.mRootComp.onRequestPermissionsResult(requestCode, permissions, grantResults);
        } else {
            WXLogUtils.w("Warning :Component tree has not build completely, onRequestPermissionsResult can not be call!");
        }

    }

    public void onViewDisappear() {
        WXComponent comp = this.getRootComponent();
        if(comp != null) {
            this.fireEvent(comp.getRef(), "viewdisappear", (Map)null, (Map)null);
            Iterator var2 = this.mVisibleListeners.iterator();

            while(var2.hasNext()) {
                WXSDKInstance.OnInstanceVisibleListener instance = (WXSDKInstance.OnInstanceVisibleListener)var2.next();
                instance.onDisappear();
            }
        }

    }

    public void onViewAppear() {
        WXComponent comp = this.getRootComponent();
        if(comp != null) {
            this.fireEvent(comp.getRef(), "viewappear", (Map)null, (Map)null);
            Iterator var2 = this.mVisibleListeners.iterator();

            while(var2.hasNext()) {
                WXSDKInstance.OnInstanceVisibleListener instance = (WXSDKInstance.OnInstanceVisibleListener)var2.next();
                instance.onAppear();
            }
        }

    }

    public void onCreateFinish() {
        if(this.mContext != null) {
            this.runOnUiThread(new Runnable() {
                public void run() {
                    if(WXSDKInstance.this.mContext != null) {
                        WXSDKInstance.this.onViewAppear();
                        View wxView = WXSDKInstance.this.mRenderContainer;
                        if(WXSDKInstance.this.mRenderListener != null) {
                            WXSDKInstance.this.mRenderListener.onViewCreated(WXSDKInstance.this, wxView);
                        }

                        if(WXSDKInstance.this.mStatisticsListener != null) {
                            WXSDKInstance.this.mStatisticsListener.onFirstView();
                        }
                    }

                }
            });
        }

    }

    public void onUpdateFinish() {
        WXLogUtils.d("Instance onUpdateSuccess");
    }

    public void runOnUiThread(Runnable action) {
        WXSDKManager.getInstance().postOnUiThread(action, 0L);
    }

    public void onRenderSuccess(final int width, final int height) {
        this.firstScreenRenderFinished();
        long time = System.currentTimeMillis() - this.mRenderStartTime;
        WXLogUtils.renderPerformanceLog("onRenderSuccess", time);
        WXLogUtils.renderPerformanceLog("   invokeCreateInstance", this.mWXPerformance.communicateTime);
        WXLogUtils.renderPerformanceLog("   TotalCallNativeTime", this.mWXPerformance.callNativeTime);
        WXLogUtils.renderPerformanceLog("       TotalJsonParseTime", this.mWXPerformance.parseJsonTime);
        WXLogUtils.renderPerformanceLog("   TotalBatchTime", this.mWXPerformance.batchTime);
        WXLogUtils.renderPerformanceLog("       TotalCssLayoutTime", this.mWXPerformance.cssLayoutTime);
        WXLogUtils.renderPerformanceLog("       TotalApplyUpdateTime", this.mWXPerformance.applyUpdateTime);
        WXLogUtils.renderPerformanceLog("       TotalUpdateDomObjTime", this.mWXPerformance.updateDomObjTime);
        this.mWXPerformance.totalTime = (double)time;
        if((double)this.mWXPerformance.screenRenderTime < 0.001D) {
            this.mWXPerformance.screenRenderTime = time;
        }

        this.mWXPerformance.componentCount = (long)WXComponent.mComponentNum;
        WXLogUtils.d("weex_perf", "mComponentNum:" + WXComponent.mComponentNum);
        WXComponent.mComponentNum = 0;
        if(this.mRenderListener != null && this.mContext != null) {
            this.runOnUiThread(new Runnable() {
                public void run() {
                    if(WXSDKInstance.this.mRenderListener != null && WXSDKInstance.this.mContext != null) {
                        WXSDKInstance.this.mRenderListener.onRenderSuccess(WXSDKInstance.this, width, height);
                        if(WXSDKInstance.this.mUserTrackAdapter != null) {
                            WXPerformance performance = new WXPerformance();
                            performance.errCode = WXErrorCode.WX_SUCCESS.getErrorCode();
                            performance.args = WXSDKInstance.this.getBundleUrl();
                            WXSDKInstance.this.mUserTrackAdapter.commit(WXSDKInstance.this.mContext, (String)null, "jsBridge", performance, WXSDKInstance.this.getUserTrackParams());
                        }

                        WXLogUtils.d("weex_perf", WXSDKInstance.this.mWXPerformance.toString());
                    }

                }
            });
        }

        if(!WXEnvironment.isApkDebugable()) {
            WXLogUtils.e("weex_perf", this.mWXPerformance.getPerfData());
        }

    }

    public void onRefreshSuccess(final int width, final int height) {
        WXLogUtils.renderPerformanceLog("onRefreshSuccess", System.currentTimeMillis() - this.mRefreshStartTime);
        if(this.mRenderListener != null && this.mContext != null) {
            this.runOnUiThread(new Runnable() {
                public void run() {
                    if(WXSDKInstance.this.mRenderListener != null && WXSDKInstance.this.mContext != null) {
                        WXSDKInstance.this.mRenderListener.onRefreshSuccess(WXSDKInstance.this, width, height);
                    }

                }
            });
        }

    }

    public void onRenderError(final String errCode, final String msg) {
        if(this.mRenderListener != null && this.mContext != null) {
            this.runOnUiThread(new Runnable() {
                public void run() {
                    if(WXSDKInstance.this.mRenderListener != null && WXSDKInstance.this.mContext != null) {
                        WXSDKInstance.this.mRenderListener.onException(WXSDKInstance.this, errCode, msg);
                    }

                }
            });
        }

    }

    public void onJSException(final String errCode, final String function, final String exception) {
        if(this.mRenderListener != null && this.mContext != null) {
            this.runOnUiThread(new Runnable() {
                public void run() {
                    if(WXSDKInstance.this.mRenderListener != null && WXSDKInstance.this.mContext != null) {
                        StringBuilder builder = new StringBuilder();
                        builder.append(function);
                        builder.append(exception);
                        WXSDKInstance.this.mRenderListener.onException(WXSDKInstance.this, errCode, builder.toString());
                    }

                }
            });
        }

    }

    public final void onLayoutChange(View v, int left, int top, int right, int bottom, int oldLeft, int oldTop, int oldRight, int oldBottom) {
        if(left != oldLeft || top != oldTop || right != oldRight || bottom != oldBottom) {
            this.onLayoutChange(v);
        }

    }

    public void onLayoutChange(View godView) {
    }

    public void firstScreenCreateInstanceTime(long time) {
        if(this.mCreateInstance) {
            this.mWXPerformance.firstScreenJSFExecuteTime = time - this.mRenderStartTime;
            this.mCreateInstance = false;
        }

    }

    public void callNativeTime(long time) {
        this.mWXPerformance.callNativeTime += time;
    }

    public void jsonParseTime(long time) {
        this.mWXPerformance.parseJsonTime += time;
    }

    public void firstScreenRenderFinished() {
        if(!this.mEnd) {
            this.mEnd = true;
            if(this.mStatisticsListener != null && this.mContext != null) {
                this.runOnUiThread(new Runnable() {
                    public void run() {
                        if(WXSDKInstance.this.mStatisticsListener != null && WXSDKInstance.this.mContext != null) {
                            Trace.beginSection("onFirstScreen");
                            WXSDKInstance.this.mStatisticsListener.onFirstScreen();
                            Trace.endSection();
                        }

                    }
                });
            }

            this.mWXPerformance.screenRenderTime = System.currentTimeMillis() - this.mRenderStartTime;
            WXLogUtils.renderPerformanceLog("firstScreenRenderFinished", this.mWXPerformance.screenRenderTime);
            WXLogUtils.renderPerformanceLog("   firstScreenJSFExecuteTime", this.mWXPerformance.firstScreenJSFExecuteTime);
            WXLogUtils.renderPerformanceLog("   firstScreenCallNativeTime", this.mWXPerformance.callNativeTime);
            WXLogUtils.renderPerformanceLog("       firstScreenJsonParseTime", this.mWXPerformance.parseJsonTime);
            WXLogUtils.renderPerformanceLog("   firstScreenBatchTime", this.mWXPerformance.batchTime);
            WXLogUtils.renderPerformanceLog("       firstScreenCssLayoutTime", this.mWXPerformance.cssLayoutTime);
            WXLogUtils.renderPerformanceLog("       firstScreenApplyUpdateTime", this.mWXPerformance.applyUpdateTime);
            WXLogUtils.renderPerformanceLog("       firstScreenUpdateDomObjTime", this.mWXPerformance.updateDomObjTime);
        }
    }

    public void batchTime(long time) {
        this.mWXPerformance.batchTime += time;
    }

    public void cssLayoutTime(long time) {
        this.mWXPerformance.cssLayoutTime += time;
    }

    public void applyUpdateTime(long time) {
        this.mWXPerformance.applyUpdateTime += time;
    }

    public void updateDomObjTime(long time) {
        this.mWXPerformance.updateDomObjTime += time;
    }

    public void createInstanceFinished(long time) {
        if(time > 0L) {
            this.mWXPerformance.communicateTime = time;
        }

    }

    private void destroyView(View rootView) {
        try {
            if(rootView instanceof ViewGroup) {
                ViewGroup cViewGroup = (ViewGroup)rootView;
                int index = 0;

                while(true) {
                    if(index >= cViewGroup.getChildCount()) {
                        cViewGroup.removeViews(0, ((ViewGroup)rootView).getChildCount());
                        WXReflectionUtils.setValue(rootView, "mChildrenCount", Integer.valueOf(0));
                        break;
                    }

                    this.destroyView(cViewGroup.getChildAt(index));
                    ++index;
                }
            }

            if(rootView instanceof Destroyable) {
                ((Destroyable)rootView).destroy();
            }
        } catch (Exception var4) {
            WXLogUtils.e("WXSDKInstance destroyView Exception: ", var4);
        }

    }

    public synchronized void destroy() {
        if(!this.isDestroy()) {
            if(this.mRendered) {
                WXSDKManager.getInstance().destroyInstance(this.mInstanceId);
            }

            WXComponentFactory.removeComponentTypesByInstanceId(this.getInstanceId());
            if(this.mGlobalEventReceiver != null) {
                this.getContext().unregisterReceiver(this.mGlobalEventReceiver);
                this.mGlobalEventReceiver = null;
            }

            if(this.mRootComp != null) {
                this.mRootComp.destroy();
                this.destroyView(this.mRenderContainer);
                this.mRootComp = null;
            }

            if(this.mGlobalEvents != null) {
                this.mGlobalEvents.clear();
            }

            if(this.mComponentObserver != null) {
                this.mComponentObserver = null;
            }

            this.getFlatUIContext().destroy();
            this.mFlatGUIContext = null;
            this.mWXScrollListeners = null;
            this.mRenderContainer = null;
            this.mNestedInstanceInterceptor = null;
            this.mUserTrackAdapter = null;
            this.mScrollView = null;
            this.mContext = null;
            this.mRenderListener = null;
            this.isDestroy = true;
            this.mStatisticsListener = null;
            if(this.responseHeaders != null) {
                this.responseHeaders.clear();
            }

            if(this.templateRef != null) {
                this.templateRef = null;
            }
        }

    }

    public boolean isDestroy() {
        return this.isDestroy;
    }

    @Nullable
    public String getBundleUrl() {
        return this.mBundleUrl;
    }

    public View getRootView() {
        return this.mRootComp.getRealView();
    }

    public View getContainerView() {
        return this.mRenderContainer;
    }

    /** @deprecated */
    @Deprecated
    public void setBundleUrl(String url) {
        this.mBundleUrl = url;
        if(WXSDKManager.getInstance().getValidateProcessor() != null) {
            this.mNeedValidate = WXSDKManager.getInstance().getValidateProcessor().needValidate(this.mBundleUrl);
        }

    }

    public void onRootCreated(WXComponent root) {
        this.mRootComp = root;
        this.mRenderContainer.addView(root.getHostView());
        this.setSize(this.mRenderContainer.getWidth(), this.mRenderContainer.getHeight());
    }

    public void moveFixedView(View fixedChild) {
        if(this.mRenderContainer != null) {
            ViewGroup parent;
            if((parent = (ViewGroup)fixedChild.getParent()) != null) {
                if(parent != this.mRenderContainer) {
                    parent.removeView(fixedChild);
                    this.mRenderContainer.addView(fixedChild);
                }
            } else {
                this.mRenderContainer.addView(fixedChild);
            }
        }

    }

    public void removeFixedView(View fixedChild) {
        if(this.mRenderContainer != null) {
            this.mRenderContainer.removeView(fixedChild);
        }

    }

    public synchronized List<OnWXScrollListener> getWXScrollListeners() {
        return this.mWXScrollListeners;
    }

    public synchronized void registerOnWXScrollListener(OnWXScrollListener wxScrollListener) {
        if(this.mWXScrollListeners == null) {
            this.mWXScrollListeners = new ArrayList();
        }

        this.mWXScrollListeners.add(wxScrollListener);
    }

    private void updateRootComponentStyle(JSONObject style) {
        Message message = Message.obtain();
        WXDomTask task = new WXDomTask();
        task.instanceId = this.getInstanceId();
        if(task.args == null) {
            task.args = new ArrayList();
        }

        task.args.add("_root");
        task.args.add(style);
        message.obj = task;
        message.what = 2;
        WXSDKManager.getInstance().getWXDomManager().sendMessage(message);
    }

    public void setSize(int width, int height) {
        if(width >= 0 && height >= 0 && !this.isDestroy && this.mRendered) {
            float realWidth = WXViewUtils.getWebPxByWidth((float)width, this.getInstanceViewPortWidth());
            float realHeight = WXViewUtils.getWebPxByWidth((float)height, this.getInstanceViewPortWidth());
            View godView = this.mRenderContainer;
            if(godView != null) {
                LayoutParams layoutParams = godView.getLayoutParams();
                if(layoutParams != null) {
                    if(godView.getWidth() != width || godView.getHeight() != height) {
                        layoutParams.width = width;
                        layoutParams.height = height;
                        godView.setLayoutParams(layoutParams);
                    }

                    JSONObject style = new JSONObject();
                    WXComponent rootComponent = this.mRootComp;
                    if(rootComponent == null) {
                        return;
                    }

                    style.put("defaultWidth", Float.valueOf(realWidth));
                    style.put("defaultHeight", Float.valueOf(realHeight));
                    this.updateRootComponentStyle(style);
                }
            }

        }
    }

    public void fireGlobalEventCallback(String eventName, Map<String, Object> params) {
        List<String> callbacks = (List)this.mGlobalEvents.get(eventName);
        if(callbacks != null) {
            Iterator var4 = callbacks.iterator();

            while(var4.hasNext()) {
                String callback = (String)var4.next();
                WXSDKManager.getInstance().callback(this.mInstanceId, callback, params, true);
            }
        }

    }

    public void fireEvent(String elementRef, String type, Map<String, Object> data, Map<String, Object> domChanges, List<Object> eventArgs) {
        this.fireEvent(elementRef, type, data, domChanges, eventArgs, (EventResult)null);
    }

    public void fireEvent(String elementRef, String type, Map<String, Object> data, Map<String, Object> domChanges, List<Object> eventArgs, EventResult callback) {
        WXBridgeManager.getInstance().fireEventOnNode(this.getInstanceId(), elementRef, type, data, domChanges, eventArgs, callback);
    }

    public void fireEvent(String elementRef, String type, Map<String, Object> data, Map<String, Object> domChanges) {
        this.fireEvent(elementRef, type, data, domChanges, (List)null);
    }

    public void fireEvent(String elementRef, String type, Map<String, Object> data) {
        this.fireEvent(elementRef, type, data, (Map)null);
    }

    public void fireEvent(String ref, String type) {
        this.fireEvent(ref, type, new HashMap());
    }

    protected void addEventListener(String eventName, String callback) {
        if(!TextUtils.isEmpty(eventName) && !TextUtils.isEmpty(callback)) {
            List<String> callbacks = (List)this.mGlobalEvents.get(eventName);
            if(callbacks == null) {
                callbacks = new ArrayList();
                this.mGlobalEvents.put(eventName, callbacks);
            }

            ((List)callbacks).add(callback);
        }
    }

    protected void removeEventListener(String eventName, String callback) {
        if(!TextUtils.isEmpty(eventName) && !TextUtils.isEmpty(callback)) {
            List<String> callbacks = (List)this.mGlobalEvents.get(eventName);
            if(callbacks != null) {
                callbacks.remove(callback);
            }

        }
    }

    protected void removeEventListener(String eventName) {
        if(!TextUtils.isEmpty(eventName)) {
            this.mGlobalEvents.remove(eventName);
        }
    }

    public void fireModuleEvent(String eventName, WXModule module, Map<String, Object> params) {
        if(!TextUtils.isEmpty(eventName) && module != null) {
            Map<String, Object> event = new HashMap();
            event.put("type", eventName);
            event.put("module", module.getModuleName());
            event.put("data", params);
            List<String> callbacks = module.getEventCallbacks(eventName);
            if(callbacks != null) {
                Iterator var6 = callbacks.iterator();

                while(var6.hasNext()) {
                    String callback = (String)var6.next();
                    SimpleJSCallback jsCallback = new SimpleJSCallback(this.mInstanceId, callback);
                    if(module.isOnce(callback)) {
                        jsCallback.invoke(event);
                    } else {
                        jsCallback.invokeAndKeepAlive(event);
                    }
                }
            }

        }
    }

    public boolean checkModuleEventRegistered(String eventName, WXModule module) {
        if(module != null) {
            List<String> events = module.getEventCallbacks(eventName);
            if(events != null && events.size() > 0) {
                return true;
            }
        }

        return false;
    }

    public WXPerformance getWXPerformance() {
        return this.mWXPerformance;
    }

    public Map<String, Serializable> getUserTrackParams() {
        return this.mUserTrackParams;
    }

    public void addUserTrackParameter(String key, Serializable value) {
        if(this.mUserTrackParams == null) {
            this.mUserTrackParams = new ConcurrentHashMap();
        }

        this.mUserTrackParams.put(key, value);
    }

    public void clearUserTrackParameters() {
        if(this.mUserTrackParams != null) {
            this.mUserTrackParams.clear();
        }

    }

    public void removeUserTrackParameter(String key) {
        if(this.mUserTrackParams != null) {
            this.mUserTrackParams.remove(key);
        }

    }

    public int getMaxDeepLayer() {
        return this.mMaxDeepLayer;
    }

    public void setMaxDeepLayer(int maxDeepLayer) {
        this.mMaxDeepLayer = maxDeepLayer;
    }

    public String getTemplateInfo() {
        String template = this.getTemplate();
        if(template == null) {
            return " template md5 null " + JSONObject.toJSONString(this.responseHeaders);
        } else if(TextUtils.isEmpty(template)) {
            return " template md5  length 0 " + JSONObject.toJSONString(this.responseHeaders);
        } else {
            try {
                byte[] bts = template.getBytes("UTF-8");
                String sourceMD5 = WXFileUtils.md5(bts);
                String sourceBase64MD5 = WXFileUtils.base64Md5(bts);
                ArrayList<String> sourceMD5List = new ArrayList();
                ArrayList<String> sourceBase64MD5List = new ArrayList();
                sourceMD5List.add(sourceMD5);
                sourceBase64MD5List.add(sourceBase64MD5);
                this.responseHeaders.put("templateSourceMD5", sourceMD5List);
                this.responseHeaders.put("templateSourceBase64MD5", sourceBase64MD5List);
                return " template md5 " + sourceMD5 + " length " + bts.length + " base64 md5 " + sourceBase64MD5 + " response header " + JSONObject.toJSONString(this.responseHeaders);
            } catch (UnsupportedEncodingException var7) {
                return "template md5 getBytes error";
            }
        }
    }

    public boolean isContentMd5Match() {
        if(this.responseHeaders == null) {
            return true;
        } else {
            List<String> contentMD5s = (List)this.responseHeaders.get("Content-Md5");
            if(contentMD5s == null) {
                contentMD5s = (List)this.responseHeaders.get("content-md5");
            }

            if(contentMD5s != null && contentMD5s.size() > 0) {
                String md5 = (String)contentMD5s.get(0);
                List<String> sourceBase64Md5 = (List)this.responseHeaders.get("templateSourceBase64MD5");
                if(sourceBase64Md5 == null) {
                    this.getTemplateInfo();
                    sourceBase64Md5 = (List)this.responseHeaders.get("templateSourceBase64MD5");
                }

                return sourceBase64Md5 != null && sourceBase64Md5.size() != 0?md5.equals(sourceBase64Md5.get(0)):true;
            } else {
                return true;
            }
        }
    }

    public String getTemplate() {
        return this.templateRef == null?null:(String)this.templateRef.get();
    }

    public void setTemplate(String template) {
        this.templateRef = new WeakReference(template);
    }

    public interface NestedInstanceInterceptor {
        void onCreateNestInstance(WXSDKInstance var1, NestedContainer var2);
    }

    class WXHttpListener implements OnHttpListener {
        private String pageName;
        private Map<String, Object> options;
        private String jsonInitData;
        private WXRenderStrategy flag;
        private WXSDKInstance instance;
        private long startRequestTime;
        private int traceId;

        private WXHttpListener(String pageName, Map<String, Object> options, String jsonInitData, WXRenderStrategy flag, long startRequestTime) {
            this.pageName = pageName;
            this.options = options;
            this.jsonInitData = jsonInitData;
            this.flag = flag;
            this.startRequestTime = startRequestTime;
            this.traceId = WXTracing.nextId();
            if(WXTracing.isAvailable()) {
                TraceEvent event = WXTracing.newEvent("downloadBundleJS", WXSDKInstance.this.mInstanceId, -1);
                event.iid = WXSDKInstance.this.mInstanceId;
                event.tname = "Network";
                event.ph = "B";
                event.traceId = this.traceId;
                event.submit();
            }

        }

        public void setSDKInstance(WXSDKInstance instance) {
            this.instance = instance;
        }

        public void onHttpStart() {
            if(this.instance != null && this.instance.getWXStatisticsListener() != null) {
                this.instance.getWXStatisticsListener().onHttpStart();
            }

        }

        public void onHeadersReceived(int statusCode, Map<String, List<String>> headers) {
            if(this.instance != null && this.instance.getWXStatisticsListener() != null) {
                this.instance.getWXStatisticsListener().onHeadersReceived();
            }

            if(this.instance != null && this.instance.responseHeaders != null && headers != null) {
                this.instance.responseHeaders.putAll(headers);
            }

        }

        public void onHttpUploadProgress(int uploadProgress) {
        }

        public void onHttpResponseProgress(int loadedLength) {
        }

        public void onHttpFinish(WXResponse response) {
            if(this.instance != null && this.instance.getWXStatisticsListener() != null) {
                this.instance.getWXStatisticsListener().onHttpFinish();
            }

            if(WXTracing.isAvailable()) {
                TraceEvent event = WXTracing.newEvent("downloadBundleJS", WXSDKInstance.this.mInstanceId, -1);
                event.traceId = this.traceId;
                event.tname = "Network";
                event.ph = "E";
                event.extParams = new HashMap();
                if(response != null && response.originalData != null) {
                    event.extParams.put("BundleSize", Integer.valueOf(response.originalData.length));
                }

                event.submit();
            }

            WXSDKInstance.this.mWXPerformance.networkTime = System.currentTimeMillis() - this.startRequestTime;
            if(response.extendParams != null) {
                Object actualNetworkTime = response.extendParams.get("actualNetworkTime");
                WXSDKInstance.this.mWXPerformance.actualNetworkTime = actualNetworkTime instanceof Long?((Long)actualNetworkTime).longValue():0L;
                WXLogUtils.renderPerformanceLog("actualNetworkTime", WXSDKInstance.this.mWXPerformance.actualNetworkTime);
                Object pureNetworkTime = response.extendParams.get("pureNetworkTime");
                WXSDKInstance.this.mWXPerformance.pureNetworkTime = pureNetworkTime instanceof Long?((Long)pureNetworkTime).longValue():0L;
                WXLogUtils.renderPerformanceLog("pureNetworkTime", WXSDKInstance.this.mWXPerformance.pureNetworkTime);
                Object connectionType = response.extendParams.get("connectionType");
                WXSDKInstance.this.mWXPerformance.connectionType = connectionType instanceof String?(String)connectionType:"";
                Object packageSpendTime = response.extendParams.get("packageSpendTime");
                WXSDKInstance.this.mWXPerformance.packageSpendTime = packageSpendTime instanceof Long?((Long)packageSpendTime).longValue():0L;
                Object syncTaskTime = response.extendParams.get("syncTaskTime");
                WXSDKInstance.this.mWXPerformance.syncTaskTime = syncTaskTime instanceof Long?((Long)syncTaskTime).longValue():0L;
                Object requestType = response.extendParams.get("requestType");
                WXSDKInstance.this.mWXPerformance.requestType = requestType instanceof String?(String)requestType:"";
                if("network".equals(requestType) && WXSDKInstance.this.mUserTrackAdapter != null) {
                    WXPerformance performance = new WXPerformance();
                    if(!TextUtils.isEmpty(WXSDKInstance.this.mBundleUrl)) {
                        try {
                            performance.args = Uri.parse(WXSDKInstance.this.mBundleUrl).buildUpon().clearQuery().toString();
                        } catch (Exception var10) {
                            performance.args = this.pageName;
                        }
                    }

                    if(!"200".equals(response.statusCode)) {
                        performance.errCode = WXErrorCode.WX_ERR_JSBUNDLE_DOWNLOAD.getErrorCode();
                        performance.appendErrMsg(response.errorCode);
                        performance.appendErrMsg("|");
                        performance.appendErrMsg(response.errorMsg);
                        WXExceptionUtils.commitCriticalExceptionRT(WXSDKInstance.this.getInstanceId(), WXErrorCode.WX_KEY_EXCEPTION_JS_DOWNLOAD_FAILED.getErrorCode(), "WX_KEY_EXCEPTION_JS_DOWNLOAD_FAILED", WXErrorCode.WX_KEY_EXCEPTION_JS_DOWNLOAD_FAILED.getErrorMsg() + "\n response.errorCode=" + response.errorCode + "\n response.errorMsg=" + response.errorMsg + "\n response=" + WXSDKInstance.this.getTemplateInfo(), (Map)null);
                    } else if(!"200".equals(response.statusCode) || response.originalData != null && response.originalData.length > 0) {
                        performance.errCode = WXErrorCode.WX_SUCCESS.getErrorCode();
                    } else {
                        performance.errCode = WXErrorCode.WX_ERR_JSBUNDLE_DOWNLOAD.getErrorCode();
                        performance.appendErrMsg(response.statusCode);
                        performance.appendErrMsg("|template is null!");
                        WXExceptionUtils.commitCriticalExceptionRT(WXSDKInstance.this.getInstanceId(), WXErrorCode.WX_KEY_EXCEPTION_JS_DOWNLOAD_FAILED.getErrorCode(), "WX_KEY_EXCEPTION_JS_DOWNLOAD_FAILED_TEMPLATE_NULL", WXErrorCode.WX_KEY_EXCEPTION_JS_DOWNLOAD_FAILED.getErrorMsg() + "\n response.errorCode=" + response.errorCode + "\n response.errorMsg=" + response.errorMsg + "\n response=" + WXSDKInstance.this.getTemplateInfo(), (Map)null);
                    }

                    if(WXSDKInstance.this.mUserTrackAdapter != null) {
                        WXSDKInstance.this.mUserTrackAdapter.commit(WXSDKInstance.this.getContext(), (String)null, "jsDownload", performance, (Map)null);
                    }
                }
            }

            WXLogUtils.renderPerformanceLog("networkTime", WXSDKInstance.this.mWXPerformance.networkTime);
            if(response != null && response.originalData != null && TextUtils.equals("200", response.statusCode)) {
                String template = new String(response.originalData);
                WXCacheManager.INSTANCE.cache(this.pageName, template, this.options, this.jsonInitData, this.flag);
                WXSDKInstance.this.render(this.pageName, template, this.options, this.jsonInitData, this.flag);
            } else if(TextUtils.equals(DegradPassivityCode.WX_DEGRAD_ERR_BUNDLE_CONTENTTYPE_ERROR.getDegradErrorCode(), response.statusCode)) {
                WXLogUtils.e("user intercept: WX_DEGRAD_ERR_BUNDLE_CONTENTTYPE_ERROR");
                WXSDKInstance.this.onRenderError(DegradPassivityCode.WX_DEGRAD_ERR_BUNDLE_CONTENTTYPE_ERROR.getDegradErrorCode(), "|response.errorMsg==" + response.errorMsg + "|instance.getTemplateInfo == \n" + this.instance.getTemplateInfo() + "|instance bundleUrl = \n" + this.instance.getBundleUrl() + "|instance requestUrl = \n" + Uri.decode(WXSDKInstance.requestUrl));
            } else if(response != null && response.originalData != null && TextUtils.equals("-206", response.statusCode)) {
                WXLogUtils.e("user intercept: WX_DEGRAD_ERR_NETWORK_CHECK_CONTENT_LENGTH_FAILED");
                WXSDKInstance.this.onRenderError(DegradPassivityCode.WX_DEGRAD_ERR_NETWORK_CHECK_CONTENT_LENGTH_FAILED.getDegradErrorCode(), DegradPassivityCode.WX_DEGRAD_ERR_NETWORK_CHECK_CONTENT_LENGTH_FAILED.getDegradErrorMsg() + "|response.errorMsg==" + response.errorMsg + "|instance.getTemplateInfo == \n" + this.instance.getTemplateInfo());
            } else {
                WXSDKInstance.this.onRenderError(DegradPassivityCode.WX_DEGRAD_ERR_NETWORK_BUNDLE_DOWNLOAD_FAILED.getDegradErrorCode(), response.errorMsg);
            }

        }
    }

    public interface OnInstanceVisibleListener {
        void onAppear();

        void onDisappear();
    }
}
