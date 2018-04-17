# WeexContainer-Android
一个Android平台上Weex容器，实现MPA,Bundle缓存、验签等通用功能。

# Demo：

# 功能：
> 一、Native跳转Weex
二、Weex跳转Weex，实现MPA多页面应用
三、Weex跳转Native
四、Weex调用Native
五、Native通知Weex
六、Bundle缓存功能
七、Bundle验证签名
八、开启调试器ChromeDebugger
九、新网络模块


# 一、Native跳转Weex
1. 加载assets/weex下(使用assets方式时，只支持放在assets/weex下)
2. 加载存储好的文件
3. 加载assets/weex下文件(使用assets方式时，只支持放在assets/weex下)
```java
//example
WeexPageActivity.startFrom(
                LauncherActivity.this,
                //"file://local/weex/main.js",
                //"file://sdcard/xx",
                "http://172.20.12.26:10004/dist/pages/main.js",
                null);

```
两种形式
debug 始终走真实地址
release 尽量用缓存    缓存（有问题则删除下次走网） 网络（有问题用assets，没问题则缓存）  assets

# 二、Weex跳转Weex，实现MPA多页面应用
拦截url处理 可以校验域名，可以把网络bundle地址转换为assets地址

# 三、Weex跳转Native

# 四、Weex调用Native 
？？？？commonmodule

# 五、Native通知Weex
监听android返回键bundle
```javascript
const globalEvent = weex.requireModule('globalEvent');
export default {
    created() {
        this.globalEvent = globalEvent;
        this.globalEvent.addEventListener("androidback", e => {
            this.router.back()
        });
    },
    methods: {}
}

```


# 六、Bundle缓存功能
bundle缓存功能
- 网络bundle时，有缓存，用缓存，没有缓存时看是否有网络，有网络时加载后缓存，没有网络用assets里的文件


# 七、Bundle验证签名
借助https

# 八、开启调试器ChromeDebugger
chromedebugger 流程
1、weex debug
2、http://172.20.12.26:8088
3、启动app
4、此时chrome 出现手机设备
5、点击 debugger

# 九、新网络模块
# 十、Usage
```java

repositories {
    maven {
        url "https://jitpack.io"
    }
}
dependencies {
	compile 'com.github.MasonLiuChn:WeexContainer-Android:1.0.0'
}
```
```java
 WeexUtil.init(this, false, BuildConfig.BUILD_IP,
                (url, view, wxImageQuality, wxImageStrategy) -> WXSDKManager.getInstance().postOnUiThread(() -> {
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
                    if (temp.endsWith(".gif")) {
                        Glide.with(view.getContext())
                                .load(temp)
                                .into(view);
                    } else {
                        YcImageLoaderManager.getInstance().displayMiddleImage(view, temp);
                    }
                }, 0)
        );

        WeexUtil.setURLIntercepter(url -> {
            if (!AppUtil.isApkDebugable()) {
                String hostPort = StringUtil.getPatternStr(url, "//.*?/", 2, 1);
                if (!hostPort.contains("www.masonliu.com")) {
                    url = url.replace(hostPort, "www.masonliu.com/app/digua");
                }
                return Util.wrapVersionBundleUrl(url);
            }
            return url;
        });

        WeexUtil.setCommonModuleHandler((content, mWXSDKInstance, commonModule) -> {
            RouterUtil.go((Activity) mWXSDKInstance.getContext(), content);
        });
```

```java
WeexPageActivity.startFrom(
                LauncherActivity.this,
                //"file://local/weex/main.js",
                Util.wrapVersionBundleUrl(url),
                null);
```


```java

public static void setNavigatorPushHandler(WXNavigatorManager.WXNavigatorPushHandler handler) {
        //设置pushNavigatorHandler
        WXNavigatorManager.INSTANCE.setHandler(handler);
    }

    public static void setURLIntercepter(WXURLManager.WXURLHandler handler) {
        WXURLManager.INSTANCE.setHandler(handler);
    }

    public static void setCommonModuleHandler(WXCommonModuleManager.WXCommonModuleHandler handler) {
        WXCommonModuleManager.INSTANCE.setHandler(handler);
    }

    public static void setCacheHandler(WXLoadAndCacheManager.WXCacheHandler handler) {
        WXLoadAndCacheManager.INSTANCE.setCacheHandler(handler);
    }

    public static void setNetworkHandler(WXLoadAndCacheManager.WXNetworkHandler handler) {
        WXLoadAndCacheManager.INSTANCE.setNetworkHandler(handler);
    }
```
# Contact me:

- Blog:http://www.masonliu.com

- Email:MasonLiuChn@gmail.com