# WeexContainer-Android
一个Android平台上Weex容器，集成该SDK后，App可以看作是一个Weex的浏览器，只需传入一个打好的vue工程的js文件即可。实现MPA,Bundle缓存、验签等通用功能。
如：
```java
WeexPageActivity.startFrom(
                LauncherActivity.this,
                "http://192.168.12.20:10004/dist/pages/main.js",
                null);
```

# 一、Demo：
http://www.digua.info

https://github.com/MasonLiuChn/WeexExplorer

# 二、功能：
1. Native跳转Weex
2. Native通知Weex
3. Weex跳转Weex（实现MPA多页面应用）
4. Weex跳转、调用Native
5. Bundle缓存功能
6. Bundle验证签名
7. 开启调试器ChromeDebugger
8. 新网络模块


### （一）Native跳转Weex
1. 加载assets/weex下(使用assets方式时，只支持放在assets/weex下)
2. 加载存储空间内的文件
3. 加载网络文件
    - Release环境下，加载网络文件的顺序是 a.查找缓存文件（有问题则删除）->b. 使用网络文件->c.查找assets
```java
//example
WeexPageActivity.startFrom(
                LauncherActivity.this,
                //"file://local/weex/main.js",
                //"file://sdcard/xx",
                "http://192.168.12.20:10004/dist/pages/main.js",
                null);

```
### （二）Native通知Weex
- 1、Weex SDK 本身提供了globalEvent实现Native发事件给Weex，这里以监听Android返回键为例介绍其用法：
```java
public void onBackPressed() {
        if (mWXSDKInstance != null && renderSuccess) {
            Map<String, Object> params = new HashMap<>();
            params.put("name", "returnmsg");
            mWXSDKInstance.fireGlobalEventCallback("androidback", params);
        } else {
            super.onBackPressed();
        }
    }
```
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
### （三）Weex跳转Weex，实现MPA多页面应用
- 1、Weex工程内使用VueRouter做页面跳转，Url为Bundle的网络地址
```java
const basePath = 'http://192.168.12.20:10004/dist';
export default [
    {path: '/', component: basePath + '/pages/index.js'},
    {path: '/main', component: basePath + '/pages/main.js'}
];
...
router.push('/main')
```
- 2、Android工程无需做配置，本SDK会自动开启新Activity加载Bundle
- 3、使用者想做自定义的跳转配置，则可以使用SDK提供的如下方法：
```java
WeexUtil.setURLIntercepter(url -> {
            return url;
});
```

### （四）Weex跳转、调用Native
- 1、Weex工程使用如下：
```javascript
//不带回调结果
weex.requireModule("CommonModule").handle('/activity/movieDetail?id=123')
//带回调结果
weex.requireModule("CommonModule").handleWithResult('/activity/movieDetail?id=123',(resultMap)=>{})
//带回调结果并新开线程执行
weex.requireModule("CommonModule").handleWithResultInThread('/activity/movieDetail?id=123',(resultMap)=>{})
```
- 2、Android工程使用如下：
```java
WeexUtil.setCommonModuleHandler((content, mWXSDKInstance, commonModule) -> {
            //我这里使用了ARouter处理Native端的跳转
            //return RouterUtil.go((Activity) mWXSDKInstance.getContext(), content);
});
```
- 3、Weex调用Native时如果是需要返回结果的调用，则需自己实现注册一个Module，编写带有jscallback的方法
```java
/*****example jscallback*****/
@JSMethod(uiThread = false)
public void nativeHttpGet(String url, JSCallback callback) {}
```

### （五）Bundle缓存功能
- 1、SDK提供了默认的Bundle缓存功能
    - Release环境下，加载网络文件的顺序是 a.查找缓存文件（有问题则删除）->b.查找assets ->c.请求网络
    - 使用LRU实现缓存，对相同url的Bundle实施缓存，默认缓存容量15
```

### （六）Bundle验证签名
>SDK没有提供默认的验签功能，因为这属于应用方的业务。但SDK提供设置OKHTTP的方法，在该方法里开发者可以校验下载Bundle url里https的证书
```java
WeexUtil.setOkHttpClient(OkHttpClient okHttpClient)

```

### （七）开启调试器ChromeDebugger
- 1、该SDK集成了weex debug功能，启动SDK时，将下面第二个参数设置为true
```java
WeexUtil.init(this,true,BuildConfig.BUILD_IP,null);
```
- 2、weex debug
- 3、在chrome上打开debug server如 http://yourip:8088
- 4、启动app
- 5、此时chrome页面上出现了手机设备
- 6、点击debugger开始调试

### （八）新网络模块
>网络请求模块除了weex自带的stream，还额外提供了nativeHttpGet方法，使用okhttp做请求，后续会增加post、put、delete等方法
```javascript
var commonModule=weex.requireModule("CommonModule");
commonModule.nativeHttpGet(url,(response)=>{
            if(!response.ok){
                reject(response)
            }else{
                resolve(response)
            }
        }
);
```
# 三、Usage
### （一）简单用法
```java
repositories {
    maven { url "https://jitpack.io" }
    maven { url "https://github.com/MasonLiuChn/MasonMavenRepository/raw/maven/releases" }
}
dependencies {
 compile 'com.github.MasonLiuChn:WeexContainer-Android:1.0.2'
}
```
```java
 //在Applicaiton里设置
 WeexUtil.init(this, false, BuildConfig.BUILD_IP,null);
```
```java
WeexPageActivity.startFrom(
                LauncherActivity.this,
                "http://192.168.12.20:10004/dist/pages/main.js",
                null);
```

### （二）高级用法
```java
public static void init(Application application,
                            boolean connectDebuggerOnAppDebug,
                            @Nullable String debuggerHost,
                            @Nullable IWXImgLoaderAdapter iwxImgLoaderAdapter) {
        
}

public static void setDebugable(boolean isDebug) {
        
}

public static void setURLIntercepter(WXURLManager.WXURLHandler handler) {
        
}

public static void setCommonModuleHandler(WXCommonModuleManager.WXCommonModuleHandler handler) {
        
}
```

# 四、Todo
1. openBrowser\getSysInfo
2. iOS...
    
---
# Contact me:

- Blog:http://www.masonliu.com

- Email:MasonLiuChn@gmail.com
