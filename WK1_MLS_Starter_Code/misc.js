// Part 1 Exercises (use Copilot inline suggestions)

// Exercise 1: Comment-Driven Development
// Function to calculate the factorial of a number and print it to the console
function factorial(n) {
    // Input validation
    if (typeof n !== 'number' || isNaN(n)) {
        throw new TypeError("Input must be a number");
    }
    if (n < 0) {
        throw new RangeError("Input must be a non-negative number");
    }
    if (!Number.isInteger(n)) {
        throw new Error("Input must be an integer");
    }

    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
}   
try {
    console.log("Factorial of 5:", factorial(5)); // Should print 120
} catch (error) {
    console.error("Error calculating factorial:", error.message);
}

// Exercise 2: Array Operations
const mynumberlists = [1, 2, 3, 4, 5];

// Filter even numbers, square them, and find the sum
const evenNumbers = mynumberlists.filter(num => num % 2 === 0);
const squaredEvenNumbers = evenNumbers.map(num => num * num);
const sumOfSquaredEvens = squaredEvenNumbers.reduce((acc, curr) => acc + curr, 0);

console.log("Even Numbers:", evenNumbers);
console.log("Squared Even Numbers:", squaredEvenNumbers);
console.log("Sum of Squared Even Numbers:", sumOfSquaredEvens);



// Exercise 3: Function from Signature
function reverseString(str) {
    // Input validation
    if (typeof str !== 'string') {
        throw new TypeError("Input must be a string");
    }

    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

// Example usage:
try {
    const originalString = "Hello, World!";
    const reversedString = reverseString(originalString);
    console.log("Original String:", originalString);
    console.log("Reversed String:", reversedString);    
} catch (error) {
    console.error("Error reversing string:", error.message);
}

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
    // Input validation
    if (!Array.isArray(users)) {
        throw new TypeError("Input must be an array");
    }

    try {
        return users
            .filter(user => {
                // Check if user is an object and has required age property
                if (!user || typeof user !== 'object') return false;
                return typeof user.age === 'number' && user.age >= 18;
            })
            .map(user => ({
                name: user.name || 'Unknown',
                email: user.email || 'No email'
            }));
    } catch (error) {
        console.error("Error processing user data:", error.message);
        return [];
    }
}
