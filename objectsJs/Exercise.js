// let bird ={
// name: 'owl',
// age: 1,
// color: 'red',
// feathers: ['white','gray'],
// legs: 2,
// fly: true,

// // jump: function() {
// //     console.log(true)
// // },
// } 
// console.log(bird);
// // bird.jump();

// for (let key in bird) {
//     console.log('key: ', key);
//     console.log('value: ', bird[key]);
//     console.log() ;
// }
// // bird.legs()
// // bird.name()

// // fly: function() {   
// //      console.log('fly')
// // }, 

//Ex1
let myFunction = function(book){
    let Obj ={};
    for(let s of str){
        if (Ojb[s]){
            Obj[s]++
        } else{
            Obj[s] = 1 
        }
    } 
    return Obj[s]; }

console.log(['aranjyothi']);

//ex2
function change(paid, cost){
    paid*= 0;
    cost*= 0;
     let changeReturn {
        let hundread :
//         let hundred: 100,
//         let fifty: 50, 
//         let twenty = 20,
//         let ten =10,
//         let five =5,
//         let one =1,
// let qtrs = 0;
// let dimes = 0;
// let nickels = 0;
// let cents = 0;

     }
    while(paid > cost){
        if(paid >= cost){
        paid -= 5000;
        changeReturn[0] ++;
    } else if (paid >= cost + 2000) {
        paid -= 2000;
        changeReturn[1] ++;
    } else if (paid >= cost + 1000) {
        paid -= 1000;
        changeReturn[2] ++;
    } else if (paid >= cost + 500) {
        paid -= 500;
        changeReturn[3] ++;
    } else if (paid >= cost + 100) {
        paid -= 100;
        changeReturn[4] ++;
    } else if (paid >= cost + 25) {
        paid -= 25;
        changeReturn[5] ++;
    } else if (paid >= cost + 10) {
        paid -= 10;
        changeReturn[6] ++;
    } else if (paid >= cost + 5) {
        paid -= 5;
        changeReturn[7] ++;
    } else if (paid >= cost + 1) {
        paid--;
        changeReturn[8] ++;
    }
} return {
  fiftydoller: changeReturn[0],
  twentydoller: changeReturn[1],
  tendoller: changeReturn[2],
  fivedoller:changeReturn[3],
  onedoller: changeReturn[4],
  quarter: changeReturn[5],
  dimes:changeReturn[6],
  nickels:changeReturn[7],
  cents:changeReturn[8],
}
}
console.log(change(100, 28.09));


//excrcise