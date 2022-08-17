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
console.log(cat2.hungry) 
//EX2
class pirate{
    constructor(name,beard){
        this.name = name;
        this.beard = beard;
        this.drunk = true;
    }
   talk(){
    console.log('yarrr')
    `${this.name} was `
   }
   drink(){
    this.drunk= true;
    console.log('slow down there Mate-y')
   }
}*/

//ex3
class Car{
    constructor(number){
this.number= number;
    }
}
const fighter = []
for(let i = 0; i < 100; i++){
    fighter.push(new Car(i));
}
console.log(fighter)
console.log('\n')



// ===== Ex. 4 =====
class Governor {
    static hasOffice = true
    static writesLaws = true
    pressConference() {
      console.log('Giving press conference')
    }
    addressPeople() {
      console.log('Addressing people in the state')
    }
  }
  class Person {
    constructor(breath, drink, eat) {
      Person.breath = breath
      Person.drink = drink
      Person.eat = eat
    }
    isBreating() {
      console.log('I’m breating')
    }
    isDrinking() {
      console.log('Im drinking')
    }
    isEating() {
      console.log('I’m eating')
    }
  }
  class PostalWorker extends Person {
    constructor(name) {
      super()
      this.name = name
    }
    openMailbox() {
      return `${this.name} is opening the mailbox`
    }
    checksName() {
      return `${this.name} is checking name on mail`
    }
    deliveringMail() {
      return `${this.name} is delivering the mail`
    }
  }
 
  const Arrj = new PostalWorker('Aranjyothi')
  console.log(Arrj.openMailbox())
  console.log(Arrj.checksName())
  console.log(Arrj.deliveringMail())

  const Chris = new PostalWorker('Chris')
  console.log(Chris.openMailbox())
  console.log(Chris.checksName())
  console.log(Chris.deliveringMail())
  class Chef extends Person {
    constructor(name, food) {
      super()
      this.name = name
      this.food = food
    }
    preparesFood() {
      return `chef ${this.name} preparing ${this.food}`
    }
    cooksFood() {
      return `chef ${this.name} is cooking ${this.food}`
    }
    presentsFood() {
      return `chef ${this.name} presents ${this.food}`
    }
  }
 
  const Joshua = new Chef('Joshua', 'pizza')
  console.log(Joshua)
  console.log(Joshua.preparesFood())
  console.log(Joshua.cooksFood())
  console.log(Joshua.presentsFood())

  const John = new Chef('John', 'chicken curry')
  console.log(John)
  console.log(John.preparesFood())
  console.log(John.cooksFood())
  console.log(John.presentsFood())


//   //Ex
//   class Bankaccount{
//     constructor(ownerName, balance, ){
//         this.ownerName = ownerName
//         this.balance = balance
//         this.accNum = new Date().getMilliseconds()

//     }
//   }
//   class Checkingaccount{

//   }