-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: schooled_web_application
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `card_id` varchar(50) NOT NULL,
  `resource_id` varchar(50) NOT NULL,
  `card_question` char(255) NOT NULL,
  `card_answer` char(255) NOT NULL,
  PRIMARY KEY (`card_id`),
  KEY `resource_id` (`resource_id`),
  CONSTRAINT `card_ibfk_1` FOREIGN KEY (`resource_id`) REFERENCES `resource` (`resource_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_member`
--

DROP TABLE IF EXISTS `group_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group_member` (
  `group_member_id` varchar(50) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `group_role_id` varchar(50) NOT NULL,
  PRIMARY KEY (`group_member_id`),
  KEY `user_id` (`user_id`),
  KEY `group_role_id` (`group_role_id`),
  CONSTRAINT `group_member_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `group_member_ibfk_2` FOREIGN KEY (`group_role_id`) REFERENCES `group_role` (`group_role_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_member`
--

LOCK TABLES `group_member` WRITE;
/*!40000 ALTER TABLE `group_member` DISABLE KEYS */;
INSERT INTO `group_member` VALUES ('daw93ks0-die3-rir2-493f-394k2uf02kci','2272de8b-5864-46f7-8eb3-2497d5fae47e','e98ee9bf-6b0b-4057-b9bd-857c8c408fcd');
/*!40000 ALTER TABLE `group_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_role`
--

DROP TABLE IF EXISTS `group_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group_role` (
  `group_role_id` varchar(50) NOT NULL,
  `resource_group_id` varchar(50) NOT NULL,
  `group_role_name` varchar(20) NOT NULL,
  `group_role_description` char(255) DEFAULT NULL,
  PRIMARY KEY (`group_role_id`),
  KEY `resource_group_id` (`resource_group_id`),
  CONSTRAINT `group_role_ibfk_1` FOREIGN KEY (`resource_group_id`) REFERENCES `resource_group` (`resource_group_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_role`
--

LOCK TABLES `group_role` WRITE;
/*!40000 ALTER TABLE `group_role` DISABLE KEYS */;
INSERT INTO `group_role` VALUES ('0302b466-f1ae-4bae-9842-68d28f4fd282','0c4669ee-8403-45fd-8e7d-59515f4175fc','Owner','This is the owner of the group.'),('21c58661-79a6-4c35-bb68-c6e521b35fc4','b31c9821-84f0-458e-ab4c-24b3dea6f6ea','Owner','This is the owner of the group.'),('2c3b6a87-a01d-49d4-bd88-7777ebf02a42','50f2b696-9ec8-4165-828d-75c4b8e6867a','Owner','This is the owner of the group.'),('343e597f-0cf1-4164-8264-d3dfefab2518','f686b258-ff18-4e7b-a799-a45f62ce4c95','Owner','This is the owner of the group.'),('36e04b1e-efa7-4e80-afb6-febf48ec6680','ef93d7bd-babf-4816-a8c5-0581aed49578','Owner','This is the owner of the group.'),('47a1bb9c-d257-4734-babc-9780db76fe21','58f8ff65-59bc-48a6-8280-3ab7b02d45bb','Member','This is the standard member role.'),('4a53ecb1-fc61-432c-a2a2-350e77e38272','be3c8e11-c7a0-4fde-bfe2-66c9dbae5d2c','Owner','This is the owner of the group.'),('4bdc73cb-f9b3-4c13-9c99-2cdf7219eaa2','0c4669ee-8403-45fd-8e7d-59515f4175fc','Member','This is the standard member role.'),('510df693-da96-4ac4-83d6-073a983df20b','f686b258-ff18-4e7b-a799-a45f62ce4c95','Member','This is the standard member role.'),('536b27eb-ac2a-4071-a70c-16998bb84a22','f68323d4-213e-42fb-a710-222988df1caa','Owner','This is the owner of the group.'),('64077287-412a-43ca-95b6-c579d1697023','be3c8e11-c7a0-4fde-bfe2-66c9dbae5d2c','Member','This is the standard member role.'),('78a85d5b-fc45-4d1e-96f2-58a0455cb4f2','50f2b696-9ec8-4165-828d-75c4b8e6867a','Member','This is the standard member role.'),('8ebb734e-9176-40c5-b156-32df762321a9','ef93d7bd-babf-4816-a8c5-0581aed49578','Member','This is the standard member role.'),('914688f7-930c-4e54-a820-88204a61245e','74874902-b7c7-4678-bbec-86a50e0d70a0','Member','This is the standard member role.'),('c5cf5df4-4739-4eb0-ae46-9e16a8d00d52','75b003e8-69fa-4cdf-81d5-105614f39c7f','Member','This is the standard member role.'),('ca1ed6c9-f14a-4701-a435-8b2bf6e5a8ab','74874902-b7c7-4678-bbec-86a50e0d70a0','Owner','This is the owner of the group.'),('d18a3144-f9c5-4ec3-9c03-1e1581fb8663','f68323d4-213e-42fb-a710-222988df1caa','Member','This is the standard member role.'),('d9b246fc-53c4-48ab-a063-b32cd98a1623','58f8ff65-59bc-48a6-8280-3ab7b02d45bb','Owner','This is the owner of the group.'),('e0d62797-0d1c-43bc-baf5-fe1cabca8223','75b003e8-69fa-4cdf-81d5-105614f39c7f','Owner','This is the owner of the group.'),('e98ee9bf-6b0b-4057-b9bd-857c8c408fcd','b31c9821-84f0-458e-ab4c-24b3dea6f6ea','Member','This is the standard member role.');
/*!40000 ALTER TABLE `group_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invite`
--

DROP TABLE IF EXISTS `invite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invite` (
  `invite_token` varchar(50) NOT NULL,
  `invite_creation_date` date NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `resource_group_id` varchar(50) NOT NULL,
  `invite_used` tinyint(1) NOT NULL,
  PRIMARY KEY (`invite_token`),
  KEY `user_id` (`user_id`),
  KEY `resource_group_id` (`resource_group_id`),
  CONSTRAINT `invite_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `invite_ibfk_2` FOREIGN KEY (`resource_group_id`) REFERENCES `resource_group` (`resource_group_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invite`
--

LOCK TABLES `invite` WRITE;
/*!40000 ALTER TABLE `invite` DISABLE KEYS */;
/*!40000 ALTER TABLE `invite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission` (
  `permission_id` varchar(50) NOT NULL,
  `permission_name` varchar(50) NOT NULL,
  `permission_data` blob NOT NULL,
  PRIMARY KEY (`permission_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `question_id` varchar(50) NOT NULL,
  `resource_id` varchar(50) NOT NULL,
  `question_question` char(255) NOT NULL,
  `question_answer_data` longtext NOT NULL,
  PRIMARY KEY (`question_id`),
  KEY `resource_id` (`resource_id`),
  CONSTRAINT `question_ibfk_1` FOREIGN KEY (`resource_id`) REFERENCES `resource` (`resource_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resource`
--

DROP TABLE IF EXISTS `resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resource` (
  `resource_id` varchar(50) NOT NULL,
  `resource_name` varchar(14) NOT NULL,
  `resource_group_id` varchar(50) NOT NULL,
  `resource_type` int NOT NULL,
  `resource_creation_date` date NOT NULL,
  PRIMARY KEY (`resource_id`),
  KEY `resource_group_id` (`resource_group_id`),
  CONSTRAINT `resource_ibfk_1` FOREIGN KEY (`resource_group_id`) REFERENCES `resource_group` (`resource_group_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
/*!40000 ALTER TABLE `resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resource_group`
--

DROP TABLE IF EXISTS `resource_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resource_group` (
  `resource_group_id` varchar(50) NOT NULL,
  `resource_group_name` varchar(14) NOT NULL,
  `resource_group_privacy_type` int NOT NULL,
  `resource_group_password` char(255) DEFAULT NULL,
  `resource_group_creation_date` date NOT NULL,
  `resource_group_description` char(255) DEFAULT NULL,
  PRIMARY KEY (`resource_group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource_group`
--

LOCK TABLES `resource_group` WRITE;
/*!40000 ALTER TABLE `resource_group` DISABLE KEYS */;
INSERT INTO `resource_group` VALUES ('0c4669ee-8403-45fd-8e7d-59515f4175fc','Test Two',0,NULL,'0001-01-01','Test'),('50f2b696-9ec8-4165-828d-75c4b8e6867a','Test Group',0,NULL,'0001-01-01','This is a test'),('58f8ff65-59bc-48a6-8280-3ab7b02d45bb','Test Two',0,NULL,'0001-01-01','test'),('74874902-b7c7-4678-bbec-86a50e0d70a0','Test Group',0,NULL,'0001-01-01','This is a test group'),('75b003e8-69fa-4cdf-81d5-105614f39c7f','Test Group',0,NULL,'0001-01-01','This is a test group'),('b31c9821-84f0-458e-ab4c-24b3dea6f6ea','Test Group',0,NULL,'0001-01-01','This is a test group'),('be3c8e11-c7a0-4fde-bfe2-66c9dbae5d2c','Test Group',0,NULL,'0001-01-01','This is a test group'),('ef93d7bd-babf-4816-a8c5-0581aed49578','Test Group',0,NULL,'0001-01-01','This is a test group'),('f68323d4-213e-42fb-a710-222988df1caa','Test Group',0,NULL,'0001-01-01','This is a test'),('f686b258-ff18-4e7b-a799-a45f62ce4c95','Test Group',0,NULL,'0001-01-01','This is a test group');
/*!40000 ALTER TABLE `resource_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resource_permission`
--

DROP TABLE IF EXISTS `resource_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resource_permission` (
  `resource_permission_id` varchar(50) NOT NULL,
  `resource_id` varchar(50) NOT NULL,
  `permission_id` varchar(50) NOT NULL,
  PRIMARY KEY (`resource_permission_id`),
  KEY `resource_id` (`resource_id`),
  KEY `permission_id` (`permission_id`),
  CONSTRAINT `resource_permission_ibfk_1` FOREIGN KEY (`resource_id`) REFERENCES `resource` (`resource_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `resource_permission_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`permission_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource_permission`
--

LOCK TABLES `resource_permission` WRITE;
/*!40000 ALTER TABLE `resource_permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `resource_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `token_token` char(255) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `token_type` int NOT NULL,
  `token_creation_date` date NOT NULL,
  PRIMARY KEY (`token_token`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `token_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES ('7acf074eb348d8043e7ed69337f700e69b337ea1e8ee75e4cdafbab4c26e51f4','2272de8b-5864-46f7-8eb3-2497d5fae47e',99,'0001-01-01');
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` varchar(50) NOT NULL,
  `user_username` varchar(25) NOT NULL,
  `user_password` char(255) NOT NULL,
  `user_email` char(255) NOT NULL,
  `user_phone` int DEFAULT NULL,
  `user_creation_date` date NOT NULL,
  `user_validated` tinyint(1) NOT NULL,
  `user_type` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_username` (`user_username`),
  UNIQUE KEY `user_email` (`user_email`),
  UNIQUE KEY `user_phone` (`user_phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('2272de8b-5864-46f7-8eb3-2497d5fae47e','Danie','6b38105b627968d13ba0003764db1f570928c44f8f70f921f1335c829a358bdb','danie.august.j@gmail.com',NULL,'0001-01-01',0,1),('274a35ad-cf09-4094-9f47-0303b37ff272','test_user4','d152e9963798d7d91d8e060f7d63612f8ba2c58728ae7796bd132080cd55cdf8','test4@gmail.com',NULL,'0001-01-01',0,0),('459c3d8f-c0a0-43cc-8141-7316231861cf','test_user','d152e9963798d7d91d8e060f7d63612f8ba2c58728ae7796bd132080cd55cdf8','Test@gmail.com',NULL,'0001-01-01',0,0),('948f1087-7b0e-4d99-b070-0d5504d71750','test_user2','d152e9963798d7d91d8e060f7d63612f8ba2c58728ae7796bd132080cd55cdf8','test2@gmail.com',NULL,'0001-01-01',0,0),('d6a1d9da-c88c-4f2f-ba24-160e8fc446a0','test_user3','d152e9963798d7d91d8e060f7d63612f8ba2c58728ae7796bd132080cd55cdf8','test3@gmail.com',NULL,'0001-01-01',0,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `whiteboard`
--

DROP TABLE IF EXISTS `whiteboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `whiteboard` (
  `whiteboard_id` varchar(50) NOT NULL,
  `resource_id` varchar(50) NOT NULL,
  `whiteboard_data` blob NOT NULL,
  `whiteboard_creation_date` date NOT NULL,
  PRIMARY KEY (`whiteboard_id`),
  KEY `resource_id` (`resource_id`),
  CONSTRAINT `whiteboard_ibfk_1` FOREIGN KEY (`resource_id`) REFERENCES `resource` (`resource_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `whiteboard`
--

LOCK TABLES `whiteboard` WRITE;
/*!40000 ALTER TABLE `whiteboard` DISABLE KEYS */;
/*!40000 ALTER TABLE `whiteboard` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-14 20:39:48
