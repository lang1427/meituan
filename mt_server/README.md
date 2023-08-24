### 商品分类表

- id 分类 id
- name 分类名称
- cid 子类 id

### 店铺表

- id 店铺 id
- name 店铺名称
- address_desc 店铺地址
- city_id 城市 id
- imgUrl 店铺头像
- longitude 经度
- latitude 纬度
- phone 联系电话
- openTime 营业时间
- notice 公告
- type 店铺分类
- avgPrice 平均价位
- avgScore 平均评分
- commentNum 评论数


### 产品表

- id 商品 id
- title 商品名称
- imgUrl 商品图片
- price 商品价格
- shop_id 店铺 id

### City 表

### 用户表

- id 用户id
- username 用户昵称
- email   用户邮箱
- password  用户密码
- slat  盐值
- grade 密码等级 (1 弱 2中 3强) 
- iphone 用户手机号
- avatar 用户头像
- birthday 生日
- active 是否激活

### 地铁站表

- city_id 城市id
- line  线名
- name  站名
- longitude 经度
- latitude 纬度


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
   }

```