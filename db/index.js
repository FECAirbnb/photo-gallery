
const mysql = require('mysql')

const dbConnecton = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'password',
  port: '3306'
});


module.exports = dbConnecton;