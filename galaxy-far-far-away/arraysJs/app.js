// //ARRAYS

// let learners = [2, jyothi, 44, true]
// console.log()

// //push method ADD FROM THE END OF THE ARRAY
//learners.push('4','' )
// //pop REMOVE FROM THE END OF THE ARRAY
// learners.pop('4')
// //shift 
// learners.shift('4')
// //UNSHIFT

//index
// let learners = ["jyo","dhi","chas"]
// let lerarners2 = ["jade","xxx","xxx"]
// //sperad operator
// let everybody = [...learners, ...lerarners2]
// //rest parameters

// function add(...numbers){
//     for(let i=0; i<numbers.length;i++){

// console.log(numbers[i])
// }
// } 
// add(4,5,3,6,7,8)

// ecercises
//ex1
// maxOfTwoNumbers((1 ,2))
// console.log('max of two numbers is' + )

// let a;
// let b;
// function maxOfTwoNumbers(a,b)
//         {
//             if(a>b){
//                  return a;
//             }else if(b>a){
//                 return b;
//             } else 
//                 return a;
                 
//         }
//         console.log(maxOfTwoNumbers(7,12) )
////ex2

// const  maxOfThree= function(a,b,c){
//     if(a>b && a>c){
//         return a;
//     } else if(b>c && b>a){
//         return b;
    
//     } else 
//     return a;
// } 
// console.log("larger number is", maxOfThree(2,4,6))
//ex3
// let vowels = ["a", "e", "i","o", "u"]
//     function isCharAVowel (...vowels){ //insert vowel values
//         if (vowels === isCharAVowel ){ //if letter is equal to one of the vowel values
//         console.log(true) //print vowel
//         }else{
//             console.log(false)
//         }
        
//     }console.log(isCharAVowel("b"))
//ex4

    const sumArray = function(any)  {
        let sum = 0;
        for(let i = 0; i < any. length; i++ ) {
            sum += any[i];
        }
        return sum;
    }
    console.log(sumArray([1,1,1]));
//ex5
function multiplyArray(arg){
    let multiply = 1;
    for(i=0; i <arg.length; i++){
    multiply*=arg[i];
}
return multiply;
}
console.log(multiplyArray([3,0]))
//ex6
const numArgs = function(...args){
return args.length;
}
console.log(numArgs(1,2,'a'));
//ex 7

function reversingString(str){
    let reversed = '';
    for(let i = str.length -1; i>= 0; i--) {
        reversed+= str[i];
    }
    return reversed;
}
console.log(reversingString('rose'));
// ex8
