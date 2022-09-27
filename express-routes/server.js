//load express
const express = require('express')
const mongoose = require('mongoose');
// const fruit = require('/moduel')
const fruitRoutes =require('./routes/fruitRoutes')
const meatRoutes =require('./routes/meatRoutes')
const vegetableRoutes =require('./routes/vegetableRoutes')
require('dotenv').config()
//creates our express app(object)
const app = express()

//identify our port
const port = process.env.PORT

app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())

//middle ware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))

//?name=kiwi&color=green&readyToEat=value

app.use('/fruits', fruitRoutes)
app.use('/meats', meatRoutes)
app.use('/vegetable', vegetableRoutes)

//setup a data array
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


app.get('/', (req, res) => {
   quality = req.query.quality
   if(quality =='good'){
    yes =fruits.filter(fruit => fruit.readyToEat === true)
    res.send(yes)
   } else if(quality == 'bad'){
    no = fruits.filter(fruit => fruit.readyToEat === false)
    res.send(no)
   } else{
    res.send(fruits)
   }
})

mongoose.connect(process.env.MONGO_DB); 
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB!')
})
 //listen to port
 app.listen(port, () => {
    console.log('listening on port:', port)

})




// // Load express
// const express = require('express')
// //const fruits = require('./models/fruits')
// const fruitRoutes = require('./routes/fruitRoutes')
// const vegetableRoutes = require('./routes/vegetableRoutes')
// const meatRoutes = require('./routes/meatRoutes')

// // Creates our express app (object)
// const app = express()

// // Identify our port
// const port = 3000
// app.use('/api/fruits',fruitRoutes)
// app.use('/api/vegetable',vegetableRoutes)
// app.use('/api/meat',meatRoutes)

