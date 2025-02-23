// Home Task 3

// Number Guessing Game

// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
guess = Number(prompt("Guess a number between 1 and 10:"));
if (guess > randomNumber) {
console.log("Too high! Try again.");
} else if (guess < randomNumber) {
console.log("Too low! Try again.");
}
} while (guess !== randomNumber);
console.log("Congratulations! You guessed the correct number: " + randomNumber);


// 1. What is a conditional statement?
// A conditional statement allows a program to make decisions based on conditions.
// Examples include if, if-else, and switch statements.

// 2. Check if a number is positive, negative, or zero
let num = Number(prompt("Enter a number to check positive, negative, or zero :"));
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// 3. Difference between if-else and ternary operator
// if-else allows multiple statements, while the ternary operator is a shorthand for simple conditions.
// Example:
let result = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log(result);

// 4. Print all even numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 5. Check if a number is divisible by 5 using a while loop
let number = Number(prompt("Enter a number to check if it is divivble by 5:"));
while (number % 5 !== 0) {
    number = Number(prompt("Enter a number again:"));
}
console.log("The number is divisible by 5.");

// 6. Difference between while and do-while loops
// while checks the condition first, do-while executes at least once before checking the condition.
// Example:
let count = 0;
while (count < 3) {
    console.log("While Loop: " + count);
    count++;
}

do {
    console.log("Do-While Loop: " + count);
    count++;
} while (count < 3);

// 7. Print the multiplication table of a number using a for loop
let n = Number(prompt("Enter a number for multiplication table:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}

// 8. Count the number of digits in a given number using a while loop
let numDigits = Number(prompt("Enter a number:"));
let digitCount = 0;
while (numDigits > 0) {
    numDigits = Math.floor(numDigits / 10);
    digitCount++;
}
console.log("Number of digits: " + digitCount);

// 9. Print numbers from 10 to 1 using a for loop (reverse order)
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 10. Ask user for input numbers until the sum exceeds 100
let totalSum = 0;
while (totalSum <= 100) {
    totalSum += Number(prompt("Enter a number:"));
}
console.log("Sum exceeded 100. Total sum: " + totalSum);
