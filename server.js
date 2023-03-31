const express = require('express')
const app = express()
const SERVER_PORT = 4884

app.use(express.static(`${__dirname}/client`))

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))