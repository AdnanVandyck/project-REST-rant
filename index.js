const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("YKTV!!")
})

app.listen(3000)
