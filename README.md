# meituan 美团  （全栈全端式项目）

**项目目录说明**

- `mt_nuxt214` NuxtJS框架 Koa后端服务 PC端 SSR 美团项目
- `mt_sql` 数据库表设计 相关的假造爬取数据内容

目前支持地区获取到的数据有  广州，深圳，上海

对中文进行编码 : `encodeURIComponent(username)`

### 高德地图

1. 根据经纬度获取 地理位置城市名称：
   - [百度地图API 逆地理编码](https://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-geocoding-abroad)
   - [自建数据表方式CSDN](https://blog.csdn.net/xiangyuecn/article/details/122961085)

- 高德地图Web服务Api
  - [逆地理编码](https://lbs.amap.com/api/webservice/guide/api/georegeo)  

- 地图JS Api `https://lbs.amap.com/api/jsapi-v2/summary/`

- 地图JS Api属性参考手册 `https://lbs.amap.com/api/javascript-api-v2/documentation#map`

- 在线编辑 `https://developer.amap.com/demo/jsapi-v2/example/doc-demo/doc-base-control`


## nginx 图像代理
```conf
    server {
        listen  8000;
        server_name localhost;

        location /img {
           proxy_pass https://img.meituan.net/;
        }

        location /p1 {
                proxy_pass https://p1.meituan.net/;
        }

        location /p0 {
                proxy_pass https://p0.meituan.net/;
        }

        location /qcloud {
                proxy_pass https://qcloud.dpfile.com/;
        }

        location /mmdb {
                proxy_pass https://p0.pipi.cn/mmdb/;
        }
   }

```