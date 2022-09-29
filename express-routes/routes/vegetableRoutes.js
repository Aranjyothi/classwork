// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Bring in controller functions (destructure methods)

const {
    findAllVegetable,
    seedStarterData,
    showNewView,
    deleteOneVegetable,
    updateOneVegetable,
    createNewVegetable,
    showEditView,
    showOneVegetable, } = require('../controllers/vegetableController')

// Bring in controller object (with methods attached)
// const fruitController = require('../controllers/fruitController')
// Example: router.get('/', fruitController.findAllMeat)


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllVegetable)

// Setup "seed" route
router.get('/seed', seedStarterData)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneVegetable)

// Setup "update" route
router.put('/:id', updateOneVegetable)

// Setup "create" route
router.post('/', createNewVegetable)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// Setup "show" route  
router.get('/:id', showOneVegetable)




module.exports = router
