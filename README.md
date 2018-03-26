# WeexContainer-Android
一个Android平台上Weex容器

# 功能：

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

weex 跳转 native、weex跳转weex
拦截url处理 可以校验域名，可以把网络bundle地址转换为assets地址


native 发事件weex

weex 调用 native ？？？？commonmodule


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



bundle缓存功能   bundle安全校验？？？？？
- 网络bundle时，有缓存，用缓存，没有缓存时看是否有网络，有网络时加载后缓存，没有网络用assets里的文件

为了方便调试
WeexUtil.setDebugable(false);


chromedebugger 流程
1、weex debug
2、http://172.20.12.26:8088
3、启动app
4、此时chrome 出现手机设备
5、点击 debugger



