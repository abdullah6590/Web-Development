// 1. What are variables in JavaScript?
// Variables in JavaScript are containers used to store data values. They are declared using var, let, or const.

// 2. What are the rules for naming variables?
// - Must start with a letter, underscore `_`, or dollar sign `$`
// - Cannot start with a number  
// - Can contain letters, numbers, underscores, and dollar signs  
// - Cannot use reserved JavaScript keywords (e.g., var, function, etc.)  
// - JavaScript is case-sensitive (myVar and myvar are different)  

// 3. What are the different data types in JavaScript?
// - Primitive Data Types: string, number, boolean, null, undefined, bigint, symbol
// - Non-primitive Data Types: object, array

// 4. What is the difference between == and ===?
// == (loose equality) compares values but not types (performs type coercion).
// === (strict equality) compares both values and types.

// Example:
// console.log(5 == "5"); // true
// console.log(5 === "5"); // false

// 5. Convert "10" to a number using JavaScript.
let num = Number("10"); // or parseInt("10");
// console.log(num); // Output: 10

// 6. What will be the output of 5 + "5"?
// console.log(5 + "5"); // Output: "55" (string)

// 7. What is the result of true && false?
// console.log(true && false); // Output: false

// 8. What is the difference between null and undefined?
// null: Intentional absence of value (type is object)
// undefined: Variable declared but not assigned a value (type is undefined)

// 9. What is the difference between alert, prompt, and confirm?
// alert(message): Displays a message with an "OK" button.
// prompt(message, default): Displays a message with an input field and "OK"/"Cancel".
// confirm(message): Displays a message with "OK"/"Cancel" and returns true or false.

// 10. Write a JavaScript script to swap two numbers.
let a = 5, b = 10;
// console.log(`Before Swap: a = ${a}, b = ${b}`);

// Swapping using a temporary variable
let temp = a;
a = b;
b = temp;

// console.log(`After Swap: a = ${a}, b = ${b}`);

// Alternative (Without Temp Variable)
let x = 5, y = 10;
// console.log(`Before Swap: x = ${x}, y = ${y}`);

[x, y] = [y, x]; // Swap using array destructuring

// console.log(`After Swap: x = ${x}, y = ${y}`);

//TASKS:

// Task 1: Variable Declaration & Usage
let name = "John";
let age = 25;
let isStudent = true;
// console.log(name, age, isStudent);

// Task 2: Type Conversion
let numStr = "100";
let boolStr = "true";
let convertedNum = Number(numStr);
let convertedBool = Boolean(boolStr);
// console.log(convertedNum, convertedBool);

// Task 3: Arithmetic Operations
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

alert(`Addition: ${sum}\nSubtraction: ${difference}\nMultiplication: ${product}\nDivision: ${quotient}`);

// Task 4: Null vs Undefined
let nullVar = null;
let undefinedVar;
// console.log(nullVar, undefinedVar);
// Null represents an intentional absence of value, while undefined means a variable has been declared but not assigned a value.

// Task 5: Logical Operators
let bool1 = Boolean(prompt("Enter first boolean value (true/false):"));
let bool2 = Boolean(prompt("Enter second boolean value (true/false):"));

let andResult = bool1 && bool2;
let orResult = bool1 || bool2;
let notResult1 = !bool1;
let notResult2 = !bool2;

alert(`AND: ${andResult}\nOR: ${orResult}\nNOT (first value): ${notResult1}\nNOT (second value): ${notResult2}`);

