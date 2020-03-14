const mysql = require('mysql2')
const data = require('./data.js')
const seed = require('./seed.js')
const dbConnecton = require('./index.js')

const axios = require('axios')

//console.log(seed)

dbConnecton.connect(err => {
  if (err) {
    console.log(err)
  }


  dbConnecton.query(`CREATE DATABASE IF NOT EXISTS photogallery;`, (err, result) => {
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

  dbConnecton.query(`CREATE TABLE IF NOT EXISTS locations (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(45))`, err => {
    if (err) {
      console.log(err)
    }
  })

  //console.log(data)
  data.forEach(data => {
    dbConnecton.query(`INSERT INTO locations (name) VALUES ('${data}')`, (err, result) => {
      if (err) {
        console.log(err);
      }
      //console.log('inserted locations')
    })
  });

  dbConnecton.query(`CREATE TABLE  IF NOT EXISTS photo (
    id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    imageUrl VARCHAR(255) NULL DEFAULT NULL,
    id_locations INT NULL)`, (err) => {
    if (err) {
      console.log(err)
    }
  })

  const api_url = `https://loremflickr.com/api/1/?token=286.dlOQAePbVJpTJDhRmhmwoJEXbnudpLsG&width=320&height=160/tag=home`

  function getImgUrl() {
    var timeToWaitBetweenRequests = 0;
    var locationIDforTable = 0
    var photos = "";
    for (let i = 0; i < 100; i++) {

      setTimeout(async function () {
        try {
          const response = await axios.get(api_url)
          //console.log(response.request._redirectable._options.href)
          if (i % 10 === 0 && locationIDforTable < 11) {
            locationIDforTable++;
            //console.log(locationIDforTable)
          }
          photos = response.request._redirectable._options.href;
          dbConnecton.promise().query(`INSERT INTO photo (imageUrl, id_locations)  VALUES (?, ?)`, [photos, locationIDforTable], (err) => {
            if (err) {
              console.log(err)
            }
          })
          // console.log(photos)
        } catch (error) {
          console.error(error)
        }
      }, timeToWaitBetweenRequests += 50)
      //console.log(photos)
    }
  }
  getImgUrl();
})



