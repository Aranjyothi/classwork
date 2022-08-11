// // /*let age = 8;
// // //string
// // const name ='jyothi'
// // const name2 ="Jyothi"
// // //data types
// // //Number
// // //string operator
// // let firstname = "Jyothi"
// // let lastname = "Poola"
// // //concatenation
// // const fullname = firstname+lastname
// // console.log(fullname)

// // //CAMEL CASE
// // //myFavoriteDesert
// // //PASCEL CASE
// // //MyFirstWestranDress
// // /* AND &&
// //     OR ||
// //     NOT !*/
// // let fire = 0
// // fire -= 10
// // fire--//decrementing by 1
// // fire++//incrementing by 1
// // fire = fire - 10
// // //console.log(fire)
// // //strict comparison
// // //===(3 equal signs)

// // //loose comparison
// // //==(2equal sign)
// // //assignment operator
// // //=(1 equal sign)
// // //!== !=
// // /*let x = 9
// // let y = 6
// // console.log(x>5 && y<7)
// // //console.log(x==5 ||y==5)
// // //console.log(!(x==y))*/
//exercise 1
let chas =10
let dhiya =5
const both = chas+dhiya
console.log(both)
//exercise 2
let chasya =25
let sub = chasya-dhiya
console.log(sub)
//exercise 3
let a = 25
let b = 15
let c =(a-b)
let d = 34
let e = (a*c)
let f = 40
let g = 5
let x =10
let y = 30
let z = 25

let first5veriables= (a+b+c+d+e)/5
console.log(first5veriables)
let last5veriables= (f+g+x+y+z)/5
console.log(last5veriables)

average1=(4,10,22,-30,55)/5;
console.log(average1)
average2=(68,7,-22,9,100)/5;
console.log(average2)
average3=(average1 + average2)/2;
console.log (average3)
//exercise 5
let box1 = 10
let box2 = 5
let temp;
temp=box1
console.log(temp)
box1=box2
console.log(box1)
box2 = temp
console.log(box2)
//exercise 6
let num =4
if(num>0){
    console.log('number is positive')
}
    else{
        console.log('number is negitive');
        
}
//exercise 7
let age = 20
if(age >= 18){
   console.log("welcome to the site")
}
else{
    console.log("access denied")
}

let number =0;
if(number>0  && number>100){
      console.log('the number ispositive and graterthan 100');
    }
      else if(number> 0 && number< 100){
      console.log('the number is positive and lessthan 100');
      }
      else if(number <5 ){
        console.log("this number is negitive");
         }
         else{
            console.log("this number is zero")
         }
    

let grade=67;

if(grade>=60){
    if(grade>=90){
        console.log("A")
    }else if(grade >=80){
        console.log("B")
    }else if(grade >=70){
        console.log("C")
    } else if(grade >=60) {
        console.log("D")
    } else {
        console.log("F");
    }
}
let letter = "c";
switch(letter){
    case "A":
        console.log("this letter is vowel")
    break;
    case "e":
        console.log("this letter is vowel")
    break;
    case "I":
        console.log("this letter is vowel")
        break;
        case "o":
            console.log("this letter is vowel")
         break;
          case "u":
        console.log("this letter is vowel")

          break;
        default: {
            console.log("this letter is consonent")
        }
}
let  number2 = 1;
let status =  number2 > 0  ? "Positive number"
    : number2 < 0
    ? "Negative number"
    : "Number is Zero";
console.log(status);