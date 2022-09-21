// Singleton (do some research on this)
// class Car {
//   constructor (maker, serialNumber) {
//     this.serialNumber = serialNumber;
//     this.maker = maker
//   }
//   drive () {
//     console.log('Vroom Vroom');
//   }
// }
// class Factory {
//   constructor(company) {
//     this.company = company;
//     this.cars = [];
//   }
//   generateCar () {
//     const newCar = new Car(this.company, this.cars.length);
//     this.cars.push(newCar);
//     return this
//   }
//   findCar(index) {
//     return this.cars[index];
//   }
// }
// // only need one instance (Singleton)
// const tesla = new Factory('Tesla')

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
for(let i = 0; i<possibleIterable.length; i++){
  if(possibleIterable[i] % 3 === 0){
    divByThree;
  }
}
console.log(divByThree);