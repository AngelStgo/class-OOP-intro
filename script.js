//  === Class ===

const person = {
    name: {
      first: 'Elyan',
      last: 'Kemble',
    },
    age: 32,
    location: {
      city: 'Garland',
      state: 'Texas',
      zip: 75040
    },
    occupation: 'Front-End Developer'
  }
  
  function introduce() {
    console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age} years old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
  }

  person.introduce = introduce;

person.introduce();



//*  == Defining Classes in JavaScript ==
// class Animal {} // use capital letter
    // Code to define the class's properties and methods
  

//   we create objects using the new keyword when invoking (instantiating) the class:
//   const v1 = new Animal();

//* == The Constructor Method ==
class Animal {
	constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes;
    this.legs = legs;
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
}

const cat1 = new Animal(2, 4, true, false);
const cat2 = new Animal(2, 4, false, false);
const dog1 = new Animal(2, 4, true, true);
const cow1 = new Animal(2, 4, true, false);

console.log(cat2);
console.log(cow1);

