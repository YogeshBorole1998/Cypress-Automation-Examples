// Creating an array with a length of 6 (empty slots)
var marks = Array(6);
console.log(marks); // Output: [ <6 empty items> ]

// Creating an array with specified values
var marks = new Array(20, 40, 35, 12, 7, 100);
console.log(marks); // Output: [ 20, 40, 35, 12, 7, 100 ]

// Creating an array using array literal
var marks = [20, 40, 35, 12, 7, 100];

// Slicing a portion of the array
subMarks = marks.slice(2, 5);
console.log(subMarks); // Output: [ 35, 12, 7 ]

// Accessing an element by index
console.log(marks[2]); // Output: 35

// Modifying an element by index
marks[3] = 14;
console.log(marks); // Output: [ 20, 40, 35, 14, 7, 100 ]

// Getting the length of the array
console.log(marks.length); // Output: 6

// Adding an element to the end of the array
marks.push(65);
console.log(marks); // Output: [ 20, 40, 35, 14, 7, 100, 65 ]

// Removing an element from the end of the array
marks.pop();
console.log(marks); // Output: [ 20, 40, 35, 14, 7, 100 ]

// Adding an element to the beginning of the array
marks.unshift(12);
console.log(marks); // Output: [ 12, 20, 40, 35, 14, 7, 100 ]

// Finding the index of a specific value
console.log(marks.indexOf(100)); // Output: 6

// Checking if a value exists in the array
console.log(marks.includes(100)); // Output: true

// Iterating through the array using a for loop
var sum = 0;
for (let index = 0; index < marks.length; index++) {
    console.log(marks[index]); // Outputs each element in the array
    sum = sum + marks[index];
}
console.log(sum); // Output: 228

// Using reduce to calculate the sum of array elements
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total); // Output: 228

// Filtering, mapping, and reducing an array
var scores = [12, 13, 14, 16];

// Filtering even numbers
var evenScores = scores.filter(score => score % 2 == 0);
console.log(evenScores); // Output: [ 12, 14, 16 ]

// Mapping each value to multiply by 3
let mappedArray = evenScores.map(score => score * 3);
console.log(mappedArray); // Output: [ 36, 42, 48 ]

// Reducing to calculate the sum of the mapped array
let totalVal = mappedArray.reduce((sum, val) => sum + val, 0);
console.log(totalVal); // Output: 126

// Chaining filter, map, and reduce for a concise operation
let sumValue = scores.filter(score => score % 2).map(score => score * 3).reduce((sum, val) => sum + val, 0);
console.log(sumValue); // Output: 39

// Sorting an array of strings
let fruits = ['Banana', 'Mango', 'Apple', 'Strawberry'];
console.log(fruits); // Output: [ 'Banana', 'Mango', 'Apple', 'Strawberry' ]

// Sorting the array alphabetically
fruits.sort();
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango', 'Strawberry' ]

// Sorting an array of numbers (as strings)
var scores1 = [12, 13, 19, 14, 11];
console.log(scores1.sort()); // Output: [ 11, 12, 13, 14, 19 ]

// Sorting an array of numbers in ascending order
scores1.sort(function (a, b) {
    return a - b;
});
console.log(scores1);  // Output: [ 11, 12, 13, 14, 19 ]

// Using arrow function for sorting in ascending order
console.log(scores1.sort((a, b) => a - b));  // Output: [ 11, 12, 13, 14, 19 ]

// Reversing the order of the 'fruits' array
console.log(fruits.reverse()); // Output: [ 'Strawberry', 'Mango', 'Banana', 'Apple' ]
