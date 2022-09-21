const express = require('express')
const port = 3000
const array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


// create the app
const app = express()
app.get('/greeting/:name',(req,res) =>{
    console.log(req.params)
    res.send('Hello ' + req.params.name)
    // res.send(req.query)
})
app.get('/tip/:total/:tip',(req,res) => {

console.log(req.params)
res.send(`<h1>your tip is:${req.params.total * req.params.tip/100}</h1>`)
})
app.get('/magic/:question', (req,res) => {
console.log(req.params)
res.send(`${req.params.question.split("%20")}?<h1>${array[Math.floor(Math.random()*array.length)]}</h1>`)
})

app.listen(port, () => {
    console.log('Listening on port:',port);
   });