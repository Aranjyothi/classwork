// sayHello()
// //function declaration
// function sayHello(){
// //console.log('Hello')
// return 'Hello'
// }
// //function expression
// const sayHi = function(){
//     //console.log("Hi")
//     return 'Hi'
// }
// //arrow function
// const sayHey = ()=>'Hey'
// console.log(sayHello())
// console.log(sayHi())
// console.log(sayHey())
// function add(num1, num2, num3=0, num4=0){
//     return num1+num2+num3+num4
// }
// console.log(add())
// console.log(add(6,7,1,1))
// console.log(add(3,4))
// console.log(add(2,1))
// console.log(add(6,1))
// console.log(add('ram','sita'))
// //exercise
function Area(width,height){
    console.log("Area")
    console.log('the area of rectangle of width'+width+ 'and height of'+height+'is :'+width*height+'squareunits')
}
Area(3,4)
//exercise2
const planetHasWater = function(planet1){
    var planet1 = planet1.toLowerCase();
    if (planet1 == "earth" || planet1 == "mars") {
        return 'true'
    } else {
        return 'fals'
    }
}
console.log(planetHasWater("earth"))
console.log(planetHasWater("saturn"))

// arrowfunctions
const Area2 = (width, height) =>("the area of rectangle of width" +width+ 'and height of'+height+'is :'+width*height+'squareunits')
console.log(Area2(4,5))
const planetHasWater2 =(planet) =>(planet.toLowerCase() == "earth" || planet.toLowerCase() == "mars")?"true":"fals"
console.log(planetHasWater2("earth"))
console.log(planetHasWater2("mars"))