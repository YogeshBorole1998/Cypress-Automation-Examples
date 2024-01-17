// JavaScript Classes introduced in ES6 provide a more structured way to create objects and define their behavior.

// Defining a class 'Person' and exporting it for use in other files
module.exports = class Person {
    // Class property with a default value
    age = 25;

    // Using a getter to retrieve the value of 'location'
    get location() {
        return 'India';
    }

    // Constructor method executed when an object is created
    constructor(firstName, lastName) {
        // Instance properties, specific to each object created from the class
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method within the class to return the full name
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

// Creating instances of the 'Person' class
let person = new Person('Yogesh', 'Borole');
let person1 = new Person('Shubham', 'Fegade');

// Accessing class properties and methods
console.log(person.age); // Output: 25
console.log(person.location); // Output: India

// Calling the 'fullName' method for each instance and outputting the result
console.log(person.fullName()); // Output: Yogesh Borole
console.log(person1.fullName()); // Output: Shubham Fegade


// Explanation:
// - In a class, you can define both class properties (shared among all instances) and instance properties (specific to each instance).
// - Getter methods provide a way to retrieve the value of a property in a controlled manner.
// - The constructor is a special method that is automatically executed when an object is created from the class.
// - Class instances (objects) can have their own unique data even though they share the same structure defined by the class.
// - Classes provide a blueprint for creating objects with consistent properties and methods.
// - Objects created from classes can be used in other files by exporting and importing them using module systems.
// - e.g.

// Exporting the 'Person' class to make it available for other files
// module.exports = Person;

// Importing the 'Person' class from the 'Person.js' file
// const Person = require('./Person');

