const express = require('express')
const router = express.Router()
const Blist = require('../models/blist')
// Create an 'INDEX' Route(GET) & test in Postman
router.get('/', async (req,res) => {
  try{
    const newBlistItem = await Blist.find()
    res.status(200).json(newBlistItem)
  }catch(err){
    res.status(400).json({ err: err.message })
  }
})

// Create a 'SHOW' Route(GET) & test in Postman
router.get('/:id', async (req, res) => {
  try {
    const foundBlistItem = await Blist.findById(req.params.id)
    res.status(200).json(foundBlistItem)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
})

// Create a 'CREATE' Route(POST) & test in Postman
router.post('/', async (req,res) =>{
  try{
    const blistItem = await Blist.create(req.body)
    res.status(200).json(blistItem)
  }catch(err){
    res.status(400).json({ err: err.message })
  }
})

// Create an 'UPDATE' Route(PUT) & test in Postman
router.put('/:id', async (req, res) => {
  try {
    const updateBlistItem = await Blist.findByIdAndUpdate(req.params.id, { new: true })
    res.status(200).json(updateBlistItem)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
})

// Create a 'DESTROY' Route(DELETE) & test in Postman
router.delete('/:id', async (req, res) => {
  try {
    const deleteBlistItem = await Blist.findByIdAndRemove(req.params.id)
    res.status(200).json(deleteBlistItem)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
})

module.exports = router
