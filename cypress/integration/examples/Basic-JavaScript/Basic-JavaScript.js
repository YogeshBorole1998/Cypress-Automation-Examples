// Print 'Hello Javascript' on the console
console.log('Hello Javascript'); // Output: Hello Javascript

// Declare a variable 'a' and assign the value 10
let a = 10;
console.log(a); // Output: 10
console.log(typeof (a)); // Output: number

// Declare a variable 'b' and assign the value 10.5
let b = 10.5;
console.log(b); // Output: 10.5
console.log(typeof (b)); // Output: number

// Declare a variable 'c' and assign the string 'Yogesh Borole'
let c = 'Yogesh Borole';
console.log(c); // Output: Yogesh Borole
console.log(typeof (c)); // Output: string

// Declare a variable 'required' and assign the boolean value true
let required = true;
console.log(required); // Output: true

// Uncommenting the line below will result in a SyntaxError because 'c' is already declared using let.
// let c = 'Cypresss';

// Note: We cannot redeclare a variable using 'let' within the same scope, but it's possible with 'var'.

// If-else statement 
const flag = true;

if (!flag) {
    // This block executes if the condition is false
    console.log('Condition Satisfied..!!');
} else {
    // This block executes if the condition is true
    console.log(flag);
    console.log('Condition Not Satisfied..!!');
}

// While loop
let i = 0;

while (i < 10) {
    // This block executes as long as the condition is true (i < 10)
    i++;
    console.log(i); // Output: 1 ... 10
}

// Do-While Loop
let count = 0;

do {
    // This block executes at least once, and then continues while the condition is true (count < 5)
    console.log('Count:', count); // Count: 0 ... Count: 4

    // Increment the count
    count++;
} while (count < 5); // 0 ... 4


// For Loop
for (let j = 0; j < 5; j++) {
    // This block executes as long as the condition is true (j < 5)
    console.log(j); // Output: 0 ... 4
}

