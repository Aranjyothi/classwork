 const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
 const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// // //let filteredCopy = nums.filter(myCallback)
// // const filteredCopy = nums.filter(num => nums.length <4);
// // console.log(filteredCopy);

let foundelement = nums.findIndex((element) => element % 3 ===0);
console.log('we find the element ', foundelement );

// const myArray = [5,10,500,20]
// myArray.push('Aegon');
// console.log(myArray);