// //load express
// const express = require('express')
// // const fruit = require('/moduel')

// //creates our express app(object)
// const app = express()

// //identify our port
// const port = 3000

// //setup a data array
// const fruits = [
//     {
//         name: 'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name: 'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name: 'banana',
//         color: 'yellow',
//         readyToEat: true
//     },
//     {
//         name: 'lemon',
//         color: 'yellow',
//         readyToEat: false
//     },
//     {
//         name: 'lime',
//         color: 'green',
//         readyToEat: false
//     }
// ];


// //setup our"root" route
// app.get('/',(req,res) => {
//     res.send('<h1>Hello world!</h1>')
// })
// //setup "index" routes
// app.get('/fruits',(req,res) => {
//     console.log(req.params)
//     res.send(fruits)
// })
// // setup"show" route
// app.get('/fruits/:id',(req,res) => {
//     //  req.params     {}
//     //  req.query      {}
//     //  req.params     { index: 1 }
//     console.log(req.params)
//     res.send(fruits[req.params.index])
// })



// app.get('/', (req, res) => {
//    quality = req.query.quality
//    if(qyality =='good'){
//     yes =fruits.filter(fruit => fruit.readyToEat === true)
//     res.send(yes)
//    } else if(quality == 'bad'){
//     no = fruits.filter(fruit => fruit.readyToEat === false)
//     res.send(no)
//    } else{
//     res.send(fruits)
//    }
// })



// Load express
const express = require('express')
//const fruits = require('./models/fruits')
const fruitRoutes = require('./routes/fruitRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')
const meatRoutes = require('./routes/meatRoutes')

// Creates our express app (object)
const app = express()

// Identify our port
const port = 3000
app.use('/api/fruits',fruitRoutes)
app.use('/api/vegetable',vegetableRoutes)
app.use('/api/meat',meatRoutes)

 //listen to port
app.listen(port, () => {
    console.log('listening on port:', port)
    
})
