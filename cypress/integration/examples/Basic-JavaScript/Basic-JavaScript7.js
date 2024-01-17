// # Explanations:
// - Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a class to acquire the properties and methods of another class.
// - One class can inherit from another class, and the class that inherits is known as the subclass or derived class (child class).
// - The class whose properties and methods are inherited is known as the superclass or parent class.
// - In this example, a class 'Pet' is created that extends (inherits from) the 'Person' class.

// Importing the 'Person' class from another file
const Person = require('../../examples/Basic-JavaScript/Basic-JavaScript6');

// Defining the 'Pet' class, which extends the 'Person' class
class Pet extends Person {
    // Overriding the getter method 'location' from the 'Person' class
    get location() {
        return 'Pakistan';
    }

    // Constructor method for the 'Pet' class, calling the constructor of the 'Person' class using 'super'
    constructor(firstName, lastName) {
        // Calling the constructor of the parent class ('Person') with the provided arguments
        super(firstName, lastName);
    }
}

// Creating an instance of the 'Pet' class
let pet = new Pet('Sama', 'Dharma');

// Accessing the 'fullName' method from the 'Person' class (inherited by 'Pet')
console.log(pet.fullName()); // Output: Sama Dharma

// Accessing the overridden 'location' property from the 'Pet' class
console.log(pet.location); // Output: Pakistan
