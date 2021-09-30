const express = require('express')
const app = express()
require('./db/mongoose')
const PORT = process.env.PORT || 8080
const blistController = require('./controllers/blist')

app.use('/blist', blistController)



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))
