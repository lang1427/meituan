<template>
  <div class="category-nav-container">
    <div class="category-nav-title-wrapper"><span class="category-nav-title">全部分类</span><span class="title-icon"></span>
    </div>
    <div class="category-nav-content-wrapper" ref="categoryContent">
      <ul>
        <li class="nav-li"><i class="iconfontNew el-icon-food"></i><span class="nav-text-wrapper"><span><a
                href="https://gz.meituan.com/meishi/" class="link nav-text" target="_blank">美食</a></span></span><i
            class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-waimaiNew"></i><span class="nav-text-wrapper"><span><a
                href="https://waimai.meituan.com" class="link nav-text" target="_blank">外卖</a></span></span><i
            class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-hotelNew"></i><span class="nav-text-wrapper"><span><a
                href="https://hotel.meituan.com" class="link nav-text" target="_blank">酒店<span
                  class="nav-promotion">HOT</span></a></span></span><i class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-zhenguoNew"></i><span class="nav-text-wrapper"><span><a
                href="https://minsu.meituan.com/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=nav"
                class="link nav-text" target="_blank">民宿</a></span></span><i class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-maoyanNew"></i><span class="nav-text-wrapper"><span><a
                href="https://maoyan.com/films?utm_source=meituanweb" class="link nav-text"
                target="_blank">猫眼电影</a></span></span><i class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-planeNew"></i><span class="nav-text-wrapper"><span><a
                href="https://www.meituan.com/flight/" class="link nav-text" target="_blank">机票</a> / </span><span><a
                href="https://www.meituan.com/train/" class="link nav-text" target="_blank">火车票</a></span></span><i
            class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-ktvNew"></i><span class="nav-text-wrapper"><span><a
                href="https://gz.meituan.com/xiuxianyule/" class="link nav-text" target="_blank">休闲娱乐</a> /
            </span><span><a href="https://gz.meituan.com/xiuxianyule/c10/" class="link nav-text"
                target="_blank">KTV</a></span></span><i class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-lifeNew"></i><span class="nav-text-wrapper"><span><a
                href="https://gz.meituan.com/shenghuo/" class="link nav-text" target="_blank">生活服务</a></span></span><i
            class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-beautyNew"></i><span class="nav-text-wrapper"><span><a
                href="https://gz.meituan.com/jiankangliren/" class="link nav-text" target="_blank">丽人</a> /
            </span><span><a href="https://gz.meituan.com/jiankangliren/c74/" class="link nav-text" target="_blank">美发</a>
              / </span><span><a href="https://gz.meituan.com/jiankangliren/c20423/" class="link nav-text"
                target="_blank">医学美容</a></span></span><i class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-marriedNew"></i><span class="nav-text-wrapper"><span><a
                href="https://gz.meituan.com/jiehun/" class="link nav-text" target="_blank">结婚</a> / </span><span><a
                href="https://gz.meituan.com/jiehun/c20198/" class="link nav-text" target="_blank">婚纱摄影</a> /
            </span><span><a href="https://gz.meituan.com/jiehun/c20210/" class="link nav-text"
                target="_blank">婚宴</a></span></span><i class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-childNew"></i><span class="nav-text-wrapper"><span><a
                href="https://gz.meituan.com/qinzi/" class="link nav-text" target="_blank">亲子</a> / </span><span><a
                href="https://gz.meituan.com/qinzi/c20108/" class="link nav-text" target="_blank">儿童乐园</a> /
            </span><span><a href="https://gz.meituan.com/qinzi/c20045/" class="link nav-text"
                target="_blank">幼教</a></span></span><i class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-sportNew"></i><span class="nav-text-wrapper"><span><a
                href="https://gz.meituan.com/yundongjianshen/" class="link nav-text" target="_blank">运动健身</a> /
            </span><span><a href="https://gz.meituan.com/yundongjianshen/c20253/" class="link nav-text"
                target="_blank">健身中心</a></span></span><i class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-decorateNew"></i><span class="nav-text-wrapper"><span><a
                href="https://gz.meituan.com/jiazhuang/" class="link nav-text" target="_blank">家装</a> / </span><span><a
                href="https://gz.meituan.com/jiazhuang/c20182/" class="link nav-text" target="_blank">建材</a> /
            </span><span><a href="https://gz.meituan.com/jiazhuang/c20771/" class="link nav-text"
                target="_blank">家居</a></span></span><i class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-educationNew"></i><span class="nav-text-wrapper"><span><a
                href="https://gz.meituan.com/jiaoyupeixun/" class="link nav-text" target="_blank">学习培训</a> /
            </span><span><a href="https://gz.meituan.com/xuexipeixun/c20287/" class="link nav-text"
                target="_blank">音乐培训</a></span></span><i class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-medicalNew"></i><span class="nav-text-wrapper"><span><a
                href="https://gz.meituan.com/yiliao/" class="link nav-text" target="_blank">医疗健康</a> / </span><span><a
                href="https://gz.meituan.com/chongwu/c20691/" class="link nav-text" target="_blank">宠物</a> /
            </span><span><a href="https://gz.meituan.com/aiche/" class="link nav-text"
                target="_blank">爱车</a></span></span><i class="nav-right-arrow"></i></li>
        <li class="nav-li"><i class="iconfontNew hc-icon-barNew"></i><span class="nav-text-wrapper"><span><a
                href="https://gz.meituan.com/xiuxianyule/c234/" class="link nav-text" target="_blank">酒吧</a> /
            </span><span><a href="https://gz.meituan.com/xiuxianyule/c230/" class="link nav-text"
                target="_blank">密室逃脱</a></span></span><i class="nav-right-arrow"></i></li>
      </ul>
    </div>
    <div class="category-nav-detail-wrapper" ref="categoryDetail">
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/meishi/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:1,&quot;index&quot;:&quot;1_1_0&quot;,&quot;title&quot;:&quot;美食&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">美食</a></h2><a
              href="https://gz.meituan.com/meishi/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:1,&quot;index&quot;:&quot;1_1_more&quot;,&quot;title&quot;:&quot;美食&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/meishi/c393/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:393,&quot;index&quot;:&quot;1_1_1&quot;,&quot;title&quot;:&quot;代金券&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">代金券</a><a
              href="https://gz.meituan.com/meishi/c11/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:11,&quot;index&quot;:&quot;1_1_2&quot;,&quot;title&quot;:&quot;甜点饮品&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">甜点饮品</a><a
              href="https://gz.meituan.com/meishi/c17/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:17,&quot;index&quot;:&quot;1_1_3&quot;,&quot;title&quot;:&quot;火锅&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">火锅</a><a
              href="https://gz.meituan.com/meishi/c40/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:40,&quot;index&quot;:&quot;1_1_4&quot;,&quot;title&quot;:&quot;自助餐&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">自助餐</a><a
              href="https://gz.meituan.com/meishi/c36/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:36,&quot;index&quot;:&quot;1_1_5&quot;,&quot;title&quot;:&quot;小吃快餐&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">小吃快餐</a><a
              href="https://gz.meituan.com/meishi/c28/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:28,&quot;index&quot;:&quot;1_1_6&quot;,&quot;title&quot;:&quot;日韩料理&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">日韩料理</a><a
              href="https://gz.meituan.com/meishi/c35/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:35,&quot;index&quot;:&quot;1_1_7&quot;,&quot;title&quot;:&quot;西餐&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">西餐</a><a
              href="https://gz.meituan.com/meishi/c395/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:395,&quot;index&quot;:&quot;1_1_8&quot;,&quot;title&quot;:&quot;聚餐宴请&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">聚餐宴请</a><a
              href="https://gz.meituan.com/meishi/c54/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:54,&quot;index&quot;:&quot;1_1_9&quot;,&quot;title&quot;:&quot;烧烤烤肉&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">烧烤烤肉</a><a
              href="https://gz.meituan.com/meishi/c20003/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20003,&quot;index&quot;:&quot;1_1_10&quot;,&quot;title&quot;:&quot;东北菜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">东北菜</a><a
              href="https://gz.meituan.com/meishi/c55/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:55,&quot;index&quot;:&quot;1_1_11&quot;,&quot;title&quot;:&quot;川湘菜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">川湘菜</a><a
              href="https://gz.meituan.com/meishi/c56/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:56,&quot;index&quot;:&quot;1_1_12&quot;,&quot;title&quot;:&quot;江浙菜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">江浙菜</a><a
              href="https://gz.meituan.com/meishi/c20004/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20004,&quot;index&quot;:&quot;1_1_13&quot;,&quot;title&quot;:&quot;香锅烤鱼&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">香锅烤鱼</a><a
              href="https://gz.meituan.com/meishi/c57/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:57,&quot;index&quot;:&quot;1_1_14&quot;,&quot;title&quot;:&quot;粤港菜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">粤港菜</a><a
              href="https://gz.meituan.com/meishi/c400/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:400,&quot;index&quot;:&quot;1_1_15&quot;,&quot;title&quot;:&quot;中式烧烤/烤串&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">中式烧烤/烤串</a><a
              href="https://gz.meituan.com/meishi/c58/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:58,&quot;index&quot;:&quot;1_1_16&quot;,&quot;title&quot;:&quot;西北菜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">西北菜</a><a
              href="https://gz.meituan.com/meishi/c41/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:41,&quot;index&quot;:&quot;1_1_17&quot;,&quot;title&quot;:&quot;咖啡酒吧茶馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">咖啡酒吧茶馆</a><a
              href="https://gz.meituan.com/meishi/c60/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:60,&quot;index&quot;:&quot;1_1_18&quot;,&quot;title&quot;:&quot;云贵菜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">云贵菜</a><a
              href="https://gz.meituan.com/meishi/c62/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:62,&quot;index&quot;:&quot;1_1_19&quot;,&quot;title&quot;:&quot;东南亚菜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">东南亚菜</a><a
              href="https://gz.meituan.com/meishi/c63/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:63,&quot;index&quot;:&quot;1_1_20&quot;,&quot;title&quot;:&quot;海鲜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">海鲜</a><a
              href="https://gz.meituan.com/meishi/c217/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:217,&quot;index&quot;:&quot;1_1_21&quot;,&quot;title&quot;:&quot;素食&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">素食</a><a
              href="https://gz.meituan.com/meishi/c227/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:227,&quot;index&quot;:&quot;1_1_22&quot;,&quot;title&quot;:&quot;台湾/客家菜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">台湾/客家菜</a><a
              href="https://gz.meituan.com/meishi/c228/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:228,&quot;index&quot;:&quot;1_1_23&quot;,&quot;title&quot;:&quot;创意菜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">创意菜</a><a
              href="https://gz.meituan.com/meishi/c229/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:229,&quot;index&quot;:&quot;1_1_24&quot;,&quot;title&quot;:&quot;汤/粥/炖菜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">汤/粥/炖菜</a><a
              href="https://gz.meituan.com/meishi/c232/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:232,&quot;index&quot;:&quot;1_1_25&quot;,&quot;title&quot;:&quot;蒙餐&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">蒙餐</a><a
              href="https://gz.meituan.com/meishi/c233/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:233,&quot;index&quot;:&quot;1_1_26&quot;,&quot;title&quot;:&quot;新疆菜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">新疆菜</a><a
              href="https://gz.meituan.com/meishi/c24/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:24,&quot;index&quot;:&quot;1_1_27&quot;,&quot;title&quot;:&quot;其他美食&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">其他美食</a><a
              href="https://gz.meituan.com/meishi/c59/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:59,&quot;index&quot;:&quot;1_1_28&quot;,&quot;title&quot;:&quot;京菜鲁菜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">京菜鲁菜</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://waimai.meituan.com"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000007,&quot;index&quot;:&quot;2_1_0&quot;,&quot;title&quot;:&quot;外卖&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">外卖</a></h2><a
              href="https://waimai.meituan.com"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000007,&quot;index&quot;:&quot;2_1_more&quot;,&quot;title&quot;:&quot;外卖&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://waimai.meituan.com"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000008,&quot;index&quot;:&quot;2_1_1&quot;,&quot;title&quot;:&quot;美团外卖&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">美团外卖</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://hotel.meituan.com"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20,&quot;index&quot;:&quot;3_1_0&quot;,&quot;title&quot;:&quot;酒店星级&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">酒店星级</a></h2><a
              href="https://hotel.meituan.com"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20,&quot;index&quot;:&quot;3_1_more&quot;,&quot;title&quot;:&quot;酒店星级&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://hotel.meituan.com/guangzhou/xj6"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000003,&quot;index&quot;:&quot;3_1_1&quot;,&quot;title&quot;:&quot;经济型&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">经济型</a><a
              href="https://hotel.meituan.com/guangzhou/xj45"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000004,&quot;index&quot;:&quot;3_1_2&quot;,&quot;title&quot;:&quot;舒适/三星&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">舒适/三星</a><a
              href="https://hotel.meituan.com/guangzhou/xj23"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000005,&quot;index&quot;:&quot;3_1_3&quot;,&quot;title&quot;:&quot;高档/四星&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">高档/四星</a><a
              href="https://hotel.meituan.com/guangzhou/xj01"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000006,&quot;index&quot;:&quot;3_1_4&quot;,&quot;title&quot;:&quot;豪华/五星&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">豪华/五星</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://minsu.meituan.com/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=hot_c"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000021,&quot;index&quot;:&quot;4_1_0&quot;,&quot;title&quot;:&quot;热门城市&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">热门城市</a></h2><a
              href="https://minsu.meituan.com/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=hot_c"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000021,&quot;index&quot;:&quot;4_1_more&quot;,&quot;title&quot;:&quot;热门城市&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a
              href="https://minsu.meituan.com/q/shanghai/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=shanghai"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000022,&quot;index&quot;:&quot;4_1_1&quot;,&quot;title&quot;:&quot;上海&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">上海</a><a
              href="https://minsu.meituan.com/q/chengdu/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=chengdu"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000023,&quot;index&quot;:&quot;4_1_2&quot;,&quot;title&quot;:&quot;成都&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">成都</a><a
              href="https://minsu.meituan.com/q/beijing/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=beijing"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000024,&quot;index&quot;:&quot;4_1_3&quot;,&quot;title&quot;:&quot;北京&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">北京</a><a
              href="https://minsu.meituan.com/q/chongqing/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=chongqing"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000025,&quot;index&quot;:&quot;4_1_4&quot;,&quot;title&quot;:&quot;重庆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">重庆</a><a
              href="https://minsu.meituan.com/q/nanjing/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=nanjing"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000026,&quot;index&quot;:&quot;4_1_5&quot;,&quot;title&quot;:&quot;南京&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">南京</a><a
              href="https://minsu.meituan.com/q/hangzhou/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=hangzhou"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000027,&quot;index&quot;:&quot;4_1_6&quot;,&quot;title&quot;:&quot;杭州&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">杭州</a><a
              href="https://minsu.meituan.com/q/guangzhou/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=guangzhou"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000028,&quot;index&quot;:&quot;4_1_7&quot;,&quot;title&quot;:&quot;广州&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">广州</a><a
              href="https://minsu.meituan.com/q/xian/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=xian"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000029,&quot;index&quot;:&quot;4_1_8&quot;,&quot;title&quot;:&quot;西安&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">西安</a><a
              href="https://minsu.meituan.com/q/wuhan/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=wuhan"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000030,&quot;index&quot;:&quot;4_1_9&quot;,&quot;title&quot;:&quot;武汉&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">武汉</a><a
              href="https://minsu.meituan.com/q/xiamen/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=xiamen"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000031,&quot;index&quot;:&quot;4_1_10&quot;,&quot;title&quot;:&quot;厦门&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">厦门</a><a
              href="https://minsu.meituan.com/q/changsha/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=changsha"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000032,&quot;index&quot;:&quot;4_1_11&quot;,&quot;title&quot;:&quot;长沙&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">长沙</a><a
              href="https://minsu.meituan.com/q/qingdao/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=qingdao"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000033,&quot;index&quot;:&quot;4_1_12&quot;,&quot;title&quot;:&quot;青岛&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">青岛</a><a
              href="https://minsu.meituan.com/q/shenzhen/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=shenzhen"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000034,&quot;index&quot;:&quot;4_1_13&quot;,&quot;title&quot;:&quot;深圳&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">深圳</a><a
              href="https://minsu.meituan.com/q/tianjin/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=tianjin"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000035,&quot;index&quot;:&quot;4_1_14&quot;,&quot;title&quot;:&quot;天津&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">天津</a><a
              href="https://minsu.meituan.com/q/suzhou/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=suzhou"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000036,&quot;index&quot;:&quot;4_1_15&quot;,&quot;title&quot;:&quot;苏州&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">苏州</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://minsu.meituan.com/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=hot_p"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000050,&quot;index&quot;:&quot;4_2_0&quot;,&quot;title&quot;:&quot;热门房源&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">热门房源</a></h2><a
              href="https://minsu.meituan.com/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=hot_p"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000050,&quot;index&quot;:&quot;4_2_more&quot;,&quot;title&quot;:&quot;热门房源&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a
              href="https://minsu.meituan.com/q/6270041/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=loft"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000051,&quot;index&quot;:&quot;4_2_1&quot;,&quot;title&quot;:&quot;复式Loft&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">复式Loft</a><a
              href="https://minsu.meituan.com/q/6332019/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=bieshu"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000052,&quot;index&quot;:&quot;4_2_2&quot;,&quot;title&quot;:&quot;别墅&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">别墅</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://maoyan.com"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:99,&quot;index&quot;:&quot;5_1_0&quot;,&quot;title&quot;:&quot;热映电影&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">热映电影</a></h2><a
              href="https://maoyan.com"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:99,&quot;index&quot;:&quot;5_1_more&quot;,&quot;title&quot;:&quot;热映电影&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://maoyan.com/films/1410386"
              data-lab="{&quot;custom&quot;:{&quot;index&quot;:&quot;5_1_1&quot;,&quot;title&quot;:&quot;铃芽之旅&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">铃芽之旅</a><a
              href="https://maoyan.com/films/341858"
              data-lab="{&quot;custom&quot;:{&quot;index&quot;:&quot;5_1_2&quot;,&quot;title&quot;:&quot;龙与地下城：侠盗荣耀&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">龙与地下城：侠盗荣耀</a><a
              href="https://maoyan.com/films/1203724"
              data-lab="{&quot;custom&quot;:{&quot;index&quot;:&quot;5_1_3&quot;,&quot;title&quot;:&quot;忠犬八公&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">忠犬八公</a><a
              href="https://maoyan.com/films/1300022"
              data-lab="{&quot;custom&quot;:{&quot;index&quot;:&quot;5_1_4&quot;,&quot;title&quot;:&quot;不止不休&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">不止不休</a><a
              href="https://maoyan.com/films/1434052"
              data-lab="{&quot;custom&quot;:{&quot;index&quot;:&quot;5_1_5&quot;,&quot;title&quot;:&quot;保你平安&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">保你平安</a><a
              href="https://maoyan.com/films/1418991"
              data-lab="{&quot;custom&quot;:{&quot;index&quot;:&quot;5_1_6&quot;,&quot;title&quot;:&quot;回廊亭&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">回廊亭</a><a
              href="https://maoyan.com/films/1470074"
              data-lab="{&quot;custom&quot;:{&quot;index&quot;:&quot;5_1_7&quot;,&quot;title&quot;:&quot;毒舌律师&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">毒舌律师</a><a
              href="https://maoyan.com/films/1310584"
              data-lab="{&quot;custom&quot;:{&quot;index&quot;:&quot;5_1_8&quot;,&quot;title&quot;:&quot;宇宙探索编辑部&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">宇宙探索编辑部</a><a
              href="https://maoyan.com/films/1427828"
              data-lab="{&quot;custom&quot;:{&quot;index&quot;:&quot;5_1_9&quot;,&quot;title&quot;:&quot;不能错过的只有你&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">不能错过的只有你</a><a
              href="https://maoyan.com/films/1467323"
              data-lab="{&quot;custom&quot;:{&quot;index&quot;:&quot;5_1_10&quot;,&quot;title&quot;:&quot;了不起的夜晚&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">了不起的夜晚</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://www.meituan.com/flight/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000009,&quot;index&quot;:&quot;6_1_0&quot;,&quot;title&quot;:&quot;机票&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">机票</a></h2><a
              href="https://www.meituan.com/flight/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000009,&quot;index&quot;:&quot;6_1_more&quot;,&quot;title&quot;:&quot;机票&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://www.meituan.com/flight/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000010,&quot;index&quot;:&quot;6_1_1&quot;,&quot;title&quot;:&quot;国内机票&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">国内机票</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://www.meituan.com/train/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000001,&quot;index&quot;:&quot;6_2_0&quot;,&quot;title&quot;:&quot;火车票&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">火车票</a></h2><a
              href="https://www.meituan.com/train/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000001,&quot;index&quot;:&quot;6_2_more&quot;,&quot;title&quot;:&quot;火车票&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://www.meituan.com/train/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000001,&quot;index&quot;:&quot;6_2_1&quot;,&quot;title&quot;:&quot;火车票&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">火车票</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/xiuxianyule/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:2,&quot;index&quot;:&quot;7_1_0&quot;,&quot;title&quot;:&quot;休闲娱乐&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">休闲娱乐</a></h2><a
              href="https://gz.meituan.com/xiuxianyule/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:2,&quot;index&quot;:&quot;7_1_more&quot;,&quot;title&quot;:&quot;休闲娱乐&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/xiuxianyule/c52/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:52,&quot;index&quot;:&quot;7_1_1&quot;,&quot;title&quot;:&quot;足疗按摩&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">足疗按摩</a><a
              href="https://gz.meituan.com/xiuxianyule/c112/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:112,&quot;index&quot;:&quot;7_1_2&quot;,&quot;title&quot;:&quot;洗浴/汗蒸&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">洗浴/汗蒸</a><a
              href="https://gz.meituan.com/xiuxianyule/c234/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:234,&quot;index&quot;:&quot;7_1_3&quot;,&quot;title&quot;:&quot;酒吧&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">酒吧</a><a
              href="https://gz.meituan.com/xiuxianyule/c230/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:230,&quot;index&quot;:&quot;7_1_4&quot;,&quot;title&quot;:&quot;密室逃脱&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">密室逃脱</a><a
              href="https://gz.meituan.com/xiuxianyule/c20773/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20773,&quot;index&quot;:&quot;7_1_5&quot;,&quot;title&quot;:&quot;轰趴馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">轰趴馆</a><a
              href="https://gz.meituan.com/xiuxianyule/c20772/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20772,&quot;index&quot;:&quot;7_1_6&quot;,&quot;title&quot;:&quot;茶馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">茶馆</a><a
              href="https://gz.meituan.com/xiuxianyule/c20104/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20104,&quot;index&quot;:&quot;7_1_7&quot;,&quot;title&quot;:&quot;私人影院&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">私人影院</a><a
              href="https://gz.meituan.com/xiuxianyule/c218/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:218,&quot;index&quot;:&quot;7_1_8&quot;,&quot;title&quot;:&quot;DIY手工坊&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">DIY手工坊</a><a
              href="https://gz.meituan.com/xiuxianyule/c516/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:516,&quot;index&quot;:&quot;7_1_9&quot;,&quot;title&quot;:&quot;采摘/农家乐&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">采摘/农家乐</a><a
              href="https://gz.meituan.com/xiuxianyule/c20770/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20770,&quot;index&quot;:&quot;7_1_10&quot;,&quot;title&quot;:&quot;网吧网咖&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">网吧网咖</a><a
              href="https://gz.meituan.com/xiuxianyule/c38/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:38,&quot;index&quot;:&quot;7_1_11&quot;,&quot;title&quot;:&quot;游乐游艺&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">游乐游艺</a><a
              href="https://gz.meituan.com/xiuxianyule/c20779/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20779,&quot;index&quot;:&quot;7_1_12&quot;,&quot;title&quot;:&quot;VR&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">VR</a><a
              href="https://gz.meituan.com/xiuxianyule/c20777/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20777,&quot;index&quot;:&quot;7_1_13&quot;,&quot;title&quot;:&quot;桌面游戏&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">桌面游戏</a><a
              href="https://gz.meituan.com/xiuxianyule/c219/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:219,&quot;index&quot;:&quot;7_1_14&quot;,&quot;title&quot;:&quot;真人CS&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">真人CS</a><a
              href="https://gz.meituan.com/xiuxianyule/c20776/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20776,&quot;index&quot;:&quot;7_1_15&quot;,&quot;title&quot;:&quot;棋牌室&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">棋牌室</a><a
              href="https://gz.meituan.com/xiuxianyule/c26/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:26,&quot;index&quot;:&quot;7_1_16&quot;,&quot;title&quot;:&quot;其他玩乐&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">其他玩乐</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/xiuxianyule/c10/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10,&quot;index&quot;:&quot;7_2_0&quot;,&quot;title&quot;:&quot;KTV&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">KTV</a></h2><a
              href="https://gz.meituan.com/xiuxianyule/c10/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10,&quot;index&quot;:&quot;7_2_more&quot;,&quot;title&quot;:&quot;KTV&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/xiuxianyule/c10/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10,&quot;index&quot;:&quot;7_2_1&quot;,&quot;title&quot;:&quot;KTV&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">KTV</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/shenghuo/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000040,&quot;index&quot;:&quot;8_1_0&quot;,&quot;title&quot;:&quot;生活服务&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">生活服务</a></h2><a
              href="https://gz.meituan.com/shenghuo/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000040,&quot;index&quot;:&quot;8_1_more&quot;,&quot;title&quot;:&quot;生活服务&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/shenghuo/c20112/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20112,&quot;index&quot;:&quot;8_1_1&quot;,&quot;title&quot;:&quot;衣物/皮具洗护&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">衣物/皮具洗护</a><a
              href="https://gz.meituan.com/shenghuo/c20113/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20113,&quot;index&quot;:&quot;8_1_2&quot;,&quot;title&quot;:&quot;家政&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">家政</a><a
              href="https://gz.meituan.com/shenghuo/c20454/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20454,&quot;index&quot;:&quot;8_1_3&quot;,&quot;title&quot;:&quot;搬家运输&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">搬家运输</a><a
              href="https://gz.meituan.com/shenghuo/c20453/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20453,&quot;index&quot;:&quot;8_1_4&quot;,&quot;title&quot;:&quot;送水&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">送水</a><a
              href="https://gz.meituan.com/shenghuo/c20111/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20111,&quot;index&quot;:&quot;8_1_5&quot;,&quot;title&quot;:&quot;充值缴费&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">充值缴费</a><a
              href="https://gz.meituan.com/shenghuo/c20057/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20057,&quot;index&quot;:&quot;8_1_6&quot;,&quot;title&quot;:&quot;服饰/鞋包养护&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">服饰/鞋包养护</a><a
              href="https://gz.meituan.com/shenghuo/c20457/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20457,&quot;index&quot;:&quot;8_1_7&quot;,&quot;title&quot;:&quot;开锁换锁&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">开锁换锁</a><a
              href="https://gz.meituan.com/shenghuo/c20474/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20474,&quot;index&quot;:&quot;8_1_8&quot;,&quot;title&quot;:&quot;居家维修&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">居家维修</a><a
              href="https://gz.meituan.com/shenghuo/c20456/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20456,&quot;index&quot;:&quot;8_1_9&quot;,&quot;title&quot;:&quot;管道疏通&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">管道疏通</a><a
              href="https://gz.meituan.com/shenghuo/c20459/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20459,&quot;index&quot;:&quot;8_1_10&quot;,&quot;title&quot;:&quot;家电维修清洗&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">家电维修清洗</a><a
              href="https://gz.meituan.com/shenghuo/c20458/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20458,&quot;index&quot;:&quot;8_1_11&quot;,&quot;title&quot;:&quot;电脑维修&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">电脑维修</a><a
              href="https://gz.meituan.com/shenghuo/c20460/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20460,&quot;index&quot;:&quot;8_1_12&quot;,&quot;title&quot;:&quot;手机维修&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">手机维修</a><a
              href="https://gz.meituan.com/shenghuo/c20196/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20196,&quot;index&quot;:&quot;8_1_13&quot;,&quot;title&quot;:&quot;证件照/肖像摄影&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">证件照/肖像摄影</a><a
              href="https://gz.meituan.com/shenghuo/c221/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:221,&quot;index&quot;:&quot;8_1_14&quot;,&quot;title&quot;:&quot;照片冲印/图文文印&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">照片冲印/图文文印</a><a
              href="https://gz.meituan.com/shenghuo/c21006/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:21006,&quot;index&quot;:&quot;8_1_15&quot;,&quot;title&quot;:&quot;商务服务/法律服务&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">商务服务/法律服务</a><a
              href="https://gz.meituan.com/shenghuo/c21007/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:21007,&quot;index&quot;:&quot;8_1_16&quot;,&quot;title&quot;:&quot;文化传媒机构&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">文化传媒机构</a><a
              href="https://gz.meituan.com/shenghuo/c21113/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:21113,&quot;index&quot;:&quot;8_1_17&quot;,&quot;title&quot;:&quot;成人用品/情趣用品&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">成人用品/情趣用品</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/jiankangliren/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:22,&quot;index&quot;:&quot;9_1_0&quot;,&quot;title&quot;:&quot;丽人&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">丽人</a></h2><a
              href="https://gz.meituan.com/jiankangliren/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:22,&quot;index&quot;:&quot;9_1_more&quot;,&quot;title&quot;:&quot;丽人&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/jiankangliren/c74/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:74,&quot;index&quot;:&quot;9_1_1&quot;,&quot;title&quot;:&quot;美发&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">美发</a><a
              href="https://gz.meituan.com/jiankangliren/c75/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:75,&quot;index&quot;:&quot;9_1_2&quot;,&quot;title&quot;:&quot;美甲美睫&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">美甲美睫</a><a
              href="https://gz.meituan.com/jiankangliren/c76/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:76,&quot;index&quot;:&quot;9_1_3&quot;,&quot;title&quot;:&quot;美容美体&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">美容美体</a><a
              href="https://gz.meituan.com/jiankangliren/c20423/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20423,&quot;index&quot;:&quot;9_1_4&quot;,&quot;title&quot;:&quot;医学美容&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">医学美容</a><a
              href="https://gz.meituan.com/jiankangliren/c220/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:220,&quot;index&quot;:&quot;9_1_5&quot;,&quot;title&quot;:&quot;瑜伽舞蹈&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">瑜伽舞蹈</a><a
              href="https://gz.meituan.com/jiankangliren/c20422/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20422,&quot;index&quot;:&quot;9_1_6&quot;,&quot;title&quot;:&quot;瘦身纤体&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">瘦身纤体</a><a
              href="https://gz.meituan.com/jiankangliren/c20419/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20419,&quot;index&quot;:&quot;9_1_7&quot;,&quot;title&quot;:&quot;韩式定妆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">韩式定妆</a><a
              href="https://gz.meituan.com/jiankangliren/c20421/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20421,&quot;index&quot;:&quot;9_1_8&quot;,&quot;title&quot;:&quot;祛痘&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">祛痘</a><a
              href="https://gz.meituan.com/jiankangliren/c20420/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20420,&quot;index&quot;:&quot;9_1_9&quot;,&quot;title&quot;:&quot;纹身&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">纹身</a><a
              href="https://gz.meituan.com/jiankangliren/c20418/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20418,&quot;index&quot;:&quot;9_1_10&quot;,&quot;title&quot;:&quot;化妆品&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">化妆品</a><a
              href="https://gz.meituan.com/jiankangliren/c21394/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:21394,&quot;index&quot;:&quot;9_1_11&quot;,&quot;title&quot;:&quot;养发&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">养发</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/jiehun/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20178,&quot;index&quot;:&quot;10_1_0&quot;,&quot;title&quot;:&quot;结婚&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">结婚</a></h2><a
              href="https://gz.meituan.com/jiehun/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20178,&quot;index&quot;:&quot;10_1_more&quot;,&quot;title&quot;:&quot;结婚&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/jiehun/c20198/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20198,&quot;index&quot;:&quot;10_1_1&quot;,&quot;title&quot;:&quot;婚纱摄影&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">婚纱摄影</a><a
              href="https://gz.meituan.com/jiehun/c20303/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20303,&quot;index&quot;:&quot;10_1_2&quot;,&quot;title&quot;:&quot;旅拍&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">旅拍</a><a
              href="https://gz.meituan.com/jiehun/c20641/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20641,&quot;index&quot;:&quot;10_1_3&quot;,&quot;title&quot;:&quot;个性写真&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">个性写真</a><a
              href="https://gz.meituan.com/jiehun/c20210/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20210,&quot;index&quot;:&quot;10_1_4&quot;,&quot;title&quot;:&quot;婚宴&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">婚宴</a><a
              href="https://gz.meituan.com/jiehun/c20201/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20201,&quot;index&quot;:&quot;10_1_5&quot;,&quot;title&quot;:&quot;婚庆公司&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">婚庆公司</a><a
              href="https://gz.meituan.com/jiehun/c20199/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20199,&quot;index&quot;:&quot;10_1_6&quot;,&quot;title&quot;:&quot;婚纱礼服&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">婚纱礼服</a><a
              href="https://gz.meituan.com/jiehun/c20200/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20200,&quot;index&quot;:&quot;10_1_7&quot;,&quot;title&quot;:&quot;西服定制&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">西服定制</a><a
              href="https://gz.meituan.com/jiehun/c20202/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20202,&quot;index&quot;:&quot;10_1_8&quot;,&quot;title&quot;:&quot;婚戒首饰&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">婚戒首饰</a><a
              href="https://gz.meituan.com/jiehun/c20204/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20204,&quot;index&quot;:&quot;10_1_9&quot;,&quot;title&quot;:&quot;婚车租赁&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">婚车租赁</a><a
              href="https://gz.meituan.com/jiehun/c20206/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20206,&quot;index&quot;:&quot;10_1_10&quot;,&quot;title&quot;:&quot;司仪主持&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">司仪主持</a><a
              href="https://gz.meituan.com/jiehun/c20205/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20205,&quot;index&quot;:&quot;10_1_11&quot;,&quot;title&quot;:&quot;彩妆造型&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">彩妆造型</a><a
              href="https://gz.meituan.com/jiehun/c20207/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20207,&quot;index&quot;:&quot;10_1_12&quot;,&quot;title&quot;:&quot;婚礼跟拍&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">婚礼跟拍</a><a
              href="https://gz.meituan.com/jiehun/c20203/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20203,&quot;index&quot;:&quot;10_1_13&quot;,&quot;title&quot;:&quot;婚礼小礼品&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">婚礼小礼品</a><a
              href="https://gz.meituan.com/jiehun/c20208/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20208,&quot;index&quot;:&quot;10_1_14&quot;,&quot;title&quot;:&quot;更多婚礼服务&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">更多婚礼服务</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/qinzi/c20108/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20108,&quot;index&quot;:&quot;11_1_0&quot;,&quot;title&quot;:&quot;儿童乐园&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">儿童乐园</a></h2><a
              href="https://gz.meituan.com/qinzi/c20108/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20108,&quot;index&quot;:&quot;11_1_more&quot;,&quot;title&quot;:&quot;儿童乐园&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/qinzi/c20514/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20514,&quot;index&quot;:&quot;11_1_1&quot;,&quot;title&quot;:&quot;婴儿游泳&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">婴儿游泳</a><a
              href="https://gz.meituan.com/qinzi/c20782/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20782,&quot;index&quot;:&quot;11_1_2&quot;,&quot;title&quot;:&quot;其它亲子游乐&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">其它亲子游乐</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/qinzi/c20045/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20045,&quot;index&quot;:&quot;11_2_0&quot;,&quot;title&quot;:&quot;幼儿教育&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">幼儿教育</a></h2><a
              href="https://gz.meituan.com/qinzi/c20045/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20045,&quot;index&quot;:&quot;11_2_more&quot;,&quot;title&quot;:&quot;幼儿教育&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/qinzi/c20865/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20865,&quot;index&quot;:&quot;11_2_1&quot;,&quot;title&quot;:&quot;早教中心&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">早教中心</a><a
              href="https://gz.meituan.com/qinzi/c20787/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20787,&quot;index&quot;:&quot;11_2_2&quot;,&quot;title&quot;:&quot;少儿英语&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">少儿英语</a><a
              href="https://gz.meituan.com/qinzi/c20789/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20789,&quot;index&quot;:&quot;11_2_3&quot;,&quot;title&quot;:&quot;智力开发&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">智力开发</a><a
              href="https://gz.meituan.com/qinzi/c20790/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20790,&quot;index&quot;:&quot;11_2_4&quot;,&quot;title&quot;:&quot;托班/幼儿园&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">托班/幼儿园</a><a
              href="https://gz.meituan.com/qinzi/c20864/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20864,&quot;index&quot;:&quot;11_2_5&quot;,&quot;title&quot;:&quot;幼儿教育&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">幼儿教育</a><a
              href="https://gz.meituan.com/qinzi/c20791/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20791,&quot;index&quot;:&quot;11_2_6&quot;,&quot;title&quot;:&quot;其他幼儿教育&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">其他幼儿教育</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/qinzi/c398/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:398,&quot;index&quot;:&quot;11_3_0&quot;,&quot;title&quot;:&quot;亲子摄影&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">亲子摄影</a></h2><a
              href="https://gz.meituan.com/qinzi/c398/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:398,&quot;index&quot;:&quot;11_3_more&quot;,&quot;title&quot;:&quot;亲子摄影&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/qinzi/c20048/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20048,&quot;index&quot;:&quot;11_3_1&quot;,&quot;title&quot;:&quot;儿童摄影&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">儿童摄影</a><a
              href="https://gz.meituan.com/qinzi/c20515/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20515,&quot;index&quot;:&quot;11_3_2&quot;,&quot;title&quot;:&quot;孕妇写真&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">孕妇写真</a><a
              href="https://gz.meituan.com/qinzi/c20783/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20783,&quot;index&quot;:&quot;11_3_3&quot;,&quot;title&quot;:&quot;上门拍&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">上门拍</a><a
              href="https://gz.meituan.com/qinzi/c20784/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20784,&quot;index&quot;:&quot;11_3_4&quot;,&quot;title&quot;:&quot;其他亲子摄影&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">其他亲子摄影</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/qinzi/c20042/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20042,&quot;index&quot;:&quot;11_4_0&quot;,&quot;title&quot;:&quot;孕产护理&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">孕产护理</a></h2><a
              href="https://gz.meituan.com/qinzi/c20042/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20042,&quot;index&quot;:&quot;11_4_more&quot;,&quot;title&quot;:&quot;孕产护理&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/qinzi/c20516/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20516,&quot;index&quot;:&quot;11_4_1&quot;,&quot;title&quot;:&quot;月子会所&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">月子会所</a><a
              href="https://gz.meituan.com/qinzi/c20792/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20792,&quot;index&quot;:&quot;11_4_2&quot;,&quot;title&quot;:&quot;产后恢复&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">产后恢复</a><a
              href="https://gz.meituan.com/qinzi/c20793/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20793,&quot;index&quot;:&quot;11_4_3&quot;,&quot;title&quot;:&quot;妇幼医院&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">妇幼医院</a><a
              href="https://gz.meituan.com/qinzi/c20794/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20794,&quot;index&quot;:&quot;11_4_4&quot;,&quot;title&quot;:&quot;孕产用品&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">孕产用品</a><a
              href="https://gz.meituan.com/qinzi/c20795/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20795,&quot;index&quot;:&quot;11_4_5&quot;,&quot;title&quot;:&quot;开奶催乳&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">开奶催乳</a><a
              href="https://gz.meituan.com/qinzi/c20796/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20796,&quot;index&quot;:&quot;11_4_6&quot;,&quot;title&quot;:&quot;月嫂&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">月嫂</a><a
              href="https://gz.meituan.com/qinzi/c20170/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20170,&quot;index&quot;:&quot;11_4_7&quot;,&quot;title&quot;:&quot;亲子购物&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">亲子购物</a><a
              href="https://gz.meituan.com/qinzi/c20785/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20785,&quot;index&quot;:&quot;11_4_8&quot;,&quot;title&quot;:&quot;宝宝派对&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">宝宝派对</a><a
              href="https://gz.meituan.com/qinzi/c20171/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20171,&quot;index&quot;:&quot;11_4_9&quot;,&quot;title&quot;:&quot;亲子服务&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">亲子服务</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/yundongjianshen/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:39,&quot;index&quot;:&quot;12_1_0&quot;,&quot;title&quot;:&quot;运动健身&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">运动健身</a></h2><a
              href="https://gz.meituan.com/yundongjianshen/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:39,&quot;index&quot;:&quot;12_1_more&quot;,&quot;title&quot;:&quot;运动健身&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/yundongjianshen/c20253/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20253,&quot;index&quot;:&quot;12_1_1&quot;,&quot;title&quot;:&quot;健身中心&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">健身中心</a><a
              href="https://gz.meituan.com/yundongjianshen/c20266/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20266,&quot;index&quot;:&quot;12_1_2&quot;,&quot;title&quot;:&quot;武术场馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">武术场馆</a><a
              href="https://gz.meituan.com/yundongjianshen/c20256/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20256,&quot;index&quot;:&quot;12_1_3&quot;,&quot;title&quot;:&quot;游泳馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">游泳馆</a><a
              href="https://gz.meituan.com/yundongjianshen/c20257/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20257,&quot;index&quot;:&quot;12_1_4&quot;,&quot;title&quot;:&quot;羽毛球馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">羽毛球馆</a><a
              href="https://gz.meituan.com/yundongjianshen/c20268/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20268,&quot;index&quot;:&quot;12_1_5&quot;,&quot;title&quot;:&quot;溜冰场&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">溜冰场</a><a
              href="https://gz.meituan.com/yundongjianshen/c20270/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20270,&quot;index&quot;:&quot;12_1_6&quot;,&quot;title&quot;:&quot;射箭馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">射箭馆</a><a
              href="https://gz.meituan.com/yundongjianshen/c20258/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20258,&quot;index&quot;:&quot;12_1_7&quot;,&quot;title&quot;:&quot;篮球场&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">篮球场</a><a
              href="https://gz.meituan.com/yundongjianshen/c20259/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20259,&quot;index&quot;:&quot;12_1_8&quot;,&quot;title&quot;:&quot;网球馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">网球馆</a><a
              href="https://gz.meituan.com/yundongjianshen/c20262/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20262,&quot;index&quot;:&quot;12_1_9&quot;,&quot;title&quot;:&quot;台球馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">台球馆</a><a
              href="https://gz.meituan.com/yundongjianshen/c20265/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20265,&quot;index&quot;:&quot;12_1_10&quot;,&quot;title&quot;:&quot;乒乓球&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">乒乓球</a><a
              href="https://gz.meituan.com/yundongjianshen/c20264/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20264,&quot;index&quot;:&quot;12_1_11&quot;,&quot;title&quot;:&quot;足球场&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">足球场</a><a
              href="https://gz.meituan.com/yundongjianshen/c20260/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20260,&quot;index&quot;:&quot;12_1_12&quot;,&quot;title&quot;:&quot;高尔夫场&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">高尔夫场</a><a
              href="https://gz.meituan.com/yundongjianshen/c20261/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20261,&quot;index&quot;:&quot;12_1_13&quot;,&quot;title&quot;:&quot;保龄球馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">保龄球馆</a><a
              href="https://gz.meituan.com/yundongjianshen/c20263/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20263,&quot;index&quot;:&quot;12_1_14&quot;,&quot;title&quot;:&quot;体育场馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">体育场馆</a><a
              href="https://gz.meituan.com/yundongjianshen/c20267/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20267,&quot;index&quot;:&quot;12_1_15&quot;,&quot;title&quot;:&quot;马术场&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">马术场</a><a
              href="https://gz.meituan.com/yundongjianshen/c20269/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20269,&quot;index&quot;:&quot;12_1_16&quot;,&quot;title&quot;:&quot;壁球馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">壁球馆</a><a
              href="https://gz.meituan.com/yundongjianshen/c20271/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20271,&quot;index&quot;:&quot;12_1_17&quot;,&quot;title&quot;:&quot;更多运动&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">更多运动</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/jiazhuang/c20180/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20180,&quot;index&quot;:&quot;13_1_0&quot;,&quot;title&quot;:&quot;装修设计&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">装修设计</a></h2><a
              href="https://gz.meituan.com/jiazhuang/c20180/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20180,&quot;index&quot;:&quot;13_1_more&quot;,&quot;title&quot;:&quot;装修设计&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/jiazhuang/c20878/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20878,&quot;index&quot;:&quot;13_1_1&quot;,&quot;title&quot;:&quot;半包装修&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">半包装修</a><a
              href="https://gz.meituan.com/jiazhuang/c20879/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20879,&quot;index&quot;:&quot;13_1_2&quot;,&quot;title&quot;:&quot;全包装修&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">全包装修</a><a
              href="https://gz.meituan.com/jiazhuang/c20880/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20880,&quot;index&quot;:&quot;13_1_3&quot;,&quot;title&quot;:&quot;清包装修&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">清包装修</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/jiazhuang/c20182/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20182,&quot;index&quot;:&quot;13_2_0&quot;,&quot;title&quot;:&quot;装修建材&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">装修建材</a></h2><a
              href="https://gz.meituan.com/jiazhuang/c20182/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20182,&quot;index&quot;:&quot;13_2_more&quot;,&quot;title&quot;:&quot;装修建材&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/jiazhuang/c20829/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20829,&quot;index&quot;:&quot;13_2_1&quot;,&quot;title&quot;:&quot;地板&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">地板</a><a
              href="https://gz.meituan.com/jiazhuang/c20823/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20823,&quot;index&quot;:&quot;13_2_2&quot;,&quot;title&quot;:&quot;瓷砖石材&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">瓷砖石材</a><a
              href="https://gz.meituan.com/jiazhuang/c20825/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20825,&quot;index&quot;:&quot;13_2_3&quot;,&quot;title&quot;:&quot;橱柜&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">橱柜</a><a
              href="https://gz.meituan.com/jiazhuang/c20835/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20835,&quot;index&quot;:&quot;13_2_4&quot;,&quot;title&quot;:&quot;灯饰照明&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">灯饰照明</a><a
              href="https://gz.meituan.com/jiazhuang/c20826/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20826,&quot;index&quot;:&quot;13_2_5&quot;,&quot;title&quot;:&quot;厨卫洁具&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">厨卫洁具</a><a
              href="https://gz.meituan.com/jiazhuang/c20822/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20822,&quot;index&quot;:&quot;13_2_6&quot;,&quot;title&quot;:&quot;油漆涂料&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">油漆涂料</a><a
              href="https://gz.meituan.com/jiazhuang/c20827/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20827,&quot;index&quot;:&quot;13_2_7&quot;,&quot;title&quot;:&quot;集成吊顶&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">集成吊顶</a><a
              href="https://gz.meituan.com/jiazhuang/c20824/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20824,&quot;index&quot;:&quot;13_2_8&quot;,&quot;title&quot;:&quot;墙纸墙艺&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">墙纸墙艺</a><a
              href="https://gz.meituan.com/jiazhuang/c20832/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20832,&quot;index&quot;:&quot;13_2_9&quot;,&quot;title&quot;:&quot;门窗&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">门窗</a><a
              href="https://gz.meituan.com/jiazhuang/c20831/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20831,&quot;index&quot;:&quot;13_2_10&quot;,&quot;title&quot;:&quot;木材板材&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">木材板材</a><a
              href="https://gz.meituan.com/jiazhuang/c20828/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20828,&quot;index&quot;:&quot;13_2_11&quot;,&quot;title&quot;:&quot;家用五金&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">家用五金</a><a
              href="https://gz.meituan.com/jiazhuang/c20834/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20834,&quot;index&quot;:&quot;13_2_12&quot;,&quot;title&quot;:&quot;电工电料&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">电工电料</a><a
              href="https://gz.meituan.com/jiazhuang/c20830/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20830,&quot;index&quot;:&quot;13_2_13&quot;,&quot;title&quot;:&quot;楼梯&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">楼梯</a><a
              href="https://gz.meituan.com/jiazhuang/c20833/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20833,&quot;index&quot;:&quot;13_2_14&quot;,&quot;title&quot;:&quot;管材管件&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">管材管件</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/jiazhuang/c20771/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20771,&quot;index&quot;:&quot;13_3_0&quot;,&quot;title&quot;:&quot;家具家居&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">家具家居</a></h2><a
              href="https://gz.meituan.com/jiazhuang/c20771/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20771,&quot;index&quot;:&quot;13_3_more&quot;,&quot;title&quot;:&quot;家具家居&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/jiazhuang/c20838/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20838,&quot;index&quot;:&quot;13_3_1&quot;,&quot;title&quot;:&quot;家具&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">家具</a><a
              href="https://gz.meituan.com/jiazhuang/c20840/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20840,&quot;index&quot;:&quot;13_3_2&quot;,&quot;title&quot;:&quot;床上用品/家纺&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">床上用品/家纺</a><a
              href="https://gz.meituan.com/jiazhuang/c20841/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20841,&quot;index&quot;:&quot;13_3_3&quot;,&quot;title&quot;:&quot;家居饰品&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">家居饰品</a><a
              href="https://gz.meituan.com/jiazhuang/c20839/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20839,&quot;index&quot;:&quot;13_3_4&quot;,&quot;title&quot;:&quot;厨具餐具&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">厨具餐具</a><a
              href="https://gz.meituan.com/jiazhuang/c20843/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20843,&quot;index&quot;:&quot;13_3_5&quot;,&quot;title&quot;:&quot;智能家居&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">智能家居</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/jiazhuang/c20184/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20184,&quot;index&quot;:&quot;13_4_0&quot;,&quot;title&quot;:&quot;家装卖场&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">家装卖场</a></h2><a
              href="https://gz.meituan.com/jiazhuang/c20184/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20184,&quot;index&quot;:&quot;13_4_more&quot;,&quot;title&quot;:&quot;家装卖场&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/jiazhuang/c20847/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20847,&quot;index&quot;:&quot;13_4_1&quot;,&quot;title&quot;:&quot;建材卖场&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">建材卖场</a><a
              href="https://gz.meituan.com/jiazhuang/c20846/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20846,&quot;index&quot;:&quot;13_4_2&quot;,&quot;title&quot;:&quot;家居卖场&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">家居卖场</a><a
              href="https://gz.meituan.com/jiazhuang/c20845/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20845,&quot;index&quot;:&quot;13_4_3&quot;,&quot;title&quot;:&quot;灯饰卖场&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">灯饰卖场</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/xuexipeixun/c20287/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20287,&quot;index&quot;:&quot;14_1_0&quot;,&quot;title&quot;:&quot;音乐培训&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">音乐培训</a></h2><a
              href="https://gz.meituan.com/xuexipeixun/c20287/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20287,&quot;index&quot;:&quot;14_1_more&quot;,&quot;title&quot;:&quot;音乐培训&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/xuexipeixun/c20313/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20313,&quot;index&quot;:&quot;14_1_1&quot;,&quot;title&quot;:&quot;钢琴&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">钢琴</a><a
              href="https://gz.meituan.com/xuexipeixun/c20314/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20314,&quot;index&quot;:&quot;14_1_2&quot;,&quot;title&quot;:&quot;吉他&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">吉他</a><a
              href="https://gz.meituan.com/xuexipeixun/c20315/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20315,&quot;index&quot;:&quot;14_1_3&quot;,&quot;title&quot;:&quot;小提琴&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">小提琴</a><a
              href="https://gz.meituan.com/xuexipeixun/c20316/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20316,&quot;index&quot;:&quot;14_1_4&quot;,&quot;title&quot;:&quot;古筝&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">古筝</a><a
              href="https://gz.meituan.com/xuexipeixun/c20317/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20317,&quot;index&quot;:&quot;14_1_5&quot;,&quot;title&quot;:&quot;架子鼓&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">架子鼓</a><a
              href="https://gz.meituan.com/xuexipeixun/c20318/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20318,&quot;index&quot;:&quot;14_1_6&quot;,&quot;title&quot;:&quot;声乐&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">声乐</a><a
              href="https://gz.meituan.com/xuexipeixun/c20319/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20319,&quot;index&quot;:&quot;14_1_7&quot;,&quot;title&quot;:&quot;其他音乐培训&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">其他音乐培训</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/xuexipeixun/c20291/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20291,&quot;index&quot;:&quot;14_2_0&quot;,&quot;title&quot;:&quot;职业技术&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">职业技术</a></h2><a
              href="https://gz.meituan.com/xuexipeixun/c20291/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20291,&quot;index&quot;:&quot;14_2_more&quot;,&quot;title&quot;:&quot;职业技术&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/xuexipeixun/c20323/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20323,&quot;index&quot;:&quot;14_2_1&quot;,&quot;title&quot;:&quot;美容化妆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">美容化妆</a><a
              href="https://gz.meituan.com/xuexipeixun/c20324/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20324,&quot;index&quot;:&quot;14_2_2&quot;,&quot;title&quot;:&quot;会计&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">会计</a><a
              href="https://gz.meituan.com/xuexipeixun/c20325/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20325,&quot;index&quot;:&quot;14_2_3&quot;,&quot;title&quot;:&quot;IT&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">IT</a><a
              href="https://gz.meituan.com/xuexipeixun/c20326/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20326,&quot;index&quot;:&quot;14_2_4&quot;,&quot;title&quot;:&quot;厨艺&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">厨艺</a><a
              href="https://gz.meituan.com/xuexipeixun/c20622/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20622,&quot;index&quot;:&quot;14_2_5&quot;,&quot;title&quot;:&quot;管理培训&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">管理培训</a><a
              href="https://gz.meituan.com/xuexipeixun/c20623/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20623,&quot;index&quot;:&quot;14_2_6&quot;,&quot;title&quot;:&quot;摄影培训&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">摄影培训</a><a
              href="https://gz.meituan.com/xuexipeixun/c20624/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20624,&quot;index&quot;:&quot;14_2_7&quot;,&quot;title&quot;:&quot;司法考试&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">司法考试</a><a
              href="https://gz.meituan.com/xuexipeixun/c20637/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20637,&quot;index&quot;:&quot;14_2_8&quot;,&quot;title&quot;:&quot;公务员培训&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">公务员培训</a><a
              href="https://gz.meituan.com/xuexipeixun/c20327/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20327,&quot;index&quot;:&quot;14_2_9&quot;,&quot;title&quot;:&quot;其他职业培训&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">其他职业培训</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/xuexipeixun/c20286/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20286,&quot;index&quot;:&quot;14_3_0&quot;,&quot;title&quot;:&quot;外语培训&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">外语培训</a></h2><a
              href="https://gz.meituan.com/xuexipeixun/c20286/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20286,&quot;index&quot;:&quot;14_3_more&quot;,&quot;title&quot;:&quot;外语培训&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/xuexipeixun/c20306/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20306,&quot;index&quot;:&quot;14_3_1&quot;,&quot;title&quot;:&quot;英语&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">英语</a><a
              href="https://gz.meituan.com/xuexipeixun/c20307/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20307,&quot;index&quot;:&quot;14_3_2&quot;,&quot;title&quot;:&quot;日语&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">日语</a><a
              href="https://gz.meituan.com/xuexipeixun/c20308/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20308,&quot;index&quot;:&quot;14_3_3&quot;,&quot;title&quot;:&quot;韩语&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">韩语</a><a
              href="https://gz.meituan.com/xuexipeixun/c20309/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20309,&quot;index&quot;:&quot;14_3_4&quot;,&quot;title&quot;:&quot;法语&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">法语</a><a
              href="https://gz.meituan.com/xuexipeixun/c20310/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20310,&quot;index&quot;:&quot;14_3_5&quot;,&quot;title&quot;:&quot;德语&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">德语</a><a
              href="https://gz.meituan.com/xuexipeixun/c20311/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20311,&quot;index&quot;:&quot;14_3_6&quot;,&quot;title&quot;:&quot;汉语&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">汉语</a><a
              href="https://gz.meituan.com/xuexipeixun/c20620/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20620,&quot;index&quot;:&quot;14_3_7&quot;,&quot;title&quot;:&quot;俄语&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">俄语</a><a
              href="https://gz.meituan.com/xuexipeixun/c20621/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20621,&quot;index&quot;:&quot;14_3_8&quot;,&quot;title&quot;:&quot;西班牙语&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">西班牙语</a><a
              href="https://gz.meituan.com/xuexipeixun/c20312/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20312,&quot;index&quot;:&quot;14_3_9&quot;,&quot;title&quot;:&quot;其他外语&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">其他外语</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/xuexipeixun/c20288/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20288,&quot;index&quot;:&quot;14_4_0&quot;,&quot;title&quot;:&quot;美术培训&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">美术培训</a></h2><a
              href="https://gz.meituan.com/xuexipeixun/c20288/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20288,&quot;index&quot;:&quot;14_4_more&quot;,&quot;title&quot;:&quot;美术培训&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/xuexipeixun/c20320/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20320,&quot;index&quot;:&quot;14_4_1&quot;,&quot;title&quot;:&quot;绘画&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">绘画</a><a
              href="https://gz.meituan.com/xuexipeixun/c20321/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20321,&quot;index&quot;:&quot;14_4_2&quot;,&quot;title&quot;:&quot;书法&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">书法</a><a
              href="https://gz.meituan.com/xuexipeixun/c20322/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20322,&quot;index&quot;:&quot;14_4_3&quot;,&quot;title&quot;:&quot;其他美术&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">其他美术</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/yiliao/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20274,&quot;index&quot;:&quot;15_1_0&quot;,&quot;title&quot;:&quot;医疗健康&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">医疗健康</a></h2><a
              href="https://gz.meituan.com/yiliao/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20274,&quot;index&quot;:&quot;15_1_more&quot;,&quot;title&quot;:&quot;医疗健康&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/yiliao/c20275/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20275,&quot;index&quot;:&quot;15_1_1&quot;,&quot;title&quot;:&quot;医院&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">医院</a><a
              href="https://gz.meituan.com/yiliao/c20276/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20276,&quot;index&quot;:&quot;15_1_2&quot;,&quot;title&quot;:&quot;齿科口腔&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">齿科口腔</a><a
              href="https://gz.meituan.com/yiliao/c20277/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20277,&quot;index&quot;:&quot;15_1_3&quot;,&quot;title&quot;:&quot;体检中心&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">体检中心</a><a
              href="https://gz.meituan.com/yiliao/c20278/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20278,&quot;index&quot;:&quot;15_1_4&quot;,&quot;title&quot;:&quot;药店&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">药店</a><a
              href="https://gz.meituan.com/yiliao/c20279/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20279,&quot;index&quot;:&quot;15_1_5&quot;,&quot;title&quot;:&quot;中医&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">中医</a><a
              href="https://gz.meituan.com/yiliao/c20280/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20280,&quot;index&quot;:&quot;15_1_6&quot;,&quot;title&quot;:&quot;其他健康服务&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">其他健康服务</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/aiche/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:27,&quot;index&quot;:&quot;15_2_0&quot;,&quot;title&quot;:&quot;爱车&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">爱车</a></h2><a
              href="https://gz.meituan.com/aiche/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:27,&quot;index&quot;:&quot;15_2_more&quot;,&quot;title&quot;:&quot;爱车&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/aiche/c20115/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20115,&quot;index&quot;:&quot;15_2_1&quot;,&quot;title&quot;:&quot;洗车&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">洗车</a><a
              href="https://gz.meituan.com/aiche/c20116/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20116,&quot;index&quot;:&quot;15_2_2&quot;,&quot;title&quot;:&quot;租车&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">租车</a><a
              href="https://gz.meituan.com/aiche/c20117/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20117,&quot;index&quot;:&quot;15_2_3&quot;,&quot;title&quot;:&quot;加油站&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">加油站</a><a
              href="https://gz.meituan.com/aiche/c20118/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20118,&quot;index&quot;:&quot;15_2_4&quot;,&quot;title&quot;:&quot;维修保养&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">维修保养</a><a
              href="https://gz.meituan.com/aiche/c20119/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20119,&quot;index&quot;:&quot;15_2_5&quot;,&quot;title&quot;:&quot;驾校&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">驾校</a><a
              href="https://gz.meituan.com/aiche/c20120/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20120,&quot;index&quot;:&quot;15_2_6&quot;,&quot;title&quot;:&quot;汽车美容&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">汽车美容</a><a
              href="https://gz.meituan.com/aiche/c20121/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20121,&quot;index&quot;:&quot;15_2_7&quot;,&quot;title&quot;:&quot;陪练&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">陪练</a><a
              href="https://gz.meituan.com/aiche/c20135/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20135,&quot;index&quot;:&quot;15_2_8&quot;,&quot;title&quot;:&quot;汽车用品&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">汽车用品</a><a
              href="https://gz.meituan.com/aiche/c20161/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20161,&quot;index&quot;:&quot;15_2_9&quot;,&quot;title&quot;:&quot;停车场&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">停车场</a><a
              href="https://gz.meituan.com/aiche/c20162/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20162,&quot;index&quot;:&quot;15_2_10&quot;,&quot;title&quot;:&quot;汽车保险&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">汽车保险</a><a
              href="https://gz.meituan.com/aiche/c20163/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20163,&quot;index&quot;:&quot;15_2_11&quot;,&quot;title&quot;:&quot;4S店/汽车销售&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">4S店/汽车销售</a><a
              href="https://gz.meituan.com/aiche/c20164/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20164,&quot;index&quot;:&quot;15_2_12&quot;,&quot;title&quot;:&quot;更多汽车服务&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">更多汽车服务</a><a
              href="https://gz.meituan.com/aiche/c20174/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20174,&quot;index&quot;:&quot;15_2_13&quot;,&quot;title&quot;:&quot;机油保养&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">机油保养</a><a
              href="https://gz.meituan.com/aiche/c20212/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20212,&quot;index&quot;:&quot;15_2_14&quot;,&quot;title&quot;:&quot;汽车报价&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">汽车报价</a><a
              href="https://gz.meituan.com/aiche/c20215/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20215,&quot;index&quot;:&quot;15_2_15&quot;,&quot;title&quot;:&quot;二手车&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">二手车</a><a
              href="https://gz.meituan.com/aiche/c20237/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20237,&quot;index&quot;:&quot;15_2_16&quot;,&quot;title&quot;:&quot;广告驾校&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">广告驾校</a><a
              href="https://gz.meituan.com/aiche/c20381/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20381,&quot;index&quot;:&quot;15_2_17&quot;,&quot;title&quot;:&quot;交警队&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">交警队</a><a
              href="https://gz.meituan.com/aiche/c20767/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20767,&quot;index&quot;:&quot;15_2_18&quot;,&quot;title&quot;:&quot;汽车改装&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">汽车改装</a><a
              href="https://gz.meituan.com/aiche/c20768/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20768,&quot;index&quot;:&quot;15_2_19&quot;,&quot;title&quot;:&quot;汽车配件&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">汽车配件</a></div>
        </div>
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/chongwu/c20691/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20691,&quot;index&quot;:&quot;15_3_0&quot;,&quot;title&quot;:&quot;宠物&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">宠物</a></h2><a
              href="https://gz.meituan.com/chongwu/c20691/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20691,&quot;index&quot;:&quot;15_3_more&quot;,&quot;title&quot;:&quot;宠物&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/chongwu/c25147/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:25147,&quot;index&quot;:&quot;15_3_1&quot;,&quot;title&quot;:&quot;宠物店&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">宠物店</a><a
              href="https://gz.meituan.com/chongwu/c25148/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:25148,&quot;index&quot;:&quot;15_3_2&quot;,&quot;title&quot;:&quot;宠物医院&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">宠物医院</a></div>
        </div>
      </div>
      <div class="category-nav-detail">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/xiuxianyule/"
                data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000002,&quot;index&quot;:&quot;16_1_0&quot;,&quot;title&quot;:&quot;玩乐&quot;}}"
                class="link detail-title" target="_blank" data-query="utm_source=meituanweb">玩乐</a></h2><a
              href="https://gz.meituan.com/xiuxianyule/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10000002,&quot;index&quot;:&quot;16_1_more&quot;,&quot;title&quot;:&quot;玩乐&quot;}}"
              class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content"><a href="https://gz.meituan.com/xiuxianyule/c10/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:10,&quot;index&quot;:&quot;16_1_1&quot;,&quot;title&quot;:&quot;KTV&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">KTV</a><a
              href="https://gz.meituan.com/xiuxianyule/c234/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:234,&quot;index&quot;:&quot;16_1_2&quot;,&quot;title&quot;:&quot;酒吧&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">酒吧</a><a
              href="https://gz.meituan.com/xiuxianyule/c230/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:230,&quot;index&quot;:&quot;16_1_3&quot;,&quot;title&quot;:&quot;密室逃脱&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">密室逃脱</a><a
              href="https://gz.meituan.com/xiuxianyule/c38/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:38,&quot;index&quot;:&quot;16_1_4&quot;,&quot;title&quot;:&quot;游乐游艺&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">游乐游艺</a><a
              href="https://gz.meituan.com/xiuxianyule/c20770/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20770,&quot;index&quot;:&quot;16_1_5&quot;,&quot;title&quot;:&quot;网吧网咖&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">网吧网咖</a><a
              href="https://gz.meituan.com/xiuxianyule/c20104/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20104,&quot;index&quot;:&quot;16_1_6&quot;,&quot;title&quot;:&quot;私人影院&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">私人影院</a><a
              href="https://gz.meituan.com/xiuxianyule/c218/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:218,&quot;index&quot;:&quot;16_1_7&quot;,&quot;title&quot;:&quot;DIY手工坊&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">DIY手工坊</a><a
              href="https://gz.meituan.com/xiuxianyule/c20777/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20777,&quot;index&quot;:&quot;16_1_8&quot;,&quot;title&quot;:&quot;桌面游戏&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">桌面游戏</a><a
              href="https://gz.meituan.com/xiuxianyule/c516/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:516,&quot;index&quot;:&quot;16_1_9&quot;,&quot;title&quot;:&quot;采摘/农家乐&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">采摘/农家乐</a><a
              href="https://gz.meituan.com/xiuxianyule/c20776/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20776,&quot;index&quot;:&quot;16_1_10&quot;,&quot;title&quot;:&quot;棋牌室&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">棋牌室</a><a
              href="https://gz.meituan.com/xiuxianyule/c20773/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20773,&quot;index&quot;:&quot;16_1_11&quot;,&quot;title&quot;:&quot;轰趴馆&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">轰趴馆</a><a
              href="https://gz.meituan.com/xiuxianyule/c219/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:219,&quot;index&quot;:&quot;16_1_12&quot;,&quot;title&quot;:&quot;真人CS&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">真人CS</a><a
              href="https://gz.meituan.com/xiuxianyule/c20779/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:20779,&quot;index&quot;:&quot;16_1_13&quot;,&quot;title&quot;:&quot;VR&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">VR</a><a
              href="https://gz.meituan.com/xiuxianyule/c26/"
              data-lab="{&quot;custom&quot;:{&quot;cat_id&quot;:26,&quot;index&quot;:&quot;16_1_14&quot;,&quot;title&quot;:&quot;其他玩乐&quot;}}"
              class="link detail-text" target="_blank" data-query="utm_source=meituanweb">其他玩乐</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let li_dom = this.$refs.categoryContent.querySelectorAll("li")
    for (let i = 0; i < li_dom.length; i++) {
      li_dom[i].onmouseenter = this.mouseEnter
      li_dom[i].onmouseleave = this.mouseLeave
    }
  },
  methods: {
    mouseEnter() {

    },
    mouseLeave() {

    }
  }
}
</script>

<style lang="less" scoped>
.category-nav-container {
  width: 230px;
  height: 475px;
  position: relative;
  text-align: left;
  box-sizing: border-box;
  float: left;
  margin-top: -50px;
  color: #646464;
  background: #FFF;
  box-sizing: border-box;
  border: 1px solid #E5E5E5;

  .category-nav-title-wrapper {
    height: 50px;
    padding-top: 15px;
    box-sizing: border-box;

    .category-nav-title {
      color: #222222;
      font-size: 16px;
      font-weight: 700;
      margin-left: 15px;
    }
  }

  .category-nav-content-wrapper {
    ul {
      padding: 10px 0 8px;
      height: 425px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .nav-li {
        position: relative;
        box-sizing: border-box;
        padding: 2px 12px;
        height: 26px;

        .nav-text-wrapper {
          display: inline-block;
          margin-left: 11px;

          .nav-text {
            font-size: 13px;
            line-height: 20px;
            height: 20px;
            color: #646464;
            cursor: pointer;
          }
        }

        .nav-right-arrow {
          width: 4px;
          height: 4px;
          color: #BFBFBF;
          border-bottom: 1px solid #BFBFBF;
          border-right: 1px solid #BFBFBF;
          transform: rotate(-45deg);
          display: block;
          position: absolute;
          right: 13px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }
    }
  }

  .category-nav-detail-wrapper {
    display: none;
    position: absolute;
    top: 60px;
    left: 230px;
    width: 400px;
    height: 416px;
    background-color: #fff;
    z-index: 199;
    color: #666;
    overflow: hidden;

    .category-nav-detail {
      display: none;

      &.active {
        display: block;
      }

      .detail-area {
        padding: 0 30px;

        .detail-title-wrapper {
          margin-top: 24px;
          height: 22px;
          line-height: 22px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e5e5e5;

          .detail-title {
            font-size: 16px;
            font-weight: 500;
            color: #222;
            cursor: pointer;
            float: left;
          }

          .detail-more {
            font-size: 12px;
            color: #999;
            font-weight: 400;
            float: right;
            margin-right: 6px;
            position: relative;
            cursor: pointer;

            .detail-right-arrow {
              width: 4px;
              height: 4px;
              border-bottom: 1px solid #999;
              border-right: 1px solid #999;
              transform: rotate(-45deg);
              display: block;
              position: absolute;
              top: 0;
              bottom: 0;
              right: -6px;
              margin: auto;
            }
          }
        }

        .detail-content {
          .detail-text {
            color: #999;
            font-size: 12px;
            line-height: 15px;
            display: inline-block;
            margin-right: 16px;
            margin-top: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>