
// inside of the parenthesis
//the statements:
//statement 1:
//initialized a value for 
//scoped to the for loop
//statement 2
//a condition tha twhen true runs the 
//code in the for loop
//statement 3:
//incermenting of the veriable in 
//order to eventually break the loop

//class notes
// for(let i = 0; i<10; i++) {
//      console.log(i)
//     // //  if(i ==5){
//     // //     break;
//     // // }
//     //  if(true){
//     //     continue;
//     //  }
//     //  console.log(i)
//     //  console.log(i)
//     //  console.log(i)
//     //  console.log(i)
// }

// //step 1 declare and initialize variable
// //2: check the conditin is true
// //3: console log runs and print 0
// //4: thr variable i incerament from 0 to 1
// //5: check if conditin is true
// //6 : console log runs and add prints 1
// //7: i increaments from 1 to 2
// //8: check if conditin is true(it's not)
// //9:: exit loop, continue with rest of code

// //exercise1
// for(let i = 10; i > 0; i--) {
//     console.log(i)
// } 
// exercise2
// for(let j=0; j<=20; j++){
//     if (j<10 && j%2!=0){
//     console.log(j);
//     }
//     if (j>10 && j%2==0) {
//         console.log(j-10);
//     }
// }
// for(let i = 1; i<=10;i = i+2) {
//     console.log(i)
  
// } 
// for(let id= 0; id<=10; id= id+2) {
//     console.log(id)
// }
// //my notes
// let src2 = 1;
// let target = 10
// let evens = "";
// let odds = "";

// while(src2<=target){

//     if(src2%2!=0){

//         if(odds != "")
//             odds = odds + ",";

//        odds = odds+ ""+ src2*10;
//     }
    
//     else if(src2%2==0){

//         if(evens != "")
//             evens = evens + ",";

//         evens = evens + ""+ src2*10;
//     }
//     src2++;
// }

// console.log(odds+" "+evens);


// //ex3
// for(let jo  =6; jo < 61; jo+=3){
//     console.log(jo)
// }
// //ex4
// let sum =""
// for(let i = 1; i < 8; i++){
//     sum +="#"
//     console.log(sum)
// }
// //ex5
// for(r = 0; r <= 10; r++){
//     if(r%2==0)
//         console.log(r);
// }
// // //ex6
// for(let i = 0; i<10; i++) {
//     if(i % 2==0){
//         console.log(i + ' is even');
//     if (i==2)
//         console.log(i +" is prime")
//     } else{
//         console.log(i +' is odd')
       
//         let prime=0;
//         for(k = 2; k<i; k++)
//         {
//             if(i%k==0)
//             {
//                 prime=1;
//                 break;
//             }

//         }

//         if(prime==0)
//         console.log(i + " is prime")
//     }
// }


// // //while loop
// //ex1
// let i = 3;
// while( i < 35){
// console.log(i)
// i+=3
// }
// ex2
// let j =5
// while(j<100){
//     console.log(j)
//     j+=5
// }
// //ex3
// let c = 0
// while(c <20){
//     // console.log(c)
//     if(c%2==0){
//         console.log(c*3);
//     }
//     c++
// }
//ex4
// let pri = 2;
// let num = 0; 
// let num1 = 0;
// while(pri<=20){
//     num=pri-1;
//     while(num>1){
//         if(pri% num==0){
//             num1++
//         } 
//         num--
                   
//     }   
//     if(num1==0){
//         console.log(pri)
//     }
//     num1=0;
//     pri++

// }




// for(let i = 0; i<10; i++) {
//     if(i % 2==0){
//         console.log(i + ' is even');
//     if (i==2)
//         console.log(i +" is prime")
//     } else{
//         console.log(i +' is odd')
       
//         let prime=0;
//         for(k = 2; k<i; k++)
//         {
//             if(i%k==0)
//             {
//                 prime=1;
//                 break;
//             }

//         }

// //ex5
// let bill=10;
// let quaters =0;
// while(bill>4){
//     quaters+=4;
//     bill--
    
// }
// console.log(quaters)


//ex6
// let src = 0;
// while(src<=200){
//     if (src<100 && src%2!=0){
//         console.log(src);
//     }
//     if (src>100 && src%2==0){
//         console.log(src-100);
//     } 
//     src+= 10;
// }
// //ex7
// let fo =500;
// while(fo <=800){
//     if (fo%4==0)
//     console.log(fo);
//     fo++
// }
//ex extra
// for(let i=1; i<=3; i++){
//     let str= '';
// for(let j=1; j<=i; j++){
//     str+=j;
//     }
//     console.log(str)
// }
let num =5;
while(num>=1){
    let str = ' '
    let j = 1;
    while(j<=num){
        str +=num
        j++
       
    }
    console.log(str)
    num--
}
//ex8
// let paid = 100*100;
// let total = 27.83*100;
// let huns = 0;
// let fifties = 0;
// let twenties = 0;
// let tens = 0;
// let fives = 0;
// let ones = 0;
// let qtrs = 0;
// let dimes = 0;
// let nickels = 0;
// let cents = 0;

