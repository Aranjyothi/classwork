//load express
const express = require('express')
const port = 3000


// create the app
const app = express()
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"]
app.get('/pants',(req, res) =>{

})

//define routes(when ready)
app.get('/:index',(req, res) =>{
    if(plants[req.params.index]){
   res.send(plants[req.params.index])
} else{
    res.send('cannot find anthing at this time:' +req.params.index)
}
})

app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params)
    res.send('hello ' + req.params.firstname + ' ' + req.params.lastname)
})
app.get('/howdy/',(req,res) => {
    console.log(req.params)
    console.log(req.query)
    res.send('testing')
})


// listen to port 3000
app.listen(port, () => {
    console.log('Listening on port:',port);
   });