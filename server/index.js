const express = require('express')
const app = express();
const port = 3001
//const bodyParser = require('body-parser')
const db = require('../db/index.js')
const path = require('path')

//app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(express.urlencoded({ extended: true }))

db.query(`use photogallery`)

app.get('/photogallery', (req, res) => {
  const queryStr = `SELECT  imageUrl FROM photo;`
  db.query(queryStr, (err, result) => {
    if (err) {
      throw err
    }
    res.json(result)
  })
})

app.listen(port, () => console.log('Listening on port 3001'))


