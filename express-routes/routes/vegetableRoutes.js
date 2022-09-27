//lode Express
const express = require('express')

const router = express.Router()

//load vegetable data
const vegetable = require('../models/vegetable.js')
// Setup "root" routes
// router.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// Setup "index" route
router.get('/', (req, res) => {
    res.render('Vegetable/Index',{vegetable:vegetable})
})

// Setup "new" route
router.get('/new', (req, res) => {
    res.render('Vegetable/New')
})

// Setup "create" route
router.post('/', (req, res) => {
    vegetable.push(req.body)
    res.redirect('/vegetable')
})

// Setup "show" route  
router.get('/:index', (req, res) => {
    res.render('Vegetable/Show',{vegetable:vegetable[req.params.index]})
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a fruit at index! (in DB)')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a fruit at index! (in DB)')
})
module.exports = router;
