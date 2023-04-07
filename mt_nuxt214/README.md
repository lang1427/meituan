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
   export const DB_host = "127.0.0.1" 
   export const DB_port = 3360
   export const DB_sql = ""
   export const DB_user = "root"
   export const DB_pwd = ""
   ```