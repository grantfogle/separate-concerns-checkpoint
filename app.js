const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('uuid/v4')
const db = require('./db/snacks')
//uuid
//db

app.use(bodyParser.json())
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))


//get controllers, other routes
const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app