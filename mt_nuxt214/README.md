# mt_nuxt214

> meituan ssr create-nuxt-app@2.14.0 project

## issuse

1. `Cannot find module 'node:fs'` node:v12.22.1

   - win7 系统已经不能升级到支持`node:`(内置模块命名空间)，所以只能对这里的 node_modules 目录下的依赖去掉`node:`,采用的方式是降低依赖包的版本`npm i nuxt@2.15.8 -S`


## development environment

> npx create-nuxt-app@2.14.0 mt_nuxt214

- node v12.22.1
- nuxt v2.15.8

## Configuring environment

1. *mt_nuxt214/server*目录下创建*conf.js*文件
   ```js
   // conf.js
   module.exports = {
      MySQL: {
         host: "127.0.0.1",  // mysql 主机
         port: 3360, // mysql 端口
         database: "", // mysql连接的数据库
         user: "root", // mysql 用户名
         pwd: "" // mysql 密码
      },
      Redis:{
         host:"127.0.0.1", // redis 主机
         port:6379  // redis 端口
      },
      SMTP:{
         host:"smtp.qq.com", // 电子邮箱主机
         port:587, // 电子邮箱端口
         user:"", // 发件人邮箱
         pwd:"" // 发件人授权码
      }

   }
   ```

## Response Code
   - `-1` 参数验证失败
   - `0` 数据库读写失败
   - `1` 成功返回