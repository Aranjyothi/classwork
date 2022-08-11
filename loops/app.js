
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

//exercise1
for(let i = 10; i > 0; i--) {
    console.log(i)
} 
//exercise2
for(let i = 1; i<=10;i = i+2) {
    console.log(i)
  
} 
for(let i = 1; i<=10;i = i+2) {
    console.log(i)
}
//ex3
for(let jo  =6; jo < 61; jo+=3){
    console.log(jo)
}
//ex4
let sum =""
for(let i = 1; i < 8; i++){
    sum +="#"
    console.log(sum)
}
//ex5
for(r = 0; r <= 10; r++){
    if(r%2==0)
        console.log(r);
}
// //ex6
for(let i = 0; i<10; i++) {
    if(i % 2==0){
        console.log(i + ' is even');
    if (i==2)
        console.log(i +" is prime")
    } else{
        console.log(i +' is odd')
       
        let prime=0;
        for(k = 2; k<i; k++)
        {
            if(i%k==0)
            {
                prime=1;
                break;
            }

        }

        if(prime==0)
        console.log(i + " is prime")
    }
}


//while loop
let i = 3;
while( i < 35){
console.log(i)
i+=3
}
let j =5
while(j<100){
    console.log(j)
    j+=5
}
let c = 0
while(c <=20){
    // console.log(c)
    if(c%2==0){
        console.log(c*3);
    }
    c++
}
// // let i = 0, a = 
// // while(i<20){
// //     if(i%1==0)
// //     while(i)
// // }