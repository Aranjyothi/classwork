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
// //     console.log() ;
// // }
// // // bird.legs()
// // // bird.name()

// // // fly: function() {   
// // //      console.log('fly')
// // // }, 

// //Ex1
// function characterCounter(string){
//     let newObj={};
//     for(let i=0;i<string.length;i++){// for(let s of string){if(newObj[s]){}}
//         let char =string[i]
//         if(newObj[char]){
//             newObj[char]++;
//         }else{
//             newObj[char]=1;
//         }
//     }
// return newObj;
// }
// //console.log(characterCounter("Hello"))

// console.log(characterCounter("aranjyothi"));



// //ex2

// function denomiNations(price, cash) {
//     let change = cash - price;
//     let obj = {};
//     let denominations = [100, 50, 20, 10, 5, 1];
//     for (let i = 0; i < denominations.length; i++) {
//       let denomination = denominations[i];
//       let numOfDenominations = Math.floor(change / denomination);
//       obj[denomination] = numOfDenominations;
//       change = change % denomination;
//     }
//     return obj;
//   }
//   console.log(denomiNations(10, 100));
 
function changeReturn(paid, cost){

    
         hundread = 100,
        fifty= 50,
        ltwenty = 20,
         ten =10,
        five =5,
        one =1,
        qtrs = 0,
        dimes = 0,
        nickels = 0,
        cents = 0
let changeObject ={
    hundread: 0,
    fifty: 0,
    twenty: 0,
    ten: 0,
    five: 0,
    one: 0,

}
        while(paid > cost){
        if(paid >= cost){
        paid -= 50;
        changeReturn[0] ++;
    } else if (paid >= cost + 2000) {
        paid -= 20;
        changeReturn[1] ++;
    } else if (paid >= cost + 1000) {
        paid -= 10;
        changeReturn[2] ++;
    } else if (paid >= cost + 500) {
        paid -= 5;
        changeReturn[3] ++;
    } else if (paid >= cost + 100) {
        paid -= 1;
        changeReturn[4] ++;
    } 
} return {
  fiftydoller: changeReturn[0],
  twentydoller: changeReturn[1],
  tendoller: changeReturn[2],
  fivedoller:changeReturn[3],
  onedoller: changeReturn[4],
}
}
console.log(change(100, 28.09));


//excrcise