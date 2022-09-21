// // const fs = require('fs')

// // console.log('message 1')

// // fs.writeFile('./hello.txt', 'Hello!', () => {
// //     console.log('Successfully created file!')
// // })
// // fs.writeFile('./days-of-the-week.js','hello',() =>{
// //     console.log('successful')
// // })
// let daysOfTheWeek = require('./days-of-the-week') // its a module we created so give the path name to import that module
// // // console.log(daysOfTheWeek)
// // // now we are able to access the created module day-ofthe-week with some content (PerScholas) added
// //  let day1 = daysOfTheWeek.getWeekday
// //  console.log(day1)
// ///////////////////////////////////////////////////////////////////////
// let request = require('request')
// console.log(request)
// request('http://jsonplaceholder.typicode.com/users' ,( err,res,body)=>{
//   console.log(body)
// })

const random =require('./Utility/random')
// // console.log(random.randomNum(4,8))
// for(let i = 0; i< 10; i++){
//     console.log(random.randomNum(100,200))
// }
const circle = require('./Utility/circle')
const areaOfCircle = circle.area(50);
const areaOfCircumference = circle.circumference(75)
console.log(areaOfCircle)
console.log(areaOfCircumference)
// console.log(circle.area(50));
// console.log(circle.circumference(75))











