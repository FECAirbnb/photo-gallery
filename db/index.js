const mysql = require('mysql2')



const dbConnecton = mysql.createConnection({
  user: 'root',
  password: 'password'
});


module.exports = dbConnecton;