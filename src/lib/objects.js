const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age
  };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  } else {
    return false
  };
};

const getAges = people => {
  const ages = [];
  for (let i = 0; i < people.length; i++) {
    ages.push(people[i].age);
  }
  return ages;
};

const findByName = (name, people) => {
  for (let i = 0; i < people.length; i++) {
    if (name === people[i].name) {
      return people[i];
    };
  }
};

const findHondas = cars => {
let Hondas = [];
 for (let i = 0; i < cars.length; i++) {
   if (cars[i].manufacturer === "Honda") {
     Hondas.push(cars[i]);
   };
 };
 return Hondas;
};

const averageAge = people => {
  let total = 0;
  for (let i = 0; i < people.length; i++) {
    total = total + people[i].age;
  }
  average = total / people.length;
  return average;
};

const createTalkingPerson = (name, age) => {
  this.name = name;
  this.age = age;
  this.introduce = function(them) {
      return "Hi " + them + ", my name is " + name + " and I am " + age + "!"
    };
    return this; //Using this lets you access parts from all over and add more to an object like here.
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
