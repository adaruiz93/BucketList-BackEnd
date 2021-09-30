const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
  res.send('this hits')
})

module.exports = router
