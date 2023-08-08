const { aMapWebKey,aMapWebSecurity } = require('~/server/conf')

window._AMapSecurityConfig = {
    securityJsCode: aMapWebSecurity,
}

var url = `https://webapi.amap.com/maps?v=2.0&key=${aMapWebKey}`;
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);