-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2019 at 01:43 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 5.6.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_babarihydraulic`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_author`
--

CREATE TABLE `blog_author` (
  `blog_author_id` int(11) NOT NULL,
  `blog_author_username` varchar(50) NOT NULL,
  `blog_author_name` varchar(50) NOT NULL,
  `blog_author_password` varchar(50) DEFAULT NULL,
  `blog_author_description` varchar(500) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blog_author`
--

INSERT INTO `blog_author` (`blog_author_id`, `blog_author_username`, `blog_author_name`, `blog_author_password`, `blog_author_description`, `status`) VALUES
(2, 'babari', 'Babari', '123456', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `blog_category`
--

CREATE TABLE `blog_category` (
  `blog_cat_id` int(11) NOT NULL,
  `blog_cat_name` varchar(255) NOT NULL,
  `blog_cat_slug` varchar(255) NOT NULL,
  `blog_parent_cat_id` int(11) NOT NULL DEFAULT '0',
  `blog_cat_order` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blog_category`
--

INSERT INTO `blog_category` (`blog_cat_id`, `blog_cat_name`, `blog_cat_slug`, `blog_parent_cat_id`, `blog_cat_order`, `status`) VALUES
(1, 'Cat 1', 'cat-1', 0, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `blog_category_post`
--

CREATE TABLE `blog_category_post` (
  `blog_cat_post_id` int(11) NOT NULL,
  `blog_cat_id` int(11) NOT NULL,
  `blog_post_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `blog_comment`
--

CREATE TABLE `blog_comment` (
  `blog_comment_id` int(11) NOT NULL,
  `blog_comment` varchar(5000) NOT NULL,
  `blog_post_id` int(11) NOT NULL,
  `blog_author_id` int(11) DEFAULT NULL,
  `commenter_name` varchar(300) DEFAULT NULL,
  `commener_image_url` varchar(300) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `blog_post`
--

CREATE TABLE `blog_post` (
  `blog_post_id` int(11) NOT NULL,
  `blog_post_title` varchar(500) NOT NULL,
  `blog_post_slug` varchar(500) NOT NULL,
  `blog_author_id` int(11) NOT NULL,
  `blog_post_date` varchar(50) DEFAULT NULL,
  `blog_post_content` longtext NOT NULL,
  `blog_post_short_content` varchar(500) NOT NULL,
  `blog_post_featured_image` varchar(100) NOT NULL,
  `blog_post_thumbnail_image` varchar(500) DEFAULT NULL,
  `blog_post_order` int(11) DEFAULT NULL,
  `blog_post_create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `blog_tag`
--

CREATE TABLE `blog_tag` (
  `blog_tag_id` int(11) NOT NULL,
  `blog_tag_name` varchar(255) NOT NULL,
  `blog_tag_slug` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `blog_tag_post`
--

CREATE TABLE `blog_tag_post` (
  `blog_tag_post_id` int(11) NOT NULL,
  `blog_tag_id` int(11) NOT NULL,
  `blog_post_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `business_email`
--

CREATE TABLE `business_email` (
  `business_email_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `catalog`
--

CREATE TABLE `catalog` (
  `catalog_id` int(11) NOT NULL,
  `catalog_title` varchar(255) DEFAULT NULL,
  `catalog_description` varchar(500) DEFAULT NULL,
  `catalog` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `catalog`
--

INSERT INTO `catalog` (`catalog_id`, `catalog_title`, `catalog_description`, `catalog`) VALUES
(1, 'Catelog', '<p><strong>NEW CATELOG</strong></p>\r\n', 'Catelog_aFsgK1dt3i.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(255) DEFAULT NULL,
  `cat_slug` varchar(50) NOT NULL,
  `parent_cat_id` int(11) NOT NULL DEFAULT '0',
  `cat_order` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat_name`, `cat_slug`, `parent_cat_id`, `cat_order`, `status`) VALUES
(2, 'Pu', 'pu', 0, NULL, 1),
(3, 'Rubber', 'rubber', 0, NULL, 1),
(4, 'Other', 'other', 0, NULL, 1),
(5, 'SEAL KIT', 'seal-kit', 0, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `client_id` int(11) NOT NULL,
  `client_name` varchar(255) DEFAULT NULL,
  `client_email` varchar(255) DEFAULT NULL,
  `client_provider` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `value` varchar(500) DEFAULT NULL,
  `type` varchar(100) DEFAULT 'text',
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_id`, `name`, `value`, `type`, `status`) VALUES
(1, 'company_name', 'BABARI HYDRAULIC SOLUTION', 'text', 1),
(2, 'tagline', 'BABARI HYDRAULIC SOLUTION', 'text', 1),
(3, 'office1', '', 'text', 1),
(4, 'office2', '', 'text', 1),
(5, 'email1', 'babariseals@gmail.com', 'text', 1),
(6, 'email2', '', 'text', 1),
(7, 'address1', '\"VRAJ-DHAM APPARTMENT\"\r\nNEAR-SWAMINARAYAN CHOWK,\r\nRAJKOT-360004', 'textarea', 1),
(8, 'address2', 'MILAN PARK', 'textarea', 1),
(9, 'mobile1', '+91 9978986444', 'text', 1),
(10, 'mobile2', '+91 9408938830', 'text', 1),
(11, 'facebook_link', '#', 'text', 1),
(12, 'twitter_link', '#', 'text', 1),
(13, 'google_plus_link', '#', 'text', 1),
(14, 'instagram_link', '#https://www.instagram.com/babari4606/?hl=en', 'text', 1),
(15, 'youtube_link', '', 'text', 1),
(16, 'linkedin_link', '', 'text', 1),
(17, 'website1', '#', 'text', 1),
(18, 'website2', '', 'text', 1),
(19, 'whatsapp_no', '9408938830', 'text', 1);

-- --------------------------------------------------------

--
-- Table structure for table `image_gallery`
--

CREATE TABLE `image_gallery` (
  `image_id` int(11) NOT NULL,
  `image_name` varchar(500) NOT NULL,
  `image_original_name` varchar(500) DEFAULT NULL,
  `ext` varchar(50) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `inquiry`
--

CREATE TABLE `inquiry` (
  `inquiry_id` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `inquiry` longtext,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inquiry`
--

INSERT INTO `inquiry` (`inquiry_id`, `date`, `inquiry`, `name`, `phone`, `email`) VALUES
(1, '2019-06-25 22:11:06', NULL, NULL, NULL, NULL),
(2, '2019-07-06 16:30:03', 'asd', 'asdasd', 'asdas', 'asd@asd'),
(3, '2019-07-06 17:10:20', 'gb', 'frf', '55', 'frfr@gg.gg');

-- --------------------------------------------------------

--
-- Table structure for table `mail`
--

CREATE TABLE `mail` (
  `mail_id` int(11) NOT NULL,
  `timestamp` varchar(500) DEFAULT NULL,
  `token` varchar(500) DEFAULT NULL,
  `signature` varchar(5000) DEFAULT NULL,
  `domain` varchar(50) DEFAULT NULL,
  `From_gj` varchar(2500) DEFAULT NULL,
  `X-Envelope-From` varchar(2500) DEFAULT NULL,
  `X-Google-Dkim-Signature` varchar(2500) DEFAULT NULL,
  `To_gj` varchar(2500) DEFAULT NULL,
  `Dkim-Signature` varchar(2500) DEFAULT NULL,
  `subject` varchar(500) DEFAULT NULL,
  `X-Received` varchar(500) DEFAULT NULL,
  `Date` varchar(500) DEFAULT NULL,
  `Message-Id` varchar(500) DEFAULT NULL,
  `Mime-Version` varchar(20) DEFAULT NULL,
  `Received` varchar(5000) DEFAULT NULL,
  `message-url` varchar(5000) DEFAULT NULL,
  `recipient` varchar(5000) DEFAULT NULL,
  `sender` varchar(5000) DEFAULT NULL,
  `X-Mailgun-Incoming` varchar(5000) DEFAULT NULL,
  `X-Gm-Message-State` varchar(5000) DEFAULT NULL,
  `Content-Type` varchar(5000) DEFAULT NULL,
  `X-Google-Smtp-Source` varchar(5000) DEFAULT NULL,
  `message-headers` longblob,
  `body-plain` longblob,
  `body-html` longblob,
  `stripped-html` longtext,
  `stripped-text` longtext,
  `stripped-signature` varchar(2500) DEFAULT NULL,
  `In-Reply-To` varchar(500) DEFAULT NULL,
  `References` longtext,
  `attachments` longtext,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mail_sent`
--

CREATE TABLE `mail_sent` (
  `mail_sent_id` int(11) NOT NULL,
  `from_email` varchar(500) DEFAULT NULL,
  `to_email` varchar(500) DEFAULT NULL,
  `cc_email` varchar(500) DEFAULT NULL,
  `bcc_email` varchar(500) DEFAULT NULL,
  `subject` varchar(500) DEFAULT NULL,
  `mail_description` longblob,
  `attachments` longtext,
  `Date` datetime DEFAULT CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `page_slug`
--

CREATE TABLE `page_slug` (
  `page_slug_id` int(11) NOT NULL,
  `page_slug` varchar(50) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

CREATE TABLE `partner` (
  `partner_id` int(11) NOT NULL,
  `partner_name` varchar(500) NOT NULL,
  `partner_slug` varchar(500) DEFAULT NULL,
  `partner_logo` varchar(500) DEFAULT NULL,
  `partner_order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `partner`
--

INSERT INTO `partner` (`partner_id`, `partner_name`, `partner_slug`, `partner_logo`, `partner_order`) VALUES
(1, 'TRAXLE', NULL, 'TRAXLE_NqCd5zvHuy.png', 3),
(2, 'NANDI', NULL, 'NANDI_aDpF1dICix.png', 1),
(3, 'PRIME LIFE', NULL, 'PRIME_LIFE_vStylFCiEx.png', 2);

-- --------------------------------------------------------

--
-- Table structure for table `process`
--

CREATE TABLE `process` (
  `process_id` int(11) NOT NULL,
  `process_name` varchar(200) NOT NULL,
  `process_description` longtext NOT NULL,
  `process_image` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `product_slug` varchar(50) NOT NULL,
  `product_description` longtext NOT NULL,
  `product_order` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `cat_id`, `product_name`, `product_slug`, `product_description`, `product_order`, `status`) VALUES
(4, 3, 'EPDM BRINE SEAL', 'epdm-brine-seal', '<p><strong>EPDM BRINE SEAL</strong></p>\r\n', NULL, 1),
(6, 4, 'SPG SEAL', 'spg-seal', '<p><strong>SPG SEAL</strong></p>\r\n\r\n<p>SPG is a two piece double-acting sealing set which consists of one special mixture PTFE profile ring and an O-ring as energizing element.</p>\r\n\r\n<p><strong>PRODUCT ADVANTAGES</strong></p>\r\n\r\n<ul>\r\n	<li>Able to use at high pressures and low peripheral speeds</li>\r\n	<li>Low friction , free of stick-slip</li>\r\n	<li>Simple groove design and low axial housing heights</li>\r\n	<li>Long service life</li>\r\n	<li>High sliding speed</li>\r\n	<li>Wide range of temperature and chemicals depending on the o-ring material</li>\r\n	<li>Minimum static and dynamic friction coefficient for a minimum energy loss and operating temperature</li>\r\n</ul>\r\n', NULL, 1),
(7, 4, 'PISTON SEAL - OK TYPE', 'pistion-seal-okt-ype', '<p><strong>PISTION SEAL - OK TYPE</strong></p>\r\n\r\n<p>OK Profile, High Pressure Split Cap Piston Seal The OK profile is a bi-directional piston seal designed for heavy duty hydraulic applications. Its durable, two-piece design installs easily onto a solid piston without the necessity of auxiliary tools. When installed into the bore, the diameter of the OK profile is compressed to close the step cut in the cap to provide excellent, drift free sealing performance. The glass-filled nylon sealing surface handles the toughest applications. It will resist shock loads, wear, contamination, and will resist extrusion or chipping when passing over cylinder ports. The rectangular nitrile energizer ring ensures resistance to compression set to increase seal life. The OK profile is sold only as an assembly. See part number nomenclature.&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n', NULL, 1),
(8, 3, 'OIL SEAL', 'rubber-pinion-seal', '<p>&nbsp;</p>\r\n\r\n<p>The function of the&nbsp;<strong>oil seal</strong>&nbsp;is to stop whatever fluid is inside from leaking out the clearance between the shaft and housing. The&nbsp;<strong>seal</strong>&nbsp;may also be used to prevent outside materials, such as dirt, from moving in through the clearance.&nbsp;&nbsp;</p>\r\n\r\n<p>ADVANTAGES&nbsp;</p>\r\n\r\n<p>Good temperature resistance.<br />\r\nCommonly chosen as high temperature replacement for Nitrile or Polyacrylate&nbsp;&nbsp;</p>\r\n\r\n<p>Polymerised acrylic acidesters or PA and ACM.<br />\r\nGood resistance to mineral oil, hypoid gear oil E.P. additive, greases, aging and flex cracking.&nbsp;&nbsp;</p>\r\n\r\n<p>Commonly referred to as Buna-N or NBR and is copolymer of Butadiene and Acryonitrile.<br />\r\nGood resistance to petroleum oils, water, silicone oil, greases, glycol base fluids.<br />\r\nGood abrasion resistance, cold flow, tear resistance.&nbsp;</p>\r\n\r\n<p>Broad temperature range.</p>\r\n\r\n<p>Good ozone resistance</p>\r\n\r\n<p>Resistant to compression set.&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n', NULL, 1),
(9, 4, 'OHM SEAL', 'ohm-seal', '<p><strong>OHM SEAL</strong></p>\r\n\r\n<p>&nbsp;1&gt;Excellent performance of sliding ,no crawling effect.<br />\r\n<br />\r\n&nbsp;2&gt;Good dynamic and static sealing.</p>\r\n\r\n<p>&nbsp;3&gt;High abrasion,long service life.</p>\r\n\r\n<p><br />\r\n&nbsp;4&gt;Wide using temperature range,high chemical stability</p>\r\n\r\n<p>(It depends on the material of O-ring).</p>\r\n\r\n<p><br />\r\n&nbsp;5&gt;Simple and convenient installation.</p>\r\n', NULL, 1),
(10, 3, 'O-RING', 'o-ring', '<p><strong>FLASH LESS IMPORTED O-RING</strong></p>\r\n\r\n<p>Since the O-rings are cheap and simple sealing elements they have a wide application area in hydraulic and pneumatic systems. In case of providing suitable working conditions and equipments, they can be used both in static and dynamic applications. Because they occupy less space and provide two sided sealing compared with other sealing elements, O-rings enable easy designs. Having good results from O-ring applications is up to suitable measurements, choosing correct material, and proper surface quality of metal parts.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>STATIC SEALING</strong></p>\r\n\r\n<p>If there is no permissible gap in static applications, for O-rings there is no certain pressure limit to resist against. But, it is required that tolerances should be chosen correctly and xing screws should not create any gaps by extending in high pressures.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>DYNAMIC SEALING</strong></p>\r\n\r\n<p>They are used in low dynamic pressures and similar others like pneumatic cylinders or valve spool.</p>\r\n\r\n<p><strong>SURFACE ROUGHNESS</strong></p>\r\n\r\n<p>The other two most important factors in dynamic and static sealings are housing and the surface quality worked on.<br />\r\nFor dynamic applications, a better surface quality is required compared with static ones.</p>\r\n\r\n<p>&nbsp;</p>\r\n', NULL, 1),
(11, 2, 'IDI SEAL', 'idi-seal', '<p>IDI SEAL is a single acting rod seal designed to have inner lip shorterthan the outer lip and additional sealing lip which improves theleakage behavior and , at the same time , prevents the entry ofcontaminations from the wiper side.</p>\r\n\r\n<p><strong>PRODUCT ADVANTAGES</strong><br />\r\n&bull; Superior sealing effect with the secondary lip<br />\r\n&bull; Low axial housing heights<br />\r\n&bull; Secondary sealing lip provides extra protection against theingress of dirt particles<br />\r\n&bull; Easy assembly into closed grooves<br />\r\n&bull; Good sealing performance even at low pressures<br />\r\n&bull; Wide range of dimensions</p>\r\n\r\n<p><strong>INSTALLATION</strong><br />\r\nEasily assembled into closed grooves according to the minimum diameter values that are given in the below table. Open grooves or special assembly tools should be used for the values that are outside this table. Before installation the sealing element must be oiled with system oil.</p>\r\n', NULL, 1),
(12, 4, 'KZT', 'kzt', '<p><strong>KZT BRONZE</strong></p>\r\n\r\n<p>KZT Type Contami Seal is used for moving piston and rod in cylinder. With good guide effect,it&nbsp;can absorb radial force anytime,prevent metal-to-metal contact in the cylinder,and reduce the friction.&nbsp;</p>\r\n', NULL, 1),
(13, 4, 'SPGO-D-SEAL', 'spgo-d-seal', '<p><strong>D-SEAL&nbsp; SPGO O-IMPORTED</strong></p>\r\n\r\n<p>SPGO is a standard compact seal for wide application.Same properties with SPG.&nbsp;&nbsp;</p>\r\n', NULL, 1),
(14, 3, 'RUBBER PTA', 'rubber-pta', '<p><strong>RUBBER BELT</strong></p>\r\n', NULL, 1),
(15, 5, 'JCB SEAL KIT', 'jcb-seal-kit', '<p><strong>BHS JCB SEAL KIT</strong></p>\r\n', NULL, 1),
(17, 2, 'PU SEAL', 'pu-seal', '<p>PU Seals&nbsp;Polyurethane&nbsp;is an excellent material with high abrasion resistance characteristics and high tensile strength.Polyurethane&nbsp;oil&nbsp;seals&nbsp;are used in high pressure hydraulic systems where highly stressed parts are subject to wear. These&nbsp;seals&nbsp;are resistant to petroleum oils and hydraulic oils.&nbsp;&nbsp;</p>\r\n', NULL, 1),
(18, 2, 'BHS ROD SEAL', 'rod-seal', '<p>BHS ROD is a single acting piston - rod seal and designed to have symmetrical lips in order to be used both for rod and piston applications.</p>\r\n\r\n<p>Rod and buffer seals maintain sealing contact in sliding motion between the cylinder head and the piston rod. Depending on the application, a rod sealing system can consist of a rod seal and a buffer seal or a rod seal only Rod sealing systems for heavy duty applications typically consist of a combination of both seal types, whereas the buffer seal is arranged between the rod seal and the piston in the cylinder head. Rod seals determine the tolerance for the rod diameterd.&nbsp;</p>\r\n\r\n<p>In addition to the sealing function, rod seals also provide a thin lubrication film on the piston rod that lubricates themselves and the wiper seals. The lubricant also inhibits corrosion of the piston rod surface. However, the lubrication film must be thin enough so that it returns to the cylinder during the return stroke.</p>\r\n\r\n<p><strong>PRODUCT ADVANTAGES&nbsp;</strong><br />\r\n&bull; Superior static and dynamic sealing eff&shy;ect<br />\r\n&bull; Wide range of dimensions<br />\r\n&bull; Easy assembly into closed grooves<br />\r\n&bull; Simple groove design<br />\r\n&bull; Economical sealing solution</p>\r\n\r\n<p><strong>INSTALLATION</strong><br />\r\nEasily assembled into closed grooves according to the minimum diameter values that are given in the below table. Open grooves or special assembly tools should be used for the values that are outside this table. It is very important that the assembly tools must be of soft material and have no sharp edges. Before installation the wiper must be oiled with system oil.</p>\r\n', NULL, 1),
(19, 4, 'KDAS PISTON SEAL', 'kdas-piston-seal', '<p>DAS&nbsp;Seal is a double-acting seal and guide element comprising of a rubber seal, two split support rings and two split bearings, located either side of the seal. The profile seal ring seals in both the static and dynamic range whilst the backup rings prevent extrusion into the sealing gap. The function of the guide rings is to guide the piston in the cylinder tube and to absorb transverse forces. The design provides a compact seal and guide combination for a closed or split installation groove. It is a combination seals used in hydraulic applications as well as some heavy industries. The nitrile rubber seal has proved itself to be extremely wear resistant in service. It is designed to be compressed by the housing to ensure a low pressure seal and when pressurised be protected from extrusion damage by the extending lips of the support ring. A tough flexible polymer is used for the support ring which is scarf cut for assembly and to protect the seal from damage. This type is characterized by a Z-shaped back-up ring which forms a chamber with the elastomer seal ring on the inside and is centered on the outside by the guide ring.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>INSTALLATION</strong><br />\r\nEasily assembled into one-piece piston because the back-up rings and guide rings are been produced in split forms. It is very important that the assembly tools must be of soft material and have no sharp edges. Before installation the sealing element must be oiled with system oil.</p>\r\n\r\n<p>&nbsp;five piece double acting compact seal which consists of one elastomeric nitrile rubber sealing element , two polyester elastomer back-up rings on both sides to prevent extrusion into the sealing gap and two special profiled guide rings produced from thermoplastic to absorb transverse forces.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>PRODUCT ADVANTAGES</strong><br />\r\n&bull; Superior sealing performance<br />\r\n&bull; Economic sealing and guiding solution<br />\r\n&bull; Simple groove design , one-piece piston possible<br />\r\n&bull; Long service life<br />\r\n&bull; Simple snap installation</p>\r\n', NULL, 1),
(20, 4, 'BRT', 'brt', '<p><strong>BRT-PTFE+BRONZE</strong></p>\r\n\r\n<h3>&nbsp;</h3>\r\n\r\n<h3><strong>STANDARD BACK UP RING</strong></h3>\r\n\r\n<p>Used primarily as an anti-extrusion device, standard back-up rings are used in both static and dynamic sealing. Made of materials that are resistant to pressure induced flow, the back-up ring keeps a seal from&nbsp;extruding into the clearance gap between mating parts.</p>\r\n\r\n<h3>&nbsp;</h3>\r\n\r\n<h3><strong>CONTOURED BACK-UP RING</strong></h3>\r\n\r\n<p>Contoured back-up rings are anti-extrusion devices used in both static and dynamic sealing environments. They&rsquo;re also useful when mating part clearances are not tightly controlled. In either case, they can extend the useful life of O-Rings. Contoured back-up rings have a slightly concave face on one side, providing uniform contact with the entire diameter of the O-Rings they are used with. Sizes correspond with AS568 O-Rings. Whenever possible, the use of two back-up rings is recommended, even in single-acting applications.</p>\r\n\r\n<p>Stock material is 90 durometer nitrile. The temperature range is -40&deg;F to +250&deg;F</p>\r\n', NULL, 1),
(21, 3, 'CHEVRON PACKING', 'chevron-packing', '<p>Chevron Packing&nbsp;is a three piece single acting chevron seal which consists ofone thermoplastic header ring , one special formulated reinforcedcotton fabric with nitrile rubber sealing element and one PTFEback-up ring.&nbsp;</p>\r\n\r\n<p><strong>PRODUCT ADVANTAGES</strong><br />\r\n&bull; Capable of standing pressure changes<br />\r\n&bull; Long service life<br />\r\n&bull; Works in water and water-oil mixture media</p>\r\n\r\n<p>&bull; Easy installation</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>INSTALLATION</strong><br />\r\nK151 chevron seal is used in open housing. It is very important that the assembly tools must be of soft material and have no sharp edges. Before installation the sealing element must be oiled with system oil.<br />\r\n<br />\r\n<strong>NOTES</strong></p>\r\n\r\n<p>Due to the special formulated reinforced cotton fabric with nitrile rubber service life is much longer than the normal cotton fabric seals.&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n', NULL, 1),
(22, 4, 'WEAR RING', 'wear-ring', '<p><strong>WEAR-RING IMPORTED QUALITY</strong></p>\r\n\r\n<p>The guide ring or wear ring guides a hydraulic cylinder piston and rod and absorbs lateral forces. Metal to metal contact between the moving parts of the cylinder, for instance between the piston and the cylinder or the rod and the cylinder head. The advantages of these non-metallic guide rings (compared with traditional metal guide rings) are, among others, a high bearing load capacity, the elimination of local stress concentrations, wear resistance, a low coefficient of friction and low maintenance costs.&nbsp;&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3><strong>Advantages</strong>&nbsp;</h3>\r\n\r\n<ol>\r\n	<li>The tapes can be supplied either cut to length or by the meter, to be cut according to requirement.</li>\r\n	<li>High load capacity (compressive strength), low wear and reduced friction due to an additive of carbon to the PTFE material.</li>\r\n	<li>No tendency to stick-slip in the case of low sliding speed.</li>\r\n	<li>Available in practical dimensions.</li>\r\n	<li>Simple groove designs.</li>\r\n	<li>Simple piston designs without metallic contact of the sliding surfaces.</li>\r\n	<li>Profile geometry which is exactly suited to work in lubricated air as well as dry and oil-free air.</li>\r\n</ol>\r\n', NULL, 1),
(23, 3, 'O-RING BOX', 'o-ring-box', '<p><strong>O-RING BOX-EXCAVATOR ALL MACHINERY</strong></p>\r\n', NULL, 1),
(24, 4, 'SPGW PISTON SEAL', 'spgw-piston-seal', '<p>SPGW heavy duty piston seals are designed for double acting hydraulic cylinders used in heavy duty applications. They consist of PTFE ring, 2 POM support ring and NBR pressure ring. Some advantages are its simple design, high linear velocity values, non-bonding property on the surface in long static cases, low friction, wider permissible gaps and long life service. Therefore, SPGW is very suitable for heavy duty applications.&nbsp;</p>\r\n\r\n<p><strong>Technical Data</strong>&nbsp; &nbsp; &nbsp;&nbsp;<br />\r\nPressure: 400 Bar&nbsp; &nbsp; &nbsp;&nbsp;<br />\r\nTemperature: with NBR Square-ring: -35 to +105&nbsp; &nbsp; &nbsp;<br />\r\nSpeed: 1.5m/s&nbsp; &nbsp; &nbsp; &nbsp;<br />\r\nMedia: Hydraulic oils (mineral oil-based)&nbsp; &nbsp; &nbsp; &nbsp;<br />\r\n&nbsp; &nbsp; &nbsp;&nbsp;<br />\r\n<strong>Material</strong>&nbsp; &nbsp; &nbsp;&nbsp;<br />\r\nMaterial: Profile seal: PTFE with Bronze / Back-up ring: POM / Pressure ring: NBR&nbsp; &nbsp; &nbsp;&nbsp;<br />\r\nColor: Profile seal: Green/Brown / Back-up ring: Black / Pressure ring: Black&nbsp; &nbsp; &nbsp;&nbsp;<br />\r\n&nbsp; &nbsp; &nbsp;&nbsp;<br />\r\n<strong>Advantages</strong>&nbsp; &nbsp; &nbsp;&nbsp;<br />\r\nHigh sliding speed&nbsp; &nbsp; &nbsp;&nbsp;<br />\r\nLow friction, free of stick-slip&nbsp; &nbsp; &nbsp;&nbsp;<br />\r\nSimple groove design&nbsp; &nbsp; &nbsp;&nbsp;<br />\r\nIncrease clearance possible&nbsp; &nbsp;</p>\r\n\r\n<p><strong>Features:</strong></p>\r\n\r\n<ul>\r\n	<li>Sturdiness</li>\r\n	<li>Durability</li>\r\n	<li>Easy installation</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n', NULL, 1),
(25, 3, 'RUBBER PISTON SEAL', 'rubber-piston-seal', '<p><strong>HYDRAULIC JACK RUBBER SEAL</strong></p>\r\n', NULL, 1),
(26, 4, 'STEP SEAL', 'step-seal', '<p><strong>STEP SEAL</strong></p>\r\n\r\n<p>It has a special filled PTFE ring with a pre-loaded lip energised by an O ring. The lip is designed to have a contact area with the rod adequate to retain the media at low pressure. As high pressure acts on the O ring it compresses the lip against the rod increasing the contact area and the effectiveness of the seal.</p>\r\n\r\n<p>The special PTFE ring has the low frictional properties normally associated with this material but is strengthened by additives to reduce creep. It has a low breakout friction so stick-slip is eliminated.</p>\r\n\r\n<p>Standard seals are supplied with a nitrile O ring but other materials can be provided. For the best results it is recommended two seals are fitted. The PTFE ring should always be mounted with the sealing lip on the pressure side. A number of material options can be provided to extend operating conditions. Characteristics:</p>\r\n\r\n<p>A PTFE step seal and an O-ring used as an energizer can be used in high pressures up to 500bar and for reciprocating motion up to 15 m/s. Temperature range is -50&deg; C to +200&deg; C (depending on the components used for O-ring). Since the PTFE is filled with Bronze or Carbon, the abrasion resistance property is very high.&nbsp;&nbsp;</p>\r\n\r\n<p><br />\r\n<strong>Advantages:</strong></p>\r\n\r\n<ul>\r\n	<li>Ultra low friction</li>\r\n	<li>Compact housing</li>\r\n</ul>\r\n', NULL, 1),
(27, 4, 'DA SEAL', 'da-seal', '<p><strong>DA SEAL</strong></p>\r\n', NULL, 1),
(28, 4, 'GUIDE RING', 'gide-ring', '<p><strong>GUIDE RING</strong></p>\r\n\r\n<p>In hydraulic cylinders the most commonly used guides are guide rings and guide strips. They accommodate radial loads of forces acting on the cylinder assembly and guide the rod in the cylinder head as well as the piston in the cylinder bore&nbsp;&nbsp;&nbsp;</p>\r\n\r\n<p>Guides are made of polymer materials and prevent metal-to-metal contact between moving parts in a working hydraulic cylinder. Compared to metal guides, polymer guides provide the following advantages in hydraulic cylinders:</p>\r\n\r\n<ul>\r\n	<li>1.significantly longer service life</li>\r\n	<li><a href=\"http://2.work/\" target=\"_blank\">2.work</a>&nbsp;more smoothly against the cylinder bore and the sealing surfaces</li>\r\n	<li>3.avoid wear of cylinder surfaces despite the presence of contamination&nbsp; &nbsp; &nbsp; &nbsp;particles</li>\r\n	<li>4.high resistance to insufficient lubrication at low speeds</li>\r\n</ul>\r\n', NULL, 1),
(29, 4, 'DIAPHRAGM BREAKER', 'diaphragm', '<p><strong>BREAKER</strong></p>\r\n', NULL, 1),
(30, 5, 'EXCAVATRO SEAL KIT', 'excavator-seal-kit', '<p><strong>EXCAVATOR SEAL KIT</strong></p>\r\n', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `product_image_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_image_name` varchar(500) NOT NULL,
  `product_image_order` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_image`
--

INSERT INTO `product_image` (`product_image_id`, `product_id`, `product_image_name`, `product_image_order`, `status`) VALUES
(1, 3, 'p1_74JYSav0zQ.png', 2, 1),
(2, 3, 'p1_ZaUKYrAIC1.png', 1, 1),
(3, 4, 'EPDM_BRINE_SEAL_Fhxazl3Auo.png', 0, 1),
(4, 5, 'RUBBER_SEAL_eBUWAP4DGX.png', 0, 1),
(5, 6, 'SPG_SEAL_afZv8Fo46w.png', 0, 1),
(6, 7, 'PISTON_SEAL_OK_TYPE_3Emrhyp2JN.png', 0, 1),
(7, 8, 'RUBBER_PINION_SEAL_Li5OcNYvrZ.png', 0, 1),
(8, 9, 'OHM_SEAL_ZVgBT28iPN.png', 0, 1),
(9, 10, 'O_RING_O8461MKxoX.png', 0, 1),
(10, 11, 'IDI_SEAL_29mRAI3Ndr.png', NULL, 1),
(11, 12, 'KZT_o1MsBNWdH0.png', NULL, 1),
(12, 13, 'SPGO_D_SEAL_lsac12ZF4L.png', NULL, 1),
(13, 14, 'RUBBER_PTA_Za49xseYvD.png', NULL, 1),
(14, 15, 'JCB_SEAL_KIT_WjthRk4N6E.png', 1, 1),
(15, 16, 'JCB_42261_SLEW_KIT_yzNhWaAGqE.png', 1, 1),
(16, 17, 'PU_SEAL_Fq8endr3cK.png', 2, 1),
(17, 18, 'BHS_ROD_SEAL_yOhglWS9HR.png', 3, 1),
(18, 19, 'KDAS_PISTON_SEAL_26GieqvCAZ.png', 2, 1),
(19, 19, 'KDAS_PISTON_SEAL_8y2ncUYuRs.png', 3, 1),
(20, 20, 'BRT_z7JxUTG12g.png', 2, 1),
(21, 21, 'CHEVRON_PACKING_GZ0Pr3cb7S.png', NULL, 1),
(22, 22, 'WEAR_RING_XSfUgpljkP.png', 2, 1),
(23, 23, 'O_RING_BOX_QpIiLT9OMC.png', NULL, 1),
(24, 24, 'SPGW_PISTON_SEAL_rqpu5S4ntL.png', NULL, 1),
(32, 25, '21_KWPcp8NMnJ.png', 2, 1),
(33, 25, '21_YqrWilTG3p.png', 1, 1),
(34, 25, '21_13qFTzmJfI.png', 4, 1),
(35, 25, 'RUBBER_PISTON_SEAL_PZxTXLCgy1.png', 3, 1),
(36, 26, 'STEP_SEAL_iVOIYmjRZN.png', NULL, 1),
(37, 27, 'DA_SEAL_mAoHX8hcvF.png', NULL, 1),
(38, 20, 'BRT_IZAHeJjDfn.png', 1, 1),
(39, 28, 'GUIDE_RING_IJitucdo1O.png', NULL, 1),
(40, 18, 'BHS_ROD_SEAL_srhTnl16Yb.png', 1, 1),
(41, 18, 'BHS_ROD_SEAL_EsklBNfnmy.png', 2, 1),
(42, 19, 'KDAS_PISTON_SEAL_biLN1ufdp7.png', 1, 1),
(43, 22, 'WEAR_RING_HQakexlpDf.png', 1, 1),
(44, 17, 'PU_SEAL_MysN7O4xXl.png', 1, 1),
(45, 17, 'PU_SEAL_oL6PbIgyZk.png', 3, 1),
(46, 29, 'DIAPHRAGM_BREAKER_nXiTw6cGg3.png', 0, 1),
(47, 29, 'DIAPHRAGM_BREAKER_cNwQSEZ1KV.png', 0, 1),
(48, 16, 'JCB_42261_SLEW_KIT_MQiW2Lj8C3.png', 3, 1),
(49, 16, 'JCB_42261_SLEW_KIT_EwlcZifG7Y.png', 2, 1),
(51, 15, 'JCB_SEAL_KIT_FcrsVELdTI.png', 4, 1),
(52, 15, 'JCB_SEAL_KIT_uzcBLsDakV.png', 3, 1),
(53, 15, 'JCB_SEAL_KIT_XimI1DKnku.png', 2, 1),
(54, 30, 'EXCAVATRO_SEAL_KIT_5t2IzavY0V.png', NULL, 1),
(55, 30, 'EXCAVATRO_SEAL_KIT_9gSDtQ7Kkr.png', NULL, 1),
(56, 28, 'GUIDE_RING_7P5JvorYq0.png', NULL, 1),
(57, 8, 'OIL_SEAL_wMh1Vrsbox.png', NULL, 1),
(58, 10, 'O_RING_1Yi5L8o4T0.png', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `question_id` int(11) NOT NULL,
  `question` varchar(500) NOT NULL,
  `answer` varchar(500) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`question_id`, `question`, `answer`, `status`) VALUES
(1, 'company_name', 'gj', 1),
(2, 'company_tagline', '', 1),
(3, 'company_address', '', 1),
(4, 'domain_name', '', 1),
(5, 'opening_hours', '', 1),
(6, 'question_biz_cat', 'industrial', 1),
(7, 'list_email', '', 1),
(8, 'list_products', '', 1),
(9, 'question_web_pages', 'Home|||About Us (Our Company)|||Product Gallery|||Product Detail Page|||Services Page|||Service Detail Page|||Contact Us|||Disclaimer|||Privacy Policy|||Terms & Condition', 1),
(10, 'question_gmap', 'yes', 1),
(11, 'question_chat', 'no', 1),
(12, 'question_social_media_pages', 'Facebook|||Twitter|||Google Plus', 1),
(13, 'list_ref', '', 1),
(14, 'submit', 'submit', 1);

-- --------------------------------------------------------

--
-- Table structure for table `seo_onpage`
--

CREATE TABLE `seo_onpage` (
  `seo_onpage_id` int(11) NOT NULL,
  `name` varchar(500) DEFAULT NULL,
  `type` varchar(500) DEFAULT 'text',
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seo_onpage`
--

INSERT INTO `seo_onpage` (`seo_onpage_id`, `name`, `type`, `status`) VALUES
(1, 'meta_keywords', 'textarea', 1),
(2, 'meta_descriptions', 'textarea', 1),
(3, 'subject', 'text', 1),
(4, 'facebook_image', 'text', 1),
(5, 'twitter_image', 'text', 1);

-- --------------------------------------------------------

--
-- Table structure for table `seo_onpage_value`
--

CREATE TABLE `seo_onpage_value` (
  `seo_onpage_value_id` int(11) NOT NULL,
  `seo_onpage_id` int(11) NOT NULL,
  `page_slug_id` int(11) NOT NULL,
  `value` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `setting`
--

CREATE TABLE `setting` (
  `setting_id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `value` varchar(500) DEFAULT NULL,
  `type` varchar(500) NOT NULL DEFAULT 'text',
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setting`
--

INSERT INTO `setting` (`setting_id`, `name`, `value`, `type`, `status`) VALUES
(1, 'coming_soon', '0', 'text', 1),
(2, 'analytics_id', '194283234', 'text', 1),
(3, 'webmaster_tool_meta', NULL, 'text', 1),
(4, 'bing_tool_meta', NULL, 'text', 1),
(5, 'cpanel_username', 'hadono', 'text', 1),
(6, 'domain', 'hadono.com', 'text', 1),
(7, 'analytics_front_id', 'UA-139196448-1', 'text', 1),
(8, 'theme_color', '#171616', 'text', 1),
(9, 'api_key', 'key-bd66dea45d88edf46d18d810b2153e43', 'text', 1);

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `slider_id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `slider_order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`slider_id`, `title`, `description`, `image`, `slider_order`) VALUES
(2, 's1', '<p>BHS TOTAL SEALING SOLUTION</p>\r\n', '_MEWXgalDQr.jpg', NULL),
(3, 's2', '<p><strong>TROLLY JACK SEAL-KIT</strong></p>\r\n', '_kPSsAthfRj.jpg', NULL),
(4, 's3', '<p><strong>BHS ROD SEAL</strong></p>\r\n', '_ByzYhWnIav.jpg', NULL),
(5, 's4', '<p><strong>SEAL ELEMENT</strong></p>\r\n', '_rD4TlVb3Ja.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subscriber`
--

CREATE TABLE `subscriber` (
  `subscriber_id` int(11) NOT NULL,
  `subscriber_email` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `testimonial_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `designation` varchar(500) NOT NULL,
  `testimonial` varchar(255) NOT NULL,
  `testimonial_image` varchar(255) DEFAULT NULL,
  `testimonial_order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`) VALUES
(1, 'admin', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_author`
--
ALTER TABLE `blog_author`
  ADD PRIMARY KEY (`blog_author_id`),
  ADD UNIQUE KEY `blog_author_username` (`blog_author_username`);

--
-- Indexes for table `blog_category`
--
ALTER TABLE `blog_category`
  ADD PRIMARY KEY (`blog_cat_id`),
  ADD UNIQUE KEY `blog_cat_slug` (`blog_cat_slug`);

--
-- Indexes for table `blog_category_post`
--
ALTER TABLE `blog_category_post`
  ADD PRIMARY KEY (`blog_cat_post_id`),
  ADD KEY `blog_cat_id` (`blog_cat_id`,`blog_post_id`),
  ADD KEY `blog_post_id` (`blog_post_id`);

--
-- Indexes for table `blog_comment`
--
ALTER TABLE `blog_comment`
  ADD PRIMARY KEY (`blog_comment_id`),
  ADD KEY `blog_post_id` (`blog_post_id`),
  ADD KEY `blog_author_id` (`blog_author_id`);

--
-- Indexes for table `blog_post`
--
ALTER TABLE `blog_post`
  ADD PRIMARY KEY (`blog_post_id`),
  ADD UNIQUE KEY `blog_post_slug` (`blog_post_slug`);

--
-- Indexes for table `blog_tag`
--
ALTER TABLE `blog_tag`
  ADD PRIMARY KEY (`blog_tag_id`),
  ADD UNIQUE KEY `blog_tag_slug` (`blog_tag_slug`);

--
-- Indexes for table `blog_tag_post`
--
ALTER TABLE `blog_tag_post`
  ADD PRIMARY KEY (`blog_tag_post_id`),
  ADD KEY `blog_tag_id` (`blog_tag_id`),
  ADD KEY `blog_post_id` (`blog_post_id`);

--
-- Indexes for table `business_email`
--
ALTER TABLE `business_email`
  ADD PRIMARY KEY (`business_email_id`);

--
-- Indexes for table `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`catalog_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cat_id`),
  ADD UNIQUE KEY `slug` (`cat_slug`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`client_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `image_gallery`
--
ALTER TABLE `image_gallery`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `inquiry`
--
ALTER TABLE `inquiry`
  ADD PRIMARY KEY (`inquiry_id`);

--
-- Indexes for table `mail`
--
ALTER TABLE `mail`
  ADD PRIMARY KEY (`mail_id`);

--
-- Indexes for table `mail_sent`
--
ALTER TABLE `mail_sent`
  ADD PRIMARY KEY (`mail_sent_id`);

--
-- Indexes for table `page_slug`
--
ALTER TABLE `page_slug`
  ADD PRIMARY KEY (`page_slug_id`),
  ADD UNIQUE KEY `page_slug` (`page_slug`);

--
-- Indexes for table `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`partner_id`);

--
-- Indexes for table `process`
--
ALTER TABLE `process`
  ADD PRIMARY KEY (`process_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `product_slug` (`product_slug`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`product_image_id`),
  ADD UNIQUE KEY `product_name` (`product_image_name`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`question_id`),
  ADD UNIQUE KEY `question` (`question`);

--
-- Indexes for table `seo_onpage`
--
ALTER TABLE `seo_onpage`
  ADD PRIMARY KEY (`seo_onpage_id`);

--
-- Indexes for table `seo_onpage_value`
--
ALTER TABLE `seo_onpage_value`
  ADD PRIMARY KEY (`seo_onpage_value_id`);

--
-- Indexes for table `setting`
--
ALTER TABLE `setting`
  ADD PRIMARY KEY (`setting_id`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`slider_id`);

--
-- Indexes for table `subscriber`
--
ALTER TABLE `subscriber`
  ADD PRIMARY KEY (`subscriber_id`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`testimonial_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_author`
--
ALTER TABLE `blog_author`
  MODIFY `blog_author_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `blog_category`
--
ALTER TABLE `blog_category`
  MODIFY `blog_cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blog_category_post`
--
ALTER TABLE `blog_category_post`
  MODIFY `blog_cat_post_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_comment`
--
ALTER TABLE `blog_comment`
  MODIFY `blog_comment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_post`
--
ALTER TABLE `blog_post`
  MODIFY `blog_post_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_tag`
--
ALTER TABLE `blog_tag`
  MODIFY `blog_tag_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_tag_post`
--
ALTER TABLE `blog_tag_post`
  MODIFY `blog_tag_post_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business_email`
--
ALTER TABLE `business_email`
  MODIFY `business_email_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `catalog`
--
ALTER TABLE `catalog`
  MODIFY `catalog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `image_gallery`
--
ALTER TABLE `image_gallery`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inquiry`
--
ALTER TABLE `inquiry`
  MODIFY `inquiry_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `mail`
--
ALTER TABLE `mail`
  MODIFY `mail_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mail_sent`
--
ALTER TABLE `mail_sent`
  MODIFY `mail_sent_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `page_slug`
--
ALTER TABLE `page_slug`
  MODIFY `page_slug_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `partner`
--
ALTER TABLE `partner`
  MODIFY `partner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `process`
--
ALTER TABLE `process`
  MODIFY `process_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `product_image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `seo_onpage`
--
ALTER TABLE `seo_onpage`
  MODIFY `seo_onpage_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `seo_onpage_value`
--
ALTER TABLE `seo_onpage_value`
  MODIFY `seo_onpage_value_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `setting`
--
ALTER TABLE `setting`
  MODIFY `setting_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `slider_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `subscriber`
--
ALTER TABLE `subscriber`
  MODIFY `subscriber_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `testimonial_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
