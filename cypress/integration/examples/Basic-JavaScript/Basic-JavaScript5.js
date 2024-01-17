// JavaScript Objects - a collection of properties
let person = {
    firstName: 'Yogesh',
    lastName: 'Borole',
    age: 25,
    fullName: function () {
        // 'this' represents the current object
        console.log(this.firstName + ' ' + this.lastName);
    }
}

// Calling the 'fullName' method of the 'person' object
console.log(person.fullName()); // Output: Yogesh Borole

// Accessing the 'lastName' property of the 'person' object
console.log(person.lastName); // Output: Borole

// Accessing the 'lastName' property using array notation (not recommended unless the property name is dynamic)
console.log(person['lastName']); // Output: Borole

// Changing the 'firstName' property at runtime
person.firstName = 'Yoga';
console.log(person.firstName); // Output: Yoga

// Adding a new property 'gender' to the 'person' object
person.gender = 'Male';
console.log(person); // Output: { firstName: 'Yoga', lastName: 'Borole', gender: 'Male' }

// Deleting the 'lastName' property from the 'person' object
delete person.lastName;
console.log(person); // Output: { firstName: 'Yoga', gender: 'Male' }

// Checking if the 'lastName' property exists in the 'person' object
console.log('lastName' in person); // Output: false

// Printing all the values of the 'person' object using a 'for...in' loop
for (let key in person) {
    console.log(person[key]); // Output: Yoga Male
}
