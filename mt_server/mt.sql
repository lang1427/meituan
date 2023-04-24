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
  `cite_id` INT(11) NOT NULL,
  `img_url` VARCHAR(50) NOT NULL DEFAULT 'default.png',
  `longitude` VARCHAR(10) NOT NULL,
  `latitude` VARCHAR(10) NOT NULL,
  `phone` VARCHAR(15),
  `open_time` VARCHAR(20),
  `notice` VARCHAR(50),
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin;

CREATE TABLE mt_product(
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL DEFAULT '',
  `score` VARCHAR(5) NOT NULL DEFAULT '',
  `img_url` VARCHAR(50) NOT NULL,
  `lowPrice` VARCHAR(10) NOT NULL,
  `avgPrice` VARCHAR(10) NOT NULL,
  `commentNum` INT(11) NOT NULL DEFAULT 0,
  `category_id` INT(20) NOT NULL,
  `shop_id` INT(50) NOT NULL,
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin;

/* VARCHAR(255): Specified key was too long; max key length is 767 bytes */
CREATE TABLE mt_users(
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(32) NOT NULL,
  `iphone` VARCHAR(11) UNIQUE,
  `avatar` VARCHAR(200), 
  `birthday` DATE,
  `active` TINYINT NOT NULL DEFAULT 0,
  `create_time` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_bin;