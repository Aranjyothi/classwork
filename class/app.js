//Jade class work...
class Vehicle {
    
        // vin: 'X123Y',
        // make: 'Boeing'
    
        // constructor() {}
    
        constructor(vinParam, makeParam, modelParam) {
            this.vin = vinParam;
            this.make = makeParam;
            this.model = modelParam;
            this.running = false;
            // console.log('creating a new instance of Vehicle')
        }
    
    
        goVroom() {
            console.log('vroom!')
        }
    
        start() {
            this.running = true;
            console.log('running')
        }
        
        // toString() {
        //     return 'Vehicle (' + this.vin + ') is a ' +
        //         this.make + ' model ' + this.model;
        // }
    
        toString() {
            return 'Vehicle (' + this.vin + ') is a ' +
                 this.make + ' model ' + this.model;
        }
    
    
    }
    
    // class Object { }
    // class Vehicle { }
    
    const toyota = new Vehicle('X123Y', 'Boeing', 'shine')
    const tesla = new Vehicle()
    
    // toyota.goVroom()
    // tesla.goVroom()
      // toyota.start()
    // tesla.start()
    
    // console.log(toyota, tesla)
    
    let arr = [1,2,3]
    let arr2 = new Array()
    
    // arr.forEach()
    
    console.log(toyota.toString())
    



// my class work...
class vehicle{
constructor(vinParam, makeParam, modelParam){
    this.vin = vinParam;
    this.make = makeParam;
    this.model= modelParam;
    this.running = true;
    this.stop = false
    console.log('creating a new instance of vehicle')
}
goVroom(){
    console.log('Vroom!')
}
start(){
    this.running = true;
    console.log('runnig')
}
stop(){
    this.stop=false;
    console.log('stoped...')
}
toString(){
    return console.log(this.vin, this.model)
}
}

// const toyota = new vehicle('start','middle','end')
// const honda = new vehicle()
// const v1 = new vehicle()
// console.log(toyota,honda);

toyota.goVroom()
honda.goVroom()

toyota.start()
honda.start()
console.log(toyota, honda)


//let arr = [1,2,3]


//secondhalf off the class 8/17

class Character {
    constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || false;  // short-circuit evaluation
​
      console.log('inside of Character constructor...')
    }
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!');
    }
    classyGreeting (otherClassyCharacter) {
      console.log('Howdy ' + otherClassyCharacter.name + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
​
    smite () {
      console.log('i smited thee.');
    }
  
  }
​
// child class and/or sub class
// use extend to inherit properties and methods 
// from parent and/or super class
class Hobbit extends Character {
    constructor(name, age, eyes, hair, height, weight) { // setup parameters...
        super(name, age, eyes, hair) // pass them as arguments...
        this.height = height
        this.weight = weight
        console.log('inside of Hobbit constructor...')
    }
    static steal() {
        console.log('woohoo!')
    }
    greet(name) {
        console.log('teeheee hi ' + name)
        super.smite()
​
        
    }
}
​
const frodo = new Hobbit('Frodo', 30, 'brown', 'black', 10, 100)
// console.log(frodo)
// frodo.greet('Sam')
​
​










