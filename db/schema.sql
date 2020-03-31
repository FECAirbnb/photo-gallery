
/* eslint-disable*/
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

DROP DATABASE IF EXISTS photogallery;

CREATE DATABASE photogallery;

USE photogallery;

CREATE TABLE locations
(
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(45)
);



CREATE TABLE photo
(
  id INT NOT NULL PRIMARY KEY,
  imageUrl VARCHAR
  (255) NULL DEFAULT NULL,
  id_locations INT NULL
)

