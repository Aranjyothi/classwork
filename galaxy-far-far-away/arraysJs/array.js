let foods = ['kimchi', 'tacos', 'arepa', 'spam']
​
// for loops
// for (let i = 0; i < food.length; i++)
​
// while loops
// while (i < food.length)
​
// for of 
// for (let item of foods)
​
// forEach (build-in array method)
// foods.forEach(() => { })
​
// anonymous function
// () => 
// function() { }
​
// callback functions
​
// filter (built-in array method)
let newFoodsArr = foods.filter((item, idx) => {
    // if you return true
    // keep the item
    // if you return false
    // discard it
    if (item[0] === 'k' || item[0] === 's') {
        return true
    } else {
        return false
    }
})


//exercise:
function fizz(){
    for(let i = 0; i <= 100; i++){
        if (i % 3 === 0 && i % 5 ===0){
            console.log('fizzBuzz');
                } else if(i % 3 === 0){
                    console.log('fizz');
                }else if(i% 5 ===0){
                    console.log('Buzz')
                } else{
                    console.log(i)
                }
    }
} fizz()
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

     } else if(shirt>= price+10){

      } else if(shirt>= price+5){
        
     }else if(shirt>=price+1){

     }
    }
}