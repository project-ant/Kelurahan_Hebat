// Hello World

var express = require('express')
const port = 3000
var app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

/* istanbul ignore next */
app.listen(port, () => {
  console.log('Express started on port 3000')
})

