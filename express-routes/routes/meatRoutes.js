// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Bring in controller functions (destructure methods)
const { 
    findAllMeat,
    seedStarterData,
    showNewView,
    deleteOneMeat,
    updateOneMeat,
    createNewMeat,
    showEditView,
    showOneMeat

} = require('../controllers/meatController')

// Bring in controller object (with methods attached)
// const fruitController = require('../controllers/fruitController')
// Example: router.get('/', fruitController.findAllMeat)


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllMeat)

// Setup "seed" route
router.get('/seed', seedStarterData)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneMeat)

// Setup "update" route
router.put('/:id', updateOneMeat)

// Setup "create" route
router.post('/', createNewMeat)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// Setup "show" route  
router.get('/:id', showOneMeat)




module.exports = router
