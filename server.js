const express = require('express')
const app = express()
const cors = require('cors')
require('./db/mongoose')
const PORT = process.env.PORT || 8080
const blistController = require('./controllers/blist.js')
const urlArray = ['http://localhost:8080']
const corsOptions = {
  origin: (origin, cb) => {
    if (urlArray.indexOf(origin) != -1 || !origin) {
      cb(null, true)
    } else {
      cb(new Error('Not allowed by CORS!!!!!!!!!'))
    }
  }
}
app.use(cors(corsOptions))
app.use(express.json())
app.use('/blist', blistController)



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))
