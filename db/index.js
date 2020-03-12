const mysql = require('mysql')


const dbConnecton = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'photogallery ',
  insecureAuth: true
});

dbConnecton.connect(err => {
  if (err) {
    console.log(err)
  }

  dbConnecton.query(`CREATE DATABASE photogallery`, err => {
    if (err) {
      console.log(err)
    }
    console.log('connect to DB')
  })
})

//module.exports = dbConnecton;