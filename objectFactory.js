// Factory Function

const learnerFactory = (firstName, lastName, age) => {
    const introduce = () => console.log(`Hi, I'm ${firstName} ${lastName}!`);
    return { name: (firstName + ' ' + lastName), age, introduce }
  };
  
  const learner1 = learnerFactory('John', 'Seen', 46);
  
  // Constructor Function
  const Learner = (firstName, lastName, age) => {
    this.name = firstName + ' ' + lastName;
    this.age = age;
    this.introduce = () => console.log(`Hi, I'm ${firstName} ${lastName}!`);
  };
  
  const learner2 = new Learner('Ed', 'Dantes', 23);