const express = require('express')
const router = express.Router()
const Blist = require('../models/blist')

router.get('/', async (req,res) => {
  try{
    const newBlistItem = await Blist.create(req.body)
    res.status(200).json(newBlistItem)
  }catch(err){
    res.status(400).json({ err: err.message })
  }
})

router.post('/', async (req,res) =>{
  try{
    const blistItem = await Blist.create(req.body)
    res.status(200).json(blistItem)
  }catch(err){
    res.status(400).json({ err: err.message })
  }
})

module.exports = router
