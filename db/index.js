const mysql = require('mysql2')
const data = require('./data.js')

const dbConnecton = mysql.createConnection({
  user: 'root',
  password: 'password'
});

dbConnecton.connect(err => {
  if (err) {
    console.log(err)
  }


  dbConnecton.query(`CREATE DATABASE photogallery;`, (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log('connect to DB', result)
  })

  dbConnecton.query(`USE photogallery;`, err => {
    // console.log('here')
    if (err) {
      console.log(err)
    }
  })

  dbConnecton.query(`CREATE TABLE locations (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    locations_name varchar(20));`, err => {
    if (err) {
      console.log(err)
    }
  })

  dbConnecton.query(`CREATE TABLE photo (
    id        INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    imageUrl CHAR NULL DEFAULT NULL,
    id_locations INT NULL DEFAULT NULL,
    FOREIGN KEY (id_locations) REFERENCES locations (id));`, (err) => {
    if (err) {
      console.log(err)
    }

  })

})
module.exports = dbConnecton;