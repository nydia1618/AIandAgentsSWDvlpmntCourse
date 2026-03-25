// Part 1 Exercises (use Copilot inline suggestions)

// Exercise 1: Comment-Driven Development
// Function to calculate the factorial of a number and print it to the console
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
}   
console.log("Factorial of 5:", factorial(5)); // Should print 120   

// Exercise 2: Array Operations
const mynumberlists = [1, 2, 3, 4, 5];

// Filter even numbers 
const evenNumbers = mynumberlists.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);



// Exercise 3: Function from Signature
// Type this on a new line and press Enter:
// function reverseString(str)

//Excercise 3: Function from Signature
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);    

// Exercise 4: Process User Data 
/**
 * Filters and processes user data to return only adult users.
 * 
 * @function processUserData
 * @param {Array<Object>} users - An array of user objects to be processed
 * @param {string} users[].name - The name of the user
 * @param {string} users[].email - The email address of the user
 * @param {number} users[].age - The age of the user
 * @returns {Array<Object>} An array of user objects containing only users aged 18 or older,
 *                          with their name and email properties
 * @description Iterates through the provided users array and creates a new array
 *              containing filtered user objects (name and email only) for users
 *              who are 18 years of age or older.
 * 
 * @example
 * const users = [
 *   { name: 'John', email: 'john@example.com', age: 25 },
 *   { name: 'Jane', email: 'jane@example.com', age: 16 }
 * ];
 * const adults = processUserData(users);
 * // Returns: [{ name: 'John', email: 'john@example.com' }]
 */
function processUserData(users) {
    return users
        .filter(user => user.age >= 18)
        .map(user => ({
            name: user.name,
            email: user.email
        }));
}

