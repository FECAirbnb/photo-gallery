const express = require('express')
const app = express();
const port = 3001


app.use(express.static('client'));

app.get('/', (req, res) => {
  res.send('hola mundo')
})

app.listen(port, () => console.log('Listening on port 3001'))


