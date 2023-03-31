const express = require('express')
const app = express()
const SERVER_PORT = 4884

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '93fa58817ed44bb0b08ec535a3a71cdb',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

app.use(express.static(`${__dirname}/public`))

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))