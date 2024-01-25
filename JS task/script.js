// Array Manipulation
// a. 
let numbers = [1, 2, 3, 4, 5];
console.log("Initial Array:", numbers);

// b. 
numbers.push(6);
console.log("Array after adding 6:", numbers);

// c. 
numbers.shift();
console.log("Array after removing the first element:", numbers);

// d. 
numbers.reverse();
console.log("Reversed Array:", numbers);

// e. 
let joinedNumbers = numbers.join(',');
console.log("Joined Array as a String:", joinedNumbers);

// f. Use the map function to create a new array (squaredNumbers) containing the square of each number in the numbers array.
let squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers Array:", squaredNumbers);

// String Manipulation
// a. Create a string variable named message with the value "Hello, World!".
let message = "Hello, World!";
console.log("Original Message:", message);

// b. Extract and log the substring "Hello" from the message.
let substringHello = message.substring(0, 5);
console.log("Substring 'Hello':", substringHello);

// c. Convert the entire string to uppercase.
let uppercasedMessage = message.toUpperCase();
console.log("Uppercased Message:", uppercasedMessage);

// d. Check if the string contains the word "World" (case-insensitive).
let containsWorld = message.toLowerCase().includes("world");
console.log("Contains 'World':", containsWorld);

// e. Replace "World" with your name in the string.
let replacedMessage = message.toLowerCase().replace("world", "Ayesha");
console.log("Message after Replacement:", replacedMessage);

// f. Use the map function to create an array of characters from the string.
let charArray = Array.from(message);
console.log("Array of Char", charArray);

// Math Operations
// a. Calculate the square root of 25.
let squareRoot = Math.sqrt(25);
console.log("Square Root of 25:", squareRoot);

// b. Generate a random number between 1 and 10 (inclusive).
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random Number between 1 and 10:", randomNum);

// c. Round 3.14159 to the nearest integer.
let roundedNum = Math.round(3.14159);
console.log("Rounded Number:", roundedNum);

// Set Operations
// a. Create two sets, set1 and set2, each containing three unique elements.
let set1 = new Set([1, 2, 3]);
let set2 = new Set([1, 2, 3]);
console.log("Set 1:", set1);
console.log("Set 2:", set2);

// b. Calculate the union of set1 and set2.
let unionSet = new Set([set1, set2]);
console.log("Union of s1 and s2:", unionSet);

// c. Check if set1 is a subset of set2.
let isSubset = [...set1].every(element => set2.has(element));
console.log("Is Set 1 a Subset of Set 2:", isSubset);

// d. Remove an element from set2.
set2.delete(2);
console.log("Remove from s2:", set2);

// e. Convert set1 to an array.
let arrayFromSet1 = Array.from(set1);
console.log("Array from Set 1:", arrayFromSet1);

// Map Operations
// a. Create an array named originalArray containing at least three numbers.
let originalArray = [5, 7, 10];
console.log("Original Array ", originalArray);

// b. Use the map function to create a new array (doubledArray) containing each number doubled.
let doubledArray = originalArray.map(num => num * 2);
console.log("Doubled Array:", doubledArray);
