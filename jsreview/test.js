const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// map
// // filter
// // forEach
// ​
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// // let filteredCopy = nums.filter((element) => element < 3)  ->   [1, 2] (copy)
// // console.log(nums)  ->   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0] 
// const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// ​
// // array methods take a callback function as an argument
// // callbacks are functions that will run at a later time
// // example of a forEach array method: nums.forEach()
// ​
// ​
// // every method 
// // if every element/value is greater than zero, return true 
// let test = nums.every(myCallback) // ->   returns either true or false
// ​
// // creating our very own callback function!
// // this callback checks if every element/value is greater than 0
// function myCallback(element) {
//   if (element > 0) {
//     return true
//   } else {
//     return false
//   }
//   // return elements >= 0
// }
// ​
// console.log('the result of our every array method check is... ', test)
// ​
// // MDN Docs example of a callback
// // const isBelowThreshold = (currentValue) => currentValue < 40;
// ​
// // same thing as....
// function isBelowThreshold(currentValue) {
//   return currentValue < 40  //  ->   true or false 
// }
// ​
// ​
// ​
// ​
// // let test2 = panagram.every(myNewCallback)
// ​
// // function myNewCallback(element) {
// //   if (element.length < 8) {
// //     return true
// //   } else {
// //     return false
// //   }
// // }
// ​
// // more verbose version...
// let test2 = panagram.every((element) => {
//   return element.length < 8
//   // if (element.length < 8) {
//   //   return true
//   // } else {
//   //   return false
//   // }
// })
// ​
// // a version with less syntax...
// // let test2 = panagram.every((element) => element.length < 8)
// ​
// console.log("the result of our second every method is...", test2)
// ​
// ​
// // find array method...
// ​
// let foundElement = nums.find((element) => element % 11 === 0) 
// // ->  return the first value (number) matching this condition
// ​
// ​
// let firstChar = panagram.find((element) => element.length > 5) 
// // ->   returns the first value (word) matching this condition
// ​
// ​
// console.log('we found a number divisible by 5, which is...', foundElement)
// console.log('we found a word that is longer than 5 characters, which is...', firstChar)
// ​
// // no return value for forEach
// // this will log every value multiplied by three
// nums.forEach((element) => console.log(element * 3))
// ​
// // this will log every word with an exclamation point
// panagram.forEach((word) => console.log(word + '!'))
// //let filteredCopy = nums.filter(myCallback)
// const filteredCopy = nums.filter(nums => nums.length < 4);
// console.log(filteredCopy[0]);
//Filter
let filter = nums.filter((elements)=> elements < 4)
console.log("we found the elements", filter )
let filter1 = panagram.filter(word => word.length > 5)
console.log('even length words', filter1)
//find Index
let foundelement = nums.findIndex((element) => element % 3 ===0);
console.log('we find the element ', foundelement );

let find = panagram.findIndex(word => word < 2)
console.log('word that is lessthan 2:', find);

//maps
let maps = nums.map((elements) =>elements * 100)
console.log(maps)

let word = panagram.map((word)=> word. toUpperCase())
console.log(word)
//some
let some = nums.some((elements) => elements % 7)
console.log(some)

let some1 = panagram.some((word) => word.includes('a') )
console.log(some1)