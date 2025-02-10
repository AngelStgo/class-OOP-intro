
//* We use the Object.getPrototypeOf() static method to get the object's prototype

class Animal {}
class Cat extends Animal {}
class Tabby extends Cat {}
class SpottedTabby extends Tabby {}

//! not recomended to use
// const cat1 = new SpottedTabby();
// let object = cat1;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

const cat1 = new SpottedTabby();
const cat2 = new SpottedTabby();
const cat3 = new SpottedTabby();
const cat4 = new SpottedTabby();

console.log(cat1.breed); // undefined
console.log(cat2.breed); // undefined
console.log(cat3.breed); // undefined
console.log(cat4.breed); // undefined

Object.getPrototypeOf(cat1).breed = "Tabby";

console.log(cat1.breed); // Tabby
console.log(cat2.breed); // Tabby
console.log(cat3.breed); // Tabby
console.log(cat4.breed); // Tabby

// New instance has the same prototype.
const cat5 = new SpottedTabby();
console.log(cat5.breed); // Tabby

// Setting this directly on this instance.
cat5.breed = "Tabby"; 

delete Object.getPrototypeOf(cat1).breed;

console.log(cat1.breed); // undefined
console.log(cat2.breed); // undefined
console.log(cat3.breed); // undefined
console.log(cat4.breed); // undefined
// We only deleted the prototype's value, 
// this instance still has its value.
console.log(cat5.breed); // Tabby

// ==========================================

//* Object.create(obj) creates a new object with the parameter obj as its prototype:
const commPrototype = {
    introduce() {
      console.log("Hey there, I don't have a name because I'm just an example, but nice to meet you!");
    }
  };
  
  const person = Object.create(commPrototype);
  person.introduce(); // Hey there, I don't have a name because I'm just an example, but nice to meet you!

  Array.prototype.min = function () {
    return Math.min(...this);
  };
  Array.prototype.max = function () {
    return Math.max(...this);
  };
  
  const arr = [3, 8, 1, -10, 90, 77, 42];
  const min = arr.min();
  const max = arr.max();