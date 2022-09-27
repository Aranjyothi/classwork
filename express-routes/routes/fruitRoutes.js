//lode Express
const express = require('express')

const router = express.Router()

//load fruits data
//const fruits = require('../models/fruits.js')
const Fruit = require('../models/fruit.js')
const Show = require('../views/Fruits/Show.jsx')

// Setup "root" routes
// router.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// Setup "index" route
router.get('/', (req, res) => {
    //find takes two arguments
    //1st: an object with out quern(to filterour data and find exactlywhat we need)
    //2nd: call back(with error objectand the found data)
    
    Fruit.find({}, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Index', { fruits: foundFruit })
        }
    })
    // res.send(fruits)
   // res.render('Fruits/Index',{fruits:fruits})
})

// Setup "new" route
router.get('/new', (req, res) => {
    res.render('Fruits/New')
})

// Setup "create" route
router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    Fruit.create(req.body,(err,creatFruit) =>{
        if(err){
            res.status(400).json(err)
        } else{
            res.status(200).redirect('/fruits')
        }
        //res.json(creatFruit)
    })
    //fruits.push(req.body)
    //res.redirect('/fruits')
    // res.send('Creating a new fruit! (in DB)')
})

// Setup "show" route  
router.get('/:id', (req, res) => {
    // res.send(fruits[req.params.index])

    Fruit.findById(req.params.id,(err,foundFruit) =>{
        if (err) {
            res.status(400).json(err)
        } else{
            res.status(200).render('Fruits/Show',{ fruits: foundFruit })
        }
    })
   // res.render('Fruits/Show',{fruit:fruits[req.params.index]})
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
