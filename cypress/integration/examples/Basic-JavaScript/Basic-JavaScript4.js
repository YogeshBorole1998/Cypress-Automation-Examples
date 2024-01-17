// Declaring a variable 'day' with the string value 'tuesday'
let day = 'tuesday ';

// Outputting the length of the string using the 'length' property
console.log(day.length); // Output: 8

// Creating a substring 'subDay' using the 'slice' method
let subDay = day.slice(0, 4);
console.log(subDay); // Output: tues

// Accessing the character at index 1 in the 'day' string
console.log(day[1]); // Output: u

// Splitting the 'day' string into an array using the 'split' method with 's' as the delimiter
let splitDay = day.split('s');

// Outputting the length of the second element in the split array
console.log(splitDay[1].length); // Output: 4

// Outputting the second element in the split array
console.log(splitDay[1]); // Output: day

// Trimming any whitespace from the second element in the split array
console.log(splitDay[1].trim()); // Output: day

// Outputting the length of the trimmed second element in the split array
console.log(splitDay[1].trim().length); // Output: 3


// Declaring two variables 'date' and 'nextDate' with string values '16' and '31'
let date = '16';
let nextDate = '31';

// Converting strings to numbers and calculating the difference
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff); // Output: 15

// Converting the difference back to a string and outputting its data type
const convertedDiffType = diff.toString();
console.log(typeof convertedDiffType); // Output: string

// Concatenating the 'day' variable with the string " is Funday"
let newQuotes = day + " is Funday";
console.log(newQuotes); // Output: tuesday is Funday

// Finding the index of the substring 'day' in the 'newQuotes' string
let val = newQuotes.indexOf('day');
console.log(val); // Output: 4

// Counting the occurrences of the substring 'day' in the 'newQuotes' string
let count = 0;
let value = newQuotes.indexOf('day');

// Using a loop to iterate through the string and count occurrences
while (value !== -1) {
    count++;
    value = newQuotes.indexOf('day', value + 1);
}

// Outputting the total count of occurrences
console.log(count); // Output: 2
