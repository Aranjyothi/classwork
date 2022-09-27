//lode Express
const express = require('express')

const router = express.Router()

//load meat data
const meats = require('../models/meats.js')
// Setup "root" routes
// router.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// Setup "index" route
router.get('/', (req, res) => {
    // res.send(meat)

    res.render('Meat/Index',{meats:meats})
})

// Setup "new" route
router.get('/new', (req, res) => {
    // res.send('<form>Create meat</form>')
    res.render('Meat/New')
})

// Setup "create" route
// router.post('/', (req, res) => {
//     res.send('Creating a new fruit! (in DB)')
// })
router.post('/', (req, res) => {
      meats.push(req.body)
    res.redirect('/meats')
    // res.send('Creating a new fruit! (in DB)')
})

// Setup "show" route  
router.get('/:index', (req, res) => {
    // res.send(meat[req.params.index])
    res.render('Meat/Show',{meats:meats[req.params.index]})
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// // Setup "update" route
// router.put('/:index', (req, res) => {
//     res.send('Updating a fruit at index! (in DB)')
// })

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a fruit at index! (in DB)')
})
module.exports = router;
