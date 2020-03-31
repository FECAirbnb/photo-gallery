const mysql = require('mysql')
const data = require('./data.js')
const dbConnecton = require('./index.js')
const photo = require('./photos.js')

const axios = require('axios')


dbConnecton.connect(err => {
  if (err) {
    throw err
  }

  dbConnecton.query(`CREATE DATABASE IF NOT EXISTS photogallery;`, (err, result) => {
    if (err) {
      throw err
    }
    console.log('connect to DB', result)
  })

  dbConnecton.query(`USE photogallery;`, err => {
    if (err) {
      throw err
    }
  })

  dbConnecton.query(`CREATE TABLE IF NOT EXISTS locations (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(45))`, err => {
    if (err) {
      throw err
    }
  })
  data.forEach(data => {
    dbConnecton.query(`INSERT INTO locations (name) VALUES ('${data}')`, (err, result) => {
      if (err) {
        throw err
      }
    })
  });

  dbConnecton.query(`CREATE TABLE  IF NOT EXISTS photo (
    id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    imageUrl VARCHAR(255) NULL DEFAULT NULL,
    id_locations INT NULL)`, (err) => {
    if (err) {
      throw err
    }
  })
  var locationIDforTable = 0
  photos.forEach((image, i) => {
    if (i % 10 === 0 && locationIDforTable < 11) {
      locationIDforTable++;
    }
    dbConnecton.query(`INSERT INTO photo (imageUrl, id_locations)  VALUES (?, ?)`, [image, locationIDforTable], (err) => {
      if (err) {
        throw err
      }
    })
  })

  dbConnecton.end();
})




// const api_url = `https://loremflickr.com/api/1/?token=286.dlOQAePbVJpTJDhRmhmwoJEXbnudpLsG&width=320&height=160/tag=home`
// function getImgUrl() {
//   var timeToWaitBetweenRequests = 0;
//   var locationIDforTable = 0
//   var photos = "";
//   var endOfLoop = 20
//   for (let i = 0; i < endOfLoop; i++) {
//     setTimeout(async function () {
//       try {
//         const response = await axios.get(api_url)
//         if (i % 10 === 0 && locationIDforTable < 11) {
//           locationIDforTable++;
//         }
//         photos = response.request._redirectable._options.href;
//         dbConnecton.query(`INSERT INTO photo (imageUrl, id_locations)  VALUES (?, ?)`, [photos, locationIDforTable], (err) => {
//           if (err) {
//             throw err
//           }
//         })
//       } catch (error) {
//         throw error
//       }
//     }, timeToWaitBetweenRequests += 50)

//   }

// getImgUrl();