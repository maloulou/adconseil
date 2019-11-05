const express = require('express')
const config = require('../config/config')
const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${config.port}!`))