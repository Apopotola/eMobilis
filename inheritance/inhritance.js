// In JavaScript, inheritance is a mechanism that allows a new class (a "subclass" or "child class") to inherit the properties and methods of an existing class (a "superclass" or "parent class"). This allows you to create a hierarchy of classes and reuse code, making your code more modular and maintainable. JavaScript uses prototypal inheritance, where objects can inherit from other objects.

// we have two types of inheritance in js

// 1. Prototype-based Inheritance:
// In JavaScript, every object has a prototype. When you access a property or method on an object, if the object itself doesn't have that property or method, JavaScript looks for it in the object's prototype. This chain continues until the prototype of Object, which is the base object in JavaScript.

// Example:

//  Parent class (superclass)
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

// Child class (subclass)
function Dog(name, breed) {
  // Call the constructor of the superclass
  Animal.call(this, name);
  this.breed = breed;
}

// Set up prototype chain for inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add a method specific to Dog
Dog.prototype.bark = function() {
  console.log('Woof! Woof!');
};

// Create instances
const myAnimal = new Animal('Generic Animal');
const myDog = new Dog('Buddy', 'Golden Retriever');

// Use inherited methods
myAnimal.sayHello(); // Output: Hello, I'm Generic Animal
myDog.sayHello();    // Output: Hello, I'm Buddy

// Use subclass-specific method
myDog.bark();        // Output: Woof! Woof!
// In this example:

// Animal is the parent class with a sayHello method.
// Dog is the child class that inherits from Animal using Object.create(Animal.prototype).
// Dog has its own method bark.
// Instances of Dog can access both Animal methods and Dog methods.
// 2. ES6 Class-based Inheritance:
// With the introduction of ES6, JavaScript now supports class syntax for creating objects and inheritance. The class syntax is syntactic sugar over the prototype-based inheritance.

// Example:

// Parent class (superclass)
class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

// Child class (subclass)
class Dog extends Animal {
  constructor(name, breed) {
    // Call the constructor of the superclass
    super(name);
    this.breed = breed;
  }

  // Add a method specific to Dog
  bark() {
    console.log('Woof! Woof!');
  }
}

// Create instances
const myAnimal = new Animal('Generic Animal');
const myDog = new Dog('Buddy', 'Golden Retriever');

// Use inherited methods
myAnimal.sayHello(); // Output: Hello, I'm Generic Animal
myDog.sayHello();    // Output: Hello, I'm Buddy

// Use subclass-specific method
myDog.bark();        // Output: Woof! Woof!
// In this example:

// Animal and Dog are defined using the ES6 class syntax.
// extends is used to create the inheritance relationship.
// The super keyword is used to call the constructor of the superclass.
// Both examples demonstrate inheritance in JavaScript, providing a way to create reusable and organized code. Choose the approach that fits your project and your coding style.




//  push github repo to erick.were@emobilis.org