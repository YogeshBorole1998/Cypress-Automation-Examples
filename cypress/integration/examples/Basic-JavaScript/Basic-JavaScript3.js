// Using 'var' at the global level
var greet = 'Evening';


// Anonymous function declaration using 'function' keyword
function add(a, b) {
    // Using 'var' within the function scope, creates a new variable 'greet'
    var greet = 'Morning';
    return a + b;
}

// Calling the 'add' function and storing the result in the constant 'sum'
const sum = add(2, 5);

// Output the result of the addition
console.log(sum); // Output: 7

// Attempting to access 'greet' outside the function results in an error - Error - ReferenceError: greet is not defined
// because 'var' creates a function-scoped variable, and 'greet' is not defined here
console.log(greet); // Evening

// Explanation: var
// When 'var greet' is declared inside the function 'add', it creates a new variable 'greet' with function scope.
// This means that 'greet' is only accessible within the 'add' function.
// When attempting to access 'greet' outside the function, a ReferenceError occurs because 'greet' is not defined in this context.
// However, the global variable 'greet' declared outside any function is still accessible, and its value is 'Evening'.

// However, when 'var greet' is declared inside a block, like in this 'if' statement, it is not block-scoped, but function-scoped.
// Therefore, 'greet' is accessible outside the block, and its value is updated to 'Afternoon' within the block.

if (1 == 1) {
    var greet = 'Afternoon'; // Updating the function-scoped 'greet' variable within the block
}

console.log(greet); // Afternoon


// Explanation: let
// When 'let greet' is declared inside the 'add' function using the 'let' keyword, it creates a block-scoped variable.
// This means that 'greet' is only accessible within the block where it is declared (in this case, the 'add' function).

// When 'let greet' is declared inside a block, like in this 'if' statement, it is block-scoped.
// Therefore, 'greet' is not accessible outside the block, and attempting to access it outside the block would result in a ReferenceError.

if (1 == 1) {
    let greet = 'Afternoon'; // Creating a block-scoped variable 'greet' with the value 'Afternoon'
}

// Attempting to output the value of 'greet' outside the block would result in a ReferenceError.
// The 'let' keyword restricts the scope of 'greet' to the block where it is declared.

// Uncommenting the line below would result in an error:
// console.log(greet); // Output: ReferenceError: greet is not defined


// Explanation: const
// When 'const greet' is declared inside the 'add' function using the 'const' keyword, it creates a block-scoped constant variable.
// This means that 'greet' is only accessible within the block where it is declared (in this case, the 'add' function).

// When 'const greet' is declared inside a block, like in this 'if' statement, it is block-scoped.
// Therefore, 'greet' is not accessible outside the block, and attempting to access it outside the block would result in a ReferenceError.

if (1 == 1) {
    const greet = 'Afternoon'; // Creating a block-scoped constant variable 'greet' with the value 'Afternoon'
}

// Attempting to output the value of 'greet' outside the block would result in a ReferenceError.
// The 'const' keyword restricts the scope of 'greet' to the block where it is declared and ensures it cannot be reassigned.

// Uncommenting the line below would result in an error:
// console.log(greet); // Output: ReferenceError: greet is not defined

// Using a function expression (anonymous function assigned to a variable)
let sumOfIntegers = function (c, d) {
    return c + d;
}

// Output the result of the addition using the function expression
console.log(sumOfIntegers(2, 10)); // Output: 12

// Using an arrow function for a concise syntax
let sumOfNumbers = (c, d) => c + d;

// Output the result of the addition using the arrow function
console.log(sumOfNumbers(20, 5)); // Output: 25
