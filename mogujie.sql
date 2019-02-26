# Host: localhost  (Version: 5.5.53)
# Date: 2019-02-26 09:56:49
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` varchar(16) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('001',NULL,NULL,'83',NULL,'假发女长卷发大波浪网红可爱蓬松自然空气刘海梨花卷长发气质','img/1.png','148','588','76',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('002',NULL,NULL,'73',NULL,'假发女长卷大波浪韩国中分玉米烫蓬松自然奶奶灰长发网红假','img/2.png','99','394','69',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('003',NULL,NULL,'49',NULL,'现货2019新款春秋磨毛宽松中长款体恤内搭长袖t恤打底衫','img/3.png','84.29','2317','40',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('004',NULL,NULL,'49.9',NULL,'吊带小背心女夏季甜美小清新内搭学生露肚脐露','img/4.png','99.86','457','40',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('005',NULL,NULL,'65',NULL,'2019新款港风休闲秋长袖宽松上衣女','img/5.png','92.86','86','60',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('006',NULL,NULL,'49',NULL,'2018初秋新款韩版学生b原宿风,蝶结喇','img/6.png','84.29','2317','45',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('007',NULL,NULL,'78',NULL,'春季新款韩版原宿风宽松翻领学','img/7.png','111.43','650','75',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('008',NULL,NULL,'138.6',NULL,'新品ins超火V领荷叶边透视刺叭则下摆织带系带显瘦百搭','img/8.png','198','912','130',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('009',NULL,NULL,'69',NULL,'春装新款衬衫2019韩版chic大码女装长袖tV领衬衫女胖妹妹','img/9.png','121.43','1469','65',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('010',NULL,NULL,'89',NULL,'ins超火网红林姗姗同款宽松圆领1','img/10.png','127.15','7713','82',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('011',NULL,NULL,'35.5',NULL,'2019春季新款韩版chic小清新甜美E松气质挂脖羽毛波','img/11.png','99','650','32',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('012',NULL,NULL,'89.6',NULL,'2019春装娃娃领时尚衬衫女学生,韩版长袖宽松纯色灯芯绒网红很','img/12.png','128','2215','85',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('013',NULL,NULL,'56',NULL,'现货秒发]214ZKC冬新款韩版单排扣小翻领落肩袖纯色显瘦百','img/13.png','85','237','51',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('014',NULL,NULL,'45.8',NULL,'白衬衫女长袖2019春装新款韩范] ,宽松荷叶边衬衣短款蕾丝衫上衣','img/14.png','70.47','2191','41',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('015',NULL,NULL,'85.4',NULL,'气质型V领收腰泡泡袖衬衫2019春季新款OL通勤白色衬衣长袖','img/15.png','122','75','82',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('016',NULL,NULL,'68.99',NULL,'2018春季新款韩版牛仔外套女曳松显瘦上衣女装百搭破洞牛仔衣','img/17.png','98.57','15','62',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('017',NULL,NULL,'61',NULL,'秋冬大衣女2018韩版新款翻领休闲袖口拼色毛呢外套女学生宽松','img/16.png','99','543','53',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('018',NULL,NULL,'79',NULL,'复古黑白格子衬衫2018春季新款装韩范宽松版百搭上衣软妹格','img/18.png','120','4103','72',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('019',NULL,NULL,'69.5',NULL,'2018冬季新款韩版小清新百搭学方','img/19.png','120','95','65',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('020',NULL,NULL,'99',NULL,'很仙的白色短款球球貂绒毛女 8冬季新歡洋气','img/20.png','141','471','89',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(20) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
INSERT INTO `shoppingcart` VALUES ('18329715200','011',2);
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;

#
# Structure for table "userinfo"
#

DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `phone` varchar(20) NOT NULL DEFAULT '0',
  `username` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`phone`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "userinfo"
#

/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES ('12345678910','帅气的我','123456','abc@qq.com'),('15091634375','林静','123456789','649258864@qq.com'),('18329715200','赵治强','123456','723490032@qq.com'),('18700037111','二狗','zhaozhiqiang123','947300951@qq.com'),('18700037115','男神','456123','123@qq.com'),('28231521412','李四','123456','123@qq.com');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
