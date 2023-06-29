# vue-ssr-meituan

**项目目录说明**

- `mt_nuxt214` NuxtJS框架 Koa后端服务 PC端 SSR 美团项目
- `mt_server` 数据库表设计 相关的假造爬取数据内容


对中文进行编码 : `encodeURIComponent(username)`

```js
// exit.vue
export default {
  // 使用中间件实现退出登录操作；因为退出登录没有dom操作，由<next-link to=exit />进行的
  middleware: async (ctx) => {
    let { status, data } = await ctx.$axios.get('/users/exit');
    if (status === 200 && data && data.code == 0) {
      window.location.href = '/';
    }
  },
};
```

### 高德地图

1. 根据经纬度获取 地理位置城市名称：
   - [百度地图API 逆地理编码](https://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-geocoding-abroad)
   - [自建数据表方式CSDN](https://blog.csdn.net/xiangyuecn/article/details/122961085)

- 高德地图Web服务Api
  - [逆地理编码](https://lbs.amap.com/api/webservice/guide/api/georegeo)  
