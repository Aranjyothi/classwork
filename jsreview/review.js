//I. variables& Datatypes//
//a1- The equal will assign a value to a variable. ex- (let B = 22)
//a2- Will need to be resigned with a new value.
//a3- We will combine each variable to new variable. 
//a4- Declare , Assign , Define ex -( let X = 22) value
//a5- pseudcoding -writing out the syntax or explaination of the problem. It helps you set up the syntax. 
//a6- 70/30 percent should be spent.

//b1-b2- const firstVariable = 'Hello World'
//b3- let firstVariable = 22
//b4- let firstVariable = secondVariable
//b5- let secondVariable = 'hey'
//b6- hey(let b = 'hi';
        // let a = b;
        //let c = a;
        // console.log(a);)
// let secondVariable = 'hey';
// let firstVariable = secondVariable;
// console.log(firstVariable)
//b7- 
// let yourName = 'Marleni'
// console.log('Hello, my name is ' + yourName)

//c
// const a = 8;
// const b = 50;
// const c = 57;
// const d = 16;
// const e = 'Jyothi';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');

// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false == false);
// console.log(e === 'Kevin');
// console.log(a != b || c);
// console.log(a * a === d);
// console.log(48 == '48');
//D 1-4
// let animal = "dog"; // change variable name
// if (animal === "cow"){
//     console.log ("mooooo")
//  }
//  else {
//     console.log("Hey! You're not a cow.")
//  }
//E 1 and 2
// let age = 10;//change the age
// if(age >= 16){
//     console.log('Here are the key!')
// } else if(age <16){
//     console.log('Sorry, you are to young!')
// }
// //loops
// //A-1 to A-3
// for(let i=0; i<=10; i++){
//     console.log(i)
// }
// for(let i=10; i<=400; i++){
//     console.log(i)
// }
// for(let i=12; i<=4000; i+=3){
//     console.log(i)
// }
//B1 to B2
// for(let i=1; i<100; i++){
//         console.log(i)
// }
// for(let i=1; i<100; i++){
//     if(i % 2 === 0){
//     console.log(i + ' <-- this is an even number')
// } else{
// console.log(i)
// }
// }
//c
// for(let i=1; i<100; i++){
//     if(i % 3 ===0 && i % 5 ===0){
//         console.log('I found a ' + i + ' High five!')
//     console.log('I found a ' + i + 'There is a crowd')
//     }else if(i % 5 === 0){
//     console.log('I found a ' + i + ' High five!')
// } else if (i % 3 === 0){
//     console.log('I found a ' + i + 'There is a crowd')
// }

// }
//D 
// const bankAccount= ()=>{
//     let sum = 0;
//     for(let i = 0; i<= 10; i++){
//     sum+= i;
// } return sum;
// }

// console.log(bankAccount()) 

// let bank_Account =()=>{
// let sum = 0;
// for(let i = 0; i <=100; i++){
//         sum+= i;
//    } return sum * 2;
// }
// console.log(bank_Account())
////Arrays
//A1 - Elements
//A2 - Yes, the order that you create.
//A3 - Grocery list, shooping list.
////B1-
//let quotes = ['Be yourseld', 'Be practical','love yourself']
//const randomThings = [1,10, 'hello',true]
//randomThings[0]
//randomThings[2] = 'world';
//console.log(randomThings)
//D1
//const ourClass = ['Slaty', 'Zoom', 'Sardine', 'Slack', 'Github']
// D1- ourClass[3]
// D2- 
// ourClass[4] = 'Octocat'
// console.log(ourClass)

// D3-
//  ourClass.push('Cloud City')
//  console.log(ourClass)
//E1
// const myArray = [5,10,500,20]
// myArray.push('Aegon','misic');
// myArray.shift();
// myArray.unshift('Bob Marley');
// myArray.slice()
// myArray.pop();
// myArray.splice(2)
// myArray.reverse()
// //yes, the array was mutated. Mutate means to change the orginal structure.
// //Yes, it returned the orginal brbackwards.
// console.log(myArray);
// // console.log(myArray.slice(2));
// //F1 - 
// let number = 0;
// if (number < 100){
//         console.log('little number')
// }
// else{
//         console.log('bignumber')
// }

// //G1 - G3
// let numOfMonkey = 7;
// if(numOfMonkey<5){
//         console.log('little number')
// } else if(numOfMonkey > 10){
//         console.log('Big number')
// } else{
//         console.log('Monkey')
// }
//H1 
//H1 
// console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');
// H2- 
// kristynsCloset.splice(6,0,'raybans');
// console.log(kristynsCloset)
// //H3- 
// kristynsCloset[5] = 'stained knit hat'
// console.log(kristynsCloset)
// H4- console.log(thomsCloset[0][0])
//H5- 
// console.log(thomsCloset[1][1])
// H6-
// console.log(thomsCloset[2][1])
//H7- 
// console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ', ' + thomsCloset[1][1] + ' and ' + thomsCloset [2][1] + '!');
// H8-
// thomsCloset[1][2] = 'footie pajamas'
// console.log(thomsCloset)
//IV 
// A - printGreeting
// function printing(name){
//         return "Hello there, " + name + '!'
// } 
// // console.log(printing('Jyothi'))
// // //B - printCool
// printCool= name =>{
//         console.log(name +' is cool!')
// }
// printCool('Aranjyothi Poola')
// //c - CalculateCube
// calculateCube = a =>{
//         volume = a * a *a;
//         console.log(volume)
// }
// calculateCube(5)
// //D - isVowel
// isVowel = char =>{
//         if (char == 'a' || char == 'e'|| char == 'i'|| char == 'o' || char == 'u'){
//                 return true;
//         } else{
//         return false;
//         } 
// }
// console.log(isVowel('o'))
// //E - getTwoLengths
// getTwoLength = (string1,string2) =>{
//         return[string1.length, string2.length]
// };
// console.log(getTwoLength('shark', 'puffer fish'))
// //F getMultipleLength
// getMultipuleLength = arrString =>{
//         let lengthOfString = [];
//         for(let i = 0; i< arrString.length; i++){
//                 lengthOfString.push(arrString[i].length);
//         };
//         return lengthOfString;
// } 
// console.log(getMultipuleLength(['hello', 'welcome','to','the','party']))
// //G - maxOfThree
// maxOfThree = (num1,num2,num3) =>{
//         if(num1 >= num2 && num1 >= num3){
//                 return num1;
//         } else if(num2 >= num3 && num2 >= num1) {
//                 return num2;
//         } else if (num3 >= num2 && num3 >= num1){
//                 return num3;
//         }
// }
// console.log(maxOfThree(2,1,8))
// //H printLongestWord
// printLongestWord = arrOfSting =>{
//         let longestWord = arrOfSting[0];
//         for(let i = 0; i< arrOfSting.length; i++){
//                 if(arrOfSting[i].length > longestWord.length){
//                         longestWord = arrOfSting[i];
//                 }
//         }
//         return longestWord;
// }
// console.log(printLongestWord(['Antiestablishmentarian','blackhacking']));
//OBJECTS
//A - 1
//make a user object
let user = {
        name: 'Dhiya',
        email: 'dhiya@gmail.com',
        age: 5,
       purchased:[],
}
// //B - 1 and 2
user.email ="chasya@gmail.com"
user.age++;

//C - Adding keys and Values
user['location'] = "mars, PA";
console.log(user["location "])

//D - Shopaholic 
//1
user.purchased.push('carbohydrates');
//2
user.purchased.push('peaceof mind');
//3
user.purchased.push('Merino Jodhpurs');
console.log(user.purchased[2]);
//E Objecti-within-object
//1
user.friend ={
        name: 'Aaron',
        age: 21,
        location: 'Long Beach, CA',
        purchased: []
}
//2
console.log(user.friend.name)
//3
console.log(user.friend.location)
//4
user.friend.age = 55;
//5
user.friend.purchased.push('The One Ring');
//6
user.friend.push('A latte');
//7 
console.log(user.friend.purchased[1]);
//F Loops
//1
for(let i = 0; i < user.purchased.length; i++){
        console.log(user.purchased[i])
}
//2
for(let j = 0; j < user.friend.purchased.length; j++){
        console.log(user.friend.purchsed[j]);
}

//






