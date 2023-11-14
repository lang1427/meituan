CREATE TABLE mt_category(
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL DEFAULT '',
  `cid` INT(11),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin;

CREATE TABLE mt_shop(
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL DEFAULT '',
  `address_desc` VARCHAR(100) NOT NULL DEFAULT '',
  `city_id` INT(11) NOT NULL,
  `img_url` VARCHAR(180) NOT NULL DEFAULT 'default.png',
  `longitude` VARCHAR(10) NOT NULL,
  `latitude` VARCHAR(10) NOT NULL,
  `phone` VARCHAR(15),
  `open_time` VARCHAR(100),
  `notice` VARCHAR(50),
  `type` INT(11) NOT NULL,
  `avgPrice` VARCHAR(10),
  `avgScore` VARCHAR(3),
  `commentNum` INT(11) NOT NULL DEFAULT 0,
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin;

CREATE TABLE mt_product(
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL DEFAULT '',
  `img_url` VARCHAR(180) NOT NULL,
  `price` VARCHAR(10) NOT NULL,
  `shop_id` INT(50) NOT NULL,
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin;

/* VARCHAR(255): Specified key was too long; max key length is 767 bytes */
CREATE TABLE mt_users(
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(64) NOT NULL,
  `slat` VARCHAR(16) NOT NULL,
  `grade` TINYINT NOT NULL DEFAULT 1,
  `iphone` VARCHAR(11) UNIQUE,
  `avatar` VARCHAR(200) DEFAULT "_nuxt/assets/images/lazyload_avatar.png", 
  `birthday` DATE,
  `active` TINYINT NOT NULL DEFAULT 0,
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin;

CREATE TABLE `subway` (
    `city_id` INT(11) NOT NULL,
    `line` VARCHAR(10) NOT NULL,
    `name` VARCHAR(10) NOT NULL,
    `longitude` VARCHAR(10) NOT NULL,
    `latitude` VARCHAR(10) NOT NULL,
    index(`city_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin;

CREATE TABLE `mt_lvyou` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL DEFAULT '',
  `address_desc` VARCHAR(100) NOT NULL DEFAULT '',
  `city_id` INT(11) NOT NULL,
  `img_url` VARCHAR(180) NOT NULL,
  `longitude` VARCHAR(10) NOT NULL,
  `latitude` VARCHAR(10) NOT NULL,
  `phone` VARCHAR(25),
  `open_time` VARCHAR(50),
  `introduction` VARCHAR(250),
  `consumers` VARCHAR(10) NOT NULL,
  `cateName` VARCHAR(10) NOT NULL,
  `avgPrice` VARCHAR(10),
  `avgScore` VARCHAR(3),
  `level` VARCHAR(10) NOT NULL,
  `areaName` VARCHAR(10),
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin;


CREATE TABLE `mt_maoyan` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `genre` VARCHAR(100) DEFAULT '' COMMENT '类型',
  `frt` VARCHAR(30) DEFAULT '' COMMENT '首次上映时间',
  `img` VARCHAR(180) NOT NULL COMMENT '图片',
  `src` VARCHAR(10) DEFAULT '' COMMENT '源国家',
  `score` FLOAT(2,1) DEFAULT 0 COMMENT '评分',
  `actor` VARCHAR(50) NOT NULL COMMENT '主演',
  `watch` INT(11) NOT NUll COMMENT '关注数',
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin;