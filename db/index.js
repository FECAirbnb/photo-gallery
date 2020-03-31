
const mysql = require('mysql2')

const dbConnecton = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'password',
  port: '3306'
});


module.exports = dbConnecton;