//dollar denominations
let hundred = 100;
let fifty = 50;
let twenty = 20;
let ten =10;
let five =5;
let one =1;

//cent denominations
let quarter = 25;
let dime = 10;
let nickel = 5;
let penny = 1;

let shirt_price = 15.45
let money_tendered = 50.55;

console.log("shirt price - "+shirt_price);
console.log("money tendered - "+money_tendered);
let change =  money_tendered  - shirt_price;
console.log("change to be given back - "+change)

let huns = 0;
let fifties = 0;
let twenties = 0;
let tens = 0;
let fives = 0;
let ones = 0;
let qtrs = 0;
let dimes = 0;
let nickels = 0;
let cents = 0;

//denominations
if(change >= hundred){    
    while (hundred < change) {
        huns = huns + 1;
        change = change - hundred;   
    }
} if (change >= fifty){
        while (fifty < change) {
            fifties = fifties + 1;
            change = change - fifty;   
    }
}

if (change >= twenty){
        while (twenty < change) {
            twenties = twenties + 1;
            change = change - twenty;
    }
} if (change >= ten){
        while (ten <= change) {
            tens = tens + 1;
            change = change - ten;
    }
} if (change >= five){
        while (five <= change) {
            fives = fives + 1;
            change = change - five;
        }
    } if (change >= one){
        while (one <= change) {
            ones = ones + 1;
            change = change - one;
        }
    } 
    
    change = change * 100;
    
    if (change >= quarter){
        while (quarter <= change) {
            qtrs = qtrs + 1;
            change = change - quarter;
        }
    } if (change >= dime){
        while (dime <= change) {
            dimes = dimes + 1;
            change = change - dime;
        }
    } if (change >= nickel){
        while (nickel <= change) {
            nickels = nickels + 1;
            change = change - nickel;
        }
    } if (change >= penny){
        while (penny <= change) {
            cents = cents + 1;
            change = change - penny;
        }
}

if(huns > 0)
    console.log("No of hundreds - " + huns)
if(fifties > 0)
    console.log("No of fifties - " + fifties)
if(twenties > 0)
    console.log("No of twenties - " + twenties)
if(tens > 0)
    console.log("No of tens - " + tens)
if(fives > 0)
    console.log("No of fives - " + fives)
if(ones > 0)
    console.log("No of ones - " + ones)
if(qtrs > 0)
    console.log("No of qtrs - " + qtrs)
if(dimes > 0)
    console.log("No of dimes - " + dimes)
if(nickels > 0)
    console.log("No of nickels - " + nickels)
if(cents > 0)
    console.log("No of  1 cents - " + cents)



