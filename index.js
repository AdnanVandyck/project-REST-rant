require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("YKTV!!")
})

app.use('/places', require('./controllers/places'))

app.get('*', (req, res) => {
    res.send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
