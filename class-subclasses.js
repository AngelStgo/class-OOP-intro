//  == Class and Subclasses ==

class Animal {
	constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes;
    this.legs = legs; //TODO: define this. =
    this.isAwake = isAwake;
    this.isMoving = isMoving;
	  // return is not needed because the new object is returned by default
	}
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString(animal = 'Animal') { //TODO: define toString() =
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}

//  === Cat class ===
class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving); //TODO: define super =
    this.fur = fur;
  }
  speak() {
    super.speak("Meow..."); // What does super does in this code?
  }
  toString() {
    return super.toString("Cat");
  }
}

//  === Dog class ===
class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Woof!");
  }
  toString() {
    return super.toString("Dog");
  }
}

//  === Cow class ===
class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("Moo.");
  }
  toString() {
    return super.toString("Cow");
  }
}

const cat1 = new Cat("Orange", true, false);
const cat2 = new Cat("Black and White", false, false);
const dog1 = new Dog("Gold", true, true);
const cow1 = new Cow("Brown", true, false);

console.log(cat1);
console.log(cat2);
console.log(cow1);
console.log(dog1);

//  ================================================

//TODO: Using this example as inspiration, create a Human class that extends Animal.

class Human extends Animal {
  constructor(isAwake, isMoving, hair, first, last, age, occupation, city, state, zip) {
    super(2, 2, isAwake, isMoving);
    this.hair = hair;
    this.name = {
      first,
      last
    };
    this.age = age;
    this.occupation = occupation;
    this.location = {
      city: city,
      state: state,
      zip: zip
    }
  }
   introduce() { // dont use function keyword
    console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age} years old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
  };
}



const person1 = new Human(true, true, "brown", "Sergio", "Wesley", 32, "Barista", "Clarisa", "MN", 345672)

console.log(person1);
person1.introduce(); // remember to always create these functios inside Class, without the keyword: function
  


class Learner {
  #grades = [];
  #name = {
    first: '',
    last: '',
  }
  #age;

	constructor(firstName, lastName, age) {
		this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
	}
  get name() {
    return this.#name.first + ' ' + this.#name.last; 
  }
  get age() {
    return this.#age;
  }
  addGrades(...grades) {
    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    });
  }
}

const learner1 = new Learner('Leeroy', 'Jenkins', 18);