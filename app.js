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

//sets us up to our routes
const snackRoutes = require('./src/routes/snacks')
// console.log(snackRoutes)
app.use('/snacks', snackRoutes)

//error handlers
app.use((err, req, res, next) => {
    console.error(err)
    const status = err.status || 500
    res.status(status).json({ error: err })
})

app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'Not found' } })
})

//get controllers, other routes
const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app