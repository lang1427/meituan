CREATE TABLE mt_category(
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL DEFAULT '' COMMENT '分类名称',
  `cid` INT(11) COMMENT '子类 id',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin COMMENT '店铺分类表';

CREATE TABLE mt_shop(
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '店铺名称',
  `address_desc` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '店铺地址',
  `city_id` INT(11) NOT NULL,
  `img_url` VARCHAR(180) NOT NULL DEFAULT 'default.png' COMMENT '店铺头像',
  `longitude` VARCHAR(10) NOT NULL COMMENT '经度',
  `latitude` VARCHAR(10) NOT NULL COMMENT '纬度',
  `phone` VARCHAR(15) COMMENT '联系电话',
  `open_time` VARCHAR(100) COMMENT '营业时间',
  `notice` VARCHAR(50) COMMENT '公告',
  `type` INT(11) NOT NULL COMMENT '店铺分类',
  `avgPrice` VARCHAR(10) COMMENT '平均价位',
  `avgScore` VARCHAR(3) COMMENT '平均评分',
  `commentNum` INT(11) NOT NULL DEFAULT 0 COMMENT '评论数',
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin COMMENT '店铺表';

CREATE TABLE mt_product(
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '商品名称',
  `img_url` VARCHAR(180) NOT NULL COMMENT '商品图片',
  `price` VARCHAR(10) NOT NULL COMMENT '商品价格',
  `shop_id` INT(50) NOT NULL COMMENT '店铺 id',
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin COMMENT '店铺产品表';

/* VARCHAR(255): Specified key was too long; max key length is 767 bytes */
CREATE TABLE mt_users(
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL UNIQUE COMMENT '用户昵称',
  `email` VARCHAR(100) NOT NULL UNIQUE COMMENT '用户邮箱',
  `password` VARCHAR(64) NOT NULL COMMENT '用户密码',
  `slat` VARCHAR(16) NOT NULL COMMENT '盐值',
  `grade` TINYINT NOT NULL DEFAULT 1 COMMENT '密码等级 (1 弱 2中 3强)',
  `iphone` VARCHAR(11) UNIQUE COMMENT '用户手机号',
  `avatar` VARCHAR(200) DEFAULT "_nuxt/assets/images/lazyload_avatar.png" COMMENT '用户头像', 
  `birthday` DATE COMMENT '生日',
  `active` TINYINT NOT NULL DEFAULT 0 COMMENT '是否激活',
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin COMMENT '用户表';

CREATE TABLE `subway` (
    `city_id` INT(11) NOT NULL,
    `line` VARCHAR(10) NOT NULL COMMENT '线名',
    `name` VARCHAR(10) NOT NULL COMMENT '站名',
    `longitude` VARCHAR(10) NOT NULL COMMENT '经度',
    `latitude` VARCHAR(10) NOT NULL COMMENT '纬度',
    index(`city_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin COMMENT '地铁线路表';

CREATE TABLE `mt_lvyou` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL COMMENT '景点名称',
  `address_desc` VARCHAR(100) NOT NULL COMMENT '景点地址',
  `city_id` INT(11) NOT NULL,
  `img_url` VARCHAR(180) NOT NULL COMMENT '景点头像',
  `longitude` VARCHAR(10) NOT NULL COMMENT '经度',
  `latitude` VARCHAR(10) NOT NULL COMMENT '纬度',
  `phone` VARCHAR(25) COMMENT '联系电话',
  `open_time` VARCHAR(50) COMMENT '营业时间',
  `introduction` VARCHAR(250) COMMENT '介绍',
  `consumers` VARCHAR(10) NOT NULL COMMENT '消费人次',
  `cateName` VARCHAR(10) NOT NULL COMMENT '景点类型',
  `avgPrice` VARCHAR(10) COMMENT '平均价位',
  `avgScore` VARCHAR(3) COMMENT '平均评分',
  `level` VARCHAR(10) NOT NULL COMMENT '景点级别',
  `areaName` VARCHAR(10) COMMENT '区域名称、地铁站名称',
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin COMMENT '旅游景点表';


CREATE TABLE `mt_maoyan` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL COMMENT '电影名',
  `genre` VARCHAR(100) DEFAULT '' COMMENT '类型',
  `frt` VARCHAR(30) DEFAULT '' COMMENT '首次上映时间',
  `img` VARCHAR(180) NOT NULL COMMENT '图片',
  `src` VARCHAR(10) DEFAULT '' COMMENT '源国家',
  `score` FLOAT(2,1) DEFAULT 0 COMMENT '评分',
  `actor` VARCHAR(50) NOT NULL COMMENT '主演',
  `watch` INT(11) NOT NUll COMMENT '关注数',
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin COMMENT '猫眼电影表';

CREATE TABLE `mt_waimai` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '店铺名称',
  `city_id` INT(11) NOT NULL COMMENT '所在城市id',
  `img_url` VARCHAR(180) NOT NULL DEFAULT 'default.png' COMMENT '店铺图片',
  `address_desc` VARCHAR(100) DEFAULT '' COMMENT '店铺地址',
  `longitude` VARCHAR(10) NOT NULL COMMENT '店铺经纬度',
  `latitude` VARCHAR(10) NOT NULL,
  `open_time` VARCHAR(100) COMMENT '营业时间',
  `bulletin` VARCHAR(255) COMMENT '公告',
  `min_price` DECIMAL(10,2) DEFAULT 0 COMMENT '起送价',
  `shipping_fee` DECIMAL(10,2) DEFAULT 0 COMMENT '配送费',
  `score` DECIMAL(3,2) DEFAULT 0 COMMENT '评分',
  `commentNum` INT(11) NOT NULL DEFAULT 0 COMMENT '评论数',
  `create_time` INT(11) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin COMMENT '外卖店铺表';

CREATE TABLE `mt_waimai_food_spu_tags` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `waimai_id` BIGINT(20) NOT NULL COMMENT '外卖店铺id',
  `name` VARCHAR(50) NOT NULL COMMENT '商品标签名称',
  `index` TINYINT DEFAULT 0 COMMENT '排列顺序，从小到大排列',
  `create_time` INT(11) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin COMMENT '外卖商品标签表';

CREATE TABLE `mt_waimai_food_spu` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tag_id` BIGINT(20) NOT NULL COMMENT '外卖商品标签id',
  `name` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '商品名称',
  `img_url` VARCHAR(180) NOT NULL DEFAULT 'default.png' COMMENT '商品图片',
  `min_price` DECIMAL(10,2) DEFAULT 0 COMMENT '最低价',
  `unit` VARCHAR(10) DEFAULT '' COMMENT '单位',
  `description` VARCHAR(255) DEFAULT '' COMMENT '详细描述',
  `create_time` INT(11) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin COMMENT '外卖商品表';