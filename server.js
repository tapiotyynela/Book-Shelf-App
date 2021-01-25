const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./server/db')
const bookRouter = require('./server/routes/book-router')
const port = 8000;

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', bookRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}!`)
});