/*//ex
class Cat{
    constructor(name, color, age, personality){
        this.name = name;
        this.color= color;
        this.age = age;
        this.personality = personality;
        this.hungry =true
        console.log('creating new instance for a cat')
    }
    meow(){
        console.log('meow')
    }
    purr(){
        console.log('purr')
    }
    eat(){
        this.hungry= false;
        console.log('she ate her food')
    }
}
const cat1 = new Cat('pricess','white','2','frisky',false)
const cat2 = new Cat('kitty','gray','1','shy',true)

console.log(cat1, cat2)
cat1.meow()
cat2.meow()

cat1.purr()
cat2.purr()

console.log(cat1.hungry)
cat1.eat()
console.log(cat1.hungry)

console.log(cat2.hungry)
cat2.eat()
console.log(cat2.hungry) */
//EX2
// class Pirate{
//     constructor(name, beard){
//         this.name = name;
//         this.beard = beard;
//         this.drunk = true;
//     }
//    talk(){
//     console.log('yarrr')

//    }
   
//    drink(){
//     this.drunk = true;
//     console.log('slow down there Mate-y')
//    }
//    sing(){
//     console.log('There once was a ship that put to see')
//    }
//    tostring(){
//     return console.log(this.name, this.beard,)
//    }
// }
// const jollyRoger = [new Pirate('Dave','blue beard',30),new Pirate('John','red beard', 40), new Pirate('Roney','gray beard', 45)] 
// const blackPearl = [new Pirate('Mark','white beard',50),new Pirate('Toney','red beard',60), new Pirate('Jackson','brown beard', 65)]

//     for(let i = 0; i< jollyRoger.length; i++){
//     console.log(jollyRoger[i].tostring());
//         jollyRoger[i].talk();
//         jollyRoger[i].sing();

// }
// for(let i = 0; i< blackPearl.length; i++){
//     console.log(blackPearl[i].tostring());
//         blackPearl[i].drink();
//         blackPearl[i].sing();
// }
// //ex3
// // class Car{
// //     constructor(number){
// // this.number= number;
// //     }
// // }
// // const fighter = []
// // for(let i = 0; i < 100; i++){
// //     fighter.push(new Car(i));
// // }
// // console.log(fighter)
// // console.log('\n')



// // // ===== Ex. 4 =====
// // class Governor {
// //     static hasOffice = true
// //     static writesLaws = true
// //     pressConference() {
// //       console.log('Giving press conference')
// //     }
// //     addressPeople() {
// //       console.log('Addressing people in the state')
// //     }
// //   }
// //   class Person {
// //     constructor(breath, drink, eat) {
// //       Person.breath = breath
// //       Person.drink = drink
// //       Person.eat = eat
// //     }
// //     isBreating() {
// //       console.log('I’m breating')
// //     }
// //     isDrinking() {
// //       console.log('Im drinking')
// //     }
// //     isEating() {
// //       console.log('I’m eating')
// //     }
// //   }
// //   class PostalWorker extends Person {
// //     constructor(name) {
// //       super()
// //       this.name = name
// //     }
// //     openMailbox() {
// //       return `${this.name} is opening the mailbox`
// //     }
// //     checksName() {
// //       return `${this.name} is checking name on mail`
// //     }
// //     deliveringMail() {
// //       return `${this.name} is delivering the mail`
// //     }
// //   }
 
// //   const Arrj = new PostalWorker('Aranjyothi')
// //   console.log(Arrj.openMailbox())
// //   console.log(Arrj.checksName())
// //   console.log(Arrj.deliveringMail())

// //   const Chris = new PostalWorker('Chris')
// //   console.log(Chris.openMailbox())
// //   console.log(Chris.checksName())
// //   console.log(Chris.deliveringMail())
// //   class Chef extends Person {
// //     constructor(name, food) {
// //       super()
// //       this.name = name
// //       this.food = food
// //     }
// //     preparesFood() {
// //       return `chef ${this.name} preparing ${this.food}`
// //     }
// //     cooksFood() {
// //       return `chef ${this.name} is cooking ${this.food}`
// //     }
// //     presentsFood() {
// //       return `chef ${this.name} presents ${this.food}`
// //     }
// //   }
 
// //     const Joshua = new Chef('Joshua', 'pizza')
// //         console.log(Joshua)
// //             console.log(Joshua.preparesFood())
// //             console.log(Joshua.cooksFood())
// //             console.log(Joshua.presentsFood())

// //     const John = new Chef('John', 'chicken curry')
// //             console.log(John)
// //         console.log(John.preparesFood())
// //         console.log(John.cooksFood())
// //         console.log(John.presentsFood())


// //   //Ex
// class BankAccount {
//     // ownerName: 'Usman',
//     // balance: 1000000,
//     // acctNum: 485687932
//     constructor(accName, balance) {
//       this.accName = accName;
//       this.balance = balance;
//       this.acctNum = Math.floor(Math.random() * 1000)
//     } 
//     deposit(depositedAmount) {
//       this.balance += depositedAmount
//       console.log('current balance after depositing ' + depositedAmount + " is: " + this.balance)
//     }
//     withdraw(withdrawnAmount) {
//       this.balance -= withdrawnAmount
//       console.log('current balance after withdrawing ' + withdrawnAmount + " is: " + this.balance)
//     }
//   }
//   class CheckingAccount extends BankAccount {
//     constructor(accName, balance, overdraftEnabled = true) {
//       super(accName, balance) // calls the constructor from parent class (Bank Account)
//       this.overdraftEnabled = overdraftEnabled;
//     }
//     withdraw(amount) { 
//       if (amount > this.balance) {
//         if (this.overdraftEnabled) {
//           let overdraftFee = 20
//           this.balance -= (amount + overdraftFee)
//           console.log('this transaction overdrafts your balance :(')
//         } else {
//           console.log('you cannot withdraw more than you have')
//         }
//       } else {
//         this.balance -= amount
//         console.log('current balance after withdrawing ' + amount + " is: " + this.balance)
//       }
//     }
//   }
//   class SavingsAccount extends BankAccount {
//     withdraw() {
//       console.log('you cannot withdraw from this savings account :(')
//     }
//   }
//   const lucas = new BankAccount('Lucas', 1000000)
//   const usman = new CheckingAccount('Usman', 1000000)
//   const stephin = new SavingsAccount('Stephin', 5)
//   // console.log(lucas)
//   // console.log(usman)
//   // console.log(stephin)
//   lucas.withdraw(1000)
//   usman.withdraw(2000000)
//   stephin.withdraw(4) 



class Hamster {
    constructor(name) {
      this.owner = "";
      this.name = name;
      this.price = 15;
    }
    wheelRun() {
      console.log('squeak squeak')
    }
    eatFood() {
      console.log('nibble nibble')
    }
    getPrice() {
      return this.price
    }
  }
  
class Person {
constructor(name){
    this.name = name;
    this.age = 0;
    this.height= 0;
    this.weoght = 0;
    this.mood = 0;
    this.hamster = [];
    this.bankAccount = 0;
}
getName(){
    return this.name;
}
getAge(){
    return this.age;
}
getWeight(){
    return this.Weight;
}
greet(){
    console.log('good mornign' + this.name)
}
eat(){
    this.weight++
    this.mood++
}
exercise(){
    this.weight--
}
ageUp(nage,nheight,nweight,dmood,naccount){
    this.age ++
    this.height ++
    this.weight ++;
    this.mood ++
    this.bankAccount +=10
}
buyHamster(hamster){
    this.hamster.push(hamster)
    this.mood += 10;
    this.bankAccount -=
    hamster.getPrice()
}
}
// const newPerson = new Person('jyothi');
// console.log('jyothi');
const timmy = new Person('Timmy');
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()

timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()

timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()

for(let i = 0; i< 9; i++){
    timmy.ageUp()
}
const hamster1 = new Hamster('Gus')
hamster1.owner = 'Timmy'
timmy.buyHamster(hamster1)
for(let i = 0; i < 15; i++){
    timmy.ageUp()
}
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()
console.log( timmy)


class Dinner {
    constructor(appetizer,entree,dessert){
        this.appetizer  =appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}
class Chef {
    createDinner(appetizer,entree,dessert) {
    const newDinner = new Dinner(appetizer,entree,dessert);
        return newDinner;
}
}
const newChef = new Chef();
const dinner = newChef.createDinner("fries","pizza","icecream");

console.log(dinner)
console.log(dinner)
console.log(dinner)