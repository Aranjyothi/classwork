//loops
let food = ['kinchi','sambar','rice','rasam']

// //for Each(build-in array method)
// food.forEach(function(iteam, idx, myarray){
// console.log(iteam);
// console.log(idx)
// }
// )
// //call back function
// const myForEachFunction = function(){

// }


// food.forEach() =>{

// }
// //filtter(built-in) method
// food.filter((iteam,idx) => {
// if(item[0] === 'k'){
//     return true;
// } else {
//     return false;
// }
// })
// console.log(food);
// console.log(newFoodArr);
// //map(built-in)array method
// food.map(function(item,idx){
//     //change the current item
//     return item + '!'
// })
// console.log(brandNewArray);c

// let nums =[4, 10, 25, 30, 100]
// let resule = num.reduce((previousValue, currentValue) =>{
//     return currentValue+previousValue;
// })

//exercise:
// function fizz(){
//     for(let i = 0; i <= 100; i++){
//         if (i % 3 === 0 && i % 5 ===0){
//             console.log('fizzBuzz');
//                 } else if(i % 3 === 0){
//                     console.log('fizz');
//                 }else if(i% 5 ===0){
//                     console.log('Buzz')
//                 } else{
//                     console.log(i)
//                 }
//     }
// } fizz()
//ex2
function vendingMachine(cookies, cost){
    let quaters = 0;
    while(cookies > cost){
        cookies--
        quaters+= 4;
    } 
    return quaters;
} 
console.log(vendingMachine(10,3));
//ex3
function shope(shirt, price){
    price = Math.ceil(price)
    let total = 0;
    let den = [0, 0, 0, 0, 0]
    while (shirt > price){
        if(shirt>= price+ 50){
            
        }else if(shirt>= price+20){

        }else if(shirt>= Price+10){
             }
    }
}