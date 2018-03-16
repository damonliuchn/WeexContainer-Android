# 功能：

bundle缓存功能
- 网络bundle时，有缓存，用缓存，没有缓存时看是否有网络，有网络时加载后缓存，没有网络用assets里的文件

为了方便调试
WeexUtil.setDebugable(false);

native 跳转weex

weex 跳转 native

native 发事件weex

weex 调用 native ？？？？commonmodule


监听android返回键
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







