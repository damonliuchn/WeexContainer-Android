# WeexContainer-Android
一个Android平台上Weex容器，实现MPA,Bundle缓存、验签等通用功能。

# Demo

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

# 二、weex 跳转 native、weex跳转weex
拦截url处理 可以校验域名，可以把网络bundle地址转换为assets地址



# 三、weex 调用 native ？？？？commonmodule

# 四、native通知weex
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


# bundle缓存功能
bundle缓存功能
- 网络bundle时，有缓存，用缓存，没有缓存时看是否有网络，有网络时加载后缓存，没有网络用assets里的文件


# bundle 验证签名

# 开启调试器chromedebugger
chromedebugger 流程
1、weex debug
2、http://172.20.12.26:8088
3、启动app
4、此时chrome 出现手机设备
5、点击 debugger

# USAGE

# connect

# linsense

