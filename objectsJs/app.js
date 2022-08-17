

//object literal
// let cat = {
//     name: 'kitty',
//     fur:'white',
//     eyes: 2
// }
// console.log(cat.name)
//we can also access properties with brackets.

//           0        1         2
let arr = ['kiwi', 'banana', 'apple']
// object literal 
const cat = {
    name: 'Mr. Bean',
    fur: 'grey, black, and white',
    legs: 4,
    age: 3,
    favoriteThings: ['yarn', 'string', 'food'],
    canSpeakFrench: false,
    meow: function() {   // method syntax 1
        console.log('meow')
    }, 
    purr: () => {       // method syntax 2
        console.log('purr')
    },
    talk(speech) {      // method syntax 3
        console.log(speech)
    }
}
console.log(cat.favoriteThings[0]) // [...] // 'yarn'
// access a property with dot notation
// console.log(cat.name)
// console.log(cat.fur)
// console.log(cat.legs)
// we can also access properties with brackets
// by treating the property names as strings (because they are)
// console.log(cat['name'])
// console.log(cat['fur'])
// console.log(cat['legs'])
// we can create or reassign properties to different values
cat.breed = 'calico'
cat.temperament = ['mild']
cat.temperament.push('angry') // [...] // .push
// we cannot reassign the cat variable because it's a constant
// cat = 'nothing'
// using object properties in conditionals
// if (cat.science) {  // undefined 
//     console.log('wi')
// } else {
//     console.log('no')
// }
// methods... how do we run those?
cat.meow()
//cat.purr()
// cat.talk('feed me!')
// Extra things
// for ... of is for arrays
// for (let item of arr) {
// }
// // for ... in loop is for objects
// for (let key in cat) {
//     // key represents ... fur, name, legs, age, meow
//     console.log('key: ', key)
//     // key is a string value 
//     console.log('value: ', cat[key]) // gives us the value
//     console.log() 
// }
// 


const cat = {
    name: 'Mr. Bean',
    legs: 4,
    type: 'Feline',
    friends: [
        {
            name: 'Georgey',
            legs: 4,
            type: 'Feline'
        }, 
        {
            name: 'Snake',   // cat.friends[1].name    
            legs: 3,         // cat['friends'][1]['name']
            type: 'Feline'
        }, 
        {
            name: 'Rixio', //  cat.friends[2].name
            legs: 5,       //  cat['friends'][2]['name']
            buddies: [
                {
                    name: 'Arthur',
                    fins: 5,   //   cat.friends[2].buddies[0].fins    ->   5
                    type: 'fish' // cat['friends'][2]['buddies'][0]
                },
                {  
                    name: 'Hannibal',
                    type: 'Platypus' //  cat.friends[2].buddies[1].type[4]
                }
            ]
        }
    ]
}
//nested objects

// How do access nested values???
// 1. How do we access the string 'Snake'?
// console.log(cat.friends[1].name) 
// 2. How do we access the string 'Rixio'?
// console.log(cat.friends[2].name)
// 3. How do we access the fins property?
// console.log(cat.friends[2].buddies[0].fins)
cat.friends
cat['friends']
console.log(cat.friends[2].buddies[1].type[4])
console.log(cat.friends[2].buddies[1][1])
console.log(cat.friends[2].buddies[1].type.charAt(4))