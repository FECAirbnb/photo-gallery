CREATE DATABASE photogallery;

USE photogallery;

`CREATE TABLE locations (

  `id` int NOT NULL AUTO_INCREMENT,
  `locations_name` varchar(20),
  PRIMARY KEY (id)
)`;



`CREATE TABLE photo (
  `id`        INT NOT NULL AUTO_INCREMENT,
  `imageUrl` CHAR NULL DEFAULT NULL,
  `id_Location` INT NULL DEFAULT NULL,
)`

ALTER TABLE `Photo Gallery ADD FOREIGN KEY (id_Location) REFERENCES Location (id);