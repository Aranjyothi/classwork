//load mongoose//

const mongoose =require('mongoose')

//add a shortcut to schema
const Schema = mongoose.Schema

//create our schema
const fruitSchema = new Schema({
name:{type:String, required:true},
color:{type:String,required:true},
readyToEat:Boolean
})
//create a model from our Schema
const Fruit = mongoose.model('Fruit',fruitSchema)

module.exports = Fruit;