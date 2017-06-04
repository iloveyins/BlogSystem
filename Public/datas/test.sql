DROP DATABASE IF EXISTS `flash_data`;
CREATE DATABASE IF NOT EXISTS `flash_data`;
use `flash_data`;
-- DROP TABLE IF EXISTS `think_datas`;
CREATE TABLE IF NOT EXISTS `think_datas`(
`id`int(8)unsigned NOT NULL AUTO_INCREMENT,
`data` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 ;
-- INSERT INTO `think_data`(`id`,`data`) VALUES
-- (1,'thinkphp'),
-- (2,'php'),
-- (3,'framework');
--
-- DROP TABLE IF EXISTS `blog_data`;
CREATE TABLE IF NOT EXISTS `blog_data`
(
    `id` INT(8) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` NVARCHAR(100) NOT NULL,
    `content` NVARCHAR(4000) NOT NULL,
    `createTime` DATETIME NOT NULL DEFAULT NOW()
) ENGINE=MYISAM  DEFAULT CHARSET=UTF8;
INSERT INTO `blog_data`(`title`,`content`) VALUES('kkk','你好');
SELECT * FROM `blog_data`;
