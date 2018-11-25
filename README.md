# WeexContainer-Android
一个Android平台上Weex容器，集成该SDK后，App可以看作是一个Weex的浏览器，只需传入一个打好的vue工程的js文件即可。实现MPA,Bundle缓存等通用功能。
如：
```java
WeexPageActivity.startFrom(
                LauncherActivity.this,
                "http://192.168.12.20:10004/dist/pages/main.js",
                null);
```

# 一、Demo：
DemoApk：[DemoApk](https://raw.githubusercontent.com/MasonLiuChn/WeexContainer-Android/master/app/doc/WeexContainerDemo.apk)

<img src="https://raw.githubusercontent.com/MasonLiuChn/WeexContainer-Android/master/app/doc/demo.gif" width="20%" height="20%" />

作品：http://www.digua.info

Weex工程：https://github.com/MasonLiuChn/WeexTemplate

Weex工程：https://github.com/MasonLiuChn/WeexExplorer

# 二、功能：
1. Native跳转Weex
2. Native通知Weex
3. Weex跳转Weex（实现MPA多页面应用）
4. Weex调用Native
5. Bundle验签说明
6. 开启调试器ChromeDebugger
7. 内置常用native方法（get请求、打开浏览器）
8. 内置更丰富的环境变量


### （一）Native跳转Weex
1. 加载assets/weex下的文件(使用assets方式时，只支持放在assets/weex下)如：file://local/weex/xx
2. 加载存储空间内的文件，如：file:///xx
3. 加载网络文件
    - Release环境下，加载网络文件的顺序是 a.查找缓存文件->b. 查找assets->c.下载网络文件，放在缓存
    - Debug环境下，直接使用传入的uri
    - 使用LRU实现缓存，对Bundle实施缓存，默认缓存容量50
```java
//example
WeexPageActivity.startFrom(
                LauncherActivity.this,
                "http://192.168.12.20:10004/dist/pages/main.js",
                "file://local/weex/main.js");

```
### （二）Native通知Weex
- 1、Weex SDK 本身提供了globalEvent实现Native发事件给Weex，这里以监听Android返回键为例介绍其用法：
```java
public void onBackPressed() {
        if (mWXSDKInstance != null && renderSuccess) {
            mWXSDKInstance.fireGlobalEventCallback("androidBack", new HashMap<>(String, Object));
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
        this.globalEvent.addEventListener("androidBack", e => {
            this.pop()
        });
    }
}

```
### （三）Weex跳转Weex，实现MPA多页面应用
- 1、Weex工程正常使用weex提供的navigator做页面跳转
```java
var navigator = weex.requireModule('navigator')
navigator.push({
          url: 'http://dotwe.org/raw/dist/519962541fcf6acd911986357ad9c2ed.js',
          animated: "true"
        })
```
- 2、Android工程无需做配置，本SDK会自动开启新Activity加载Bundle
- 3、使用者想做自定义的跳转配置，则可以使用SDK提供的如下方法：
```java
WeexUtil.setURLIntercepter(url -> {
            return url;
});
```

### （四）Weex调用Native
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
WeexUtil.setCommonModuleHandler((path, mWXSDKInstance, commonModule) -> {

});
```

### （五）Bundle验证签名
>SDK没有提供默认的验签功能，因为这属于应用方的业务(例如服务端采用自签名的证书)。但SDK提供设置OKHTTP的方法，在该方法里开发者可以校验下载Bundle url里https的证书，或者自己下载文件后自行验签，将本地url传给WeexContainer。
```java
WeexUtil.setOkHttpClient(OkHttpClient okHttpClient)

```

### （六）开启调试器ChromeDebugger
- 1、该SDK集成了weex debug功能，启动SDK时，将下面第二个参数设置为true
```java
WeexUtil.init(this,true,BuildConfig.BUILD_IP,null);
```
- 2、weex debug
- 3、在chrome上打开debug server如 http://yourip:8088
- 4、启动app
- 5、此时chrome页面上出现了手机设备
- 6、点击debugger开始调试

### （七）内置常用native方法（get请求、打开浏览器）
- 1、okhttp get请求
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
- 2、打开浏览器
```javascript
var commonModule=weex.requireModule("CommonModule");
commonModule.openBrowser(url);
```
### （八）内置更丰富的环境变量
```javascript
weex.config.debug
weex.config.weexContainerVersionCode
weex.config.weexContainerVersionName
weex.config.androidStatusBarHeight
weex.config.androidBuildProp
weex.config.androidBuildClass
```

# 三、Usage
### （一）简单用法
```java
android {
    defaultConfig {
        ndk{
            abiFilters "armeabi"
        }
    }
}
repositories {
    maven {
        maven { url "https://github.com/MasonLiuChn/MasonMavenRepository/raw/maven/releases" }
    }
}
dependencies {
	compile 'com.masonliu:WeexContainer:1.1.2'
}
```
```java
 //在Applicaiton里设置
 WeexUtil.init(this, false, BuildConfig.BUILD_IP,null);
```
```java
WeexPageActivity.startFrom(LauncherActivity.this,
                "http://192.168.12.20:10004/dist/pages/main.js",null);
```

### （二）高级用法
```java
public static void init(Application application,
                            boolean connectDebuggerOnAppDebug,
                            @Nullable String debuggerHost,
                            @Nullable IWXImgLoaderAdapter iwxImgLoaderAdapter) {}

public static void setDebugable(boolean isDebug) {}

public static void setURLIntercepter(WXURLManager.WXURLHandler handler) {}

//设置一个处理器用于处理CommonModule发过来的js调用
public static void setCommonModuleHandler(WXCommonModuleManager.WXCommonModuleHandler handler) {
}
```

# Todo
1、list组件自然加载更多
2. iOS

---
# Contact me:

- Blog:http://www.masonliu.com

- Email:MasonLiuChn@gmail.com
