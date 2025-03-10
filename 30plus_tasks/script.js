// 1. Print Hello World with a twist
console.log("Hello Universe!");

// 2. Add two numbers with user input
let num1 = 7, num2 = 3;
let sum = num1 + num2;
console.log(`Sum of ${num1} and ${num2} is: ${sum}`);

// 3. Square root of a number with rounding
let number = 30;
let sqrt = Math.sqrt(number).toFixed(2);
console.log(`Square root of ${number} is approximately: ${sqrt}`);

// 4. Calculate the area of a Triangle with a custom message
let base = 8, height = 6;
let area = (base * height) / 2;
console.log(`The area of a triangle with base ${base} and height ${height} is: ${area}`);

// 5. Swapping of two numbers using multiplication and division
let x = 5, y = 10;
x = x * y; // x = 50
y = x / y; // y = 5
x = x / y; // x = 10
console.log(`After swapping: x = ${x}, y = ${y}`);

// 6. Convert Kilometres to Miles with a fixed decimal
let km = 15;
let miles = (km * 0.621371).toFixed(2);
console.log(`${km} km = ${miles} miles`);

// 7. Convert Celsius to Fahrenheit with a custom message
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C feels like ${fahrenheit}°F`);

// 8. Check if a number is Positive, Negative, or Zero with a twist
let num = -7;
if (num > 0) {
    console.log(`${num} is a positive number.`);
} else if (num < 0) {
    console.log(`${num} is a negative number.`);
} else {
    console.log(`${num} is zero.`);
}

// 9. Generate a Random Number between 1 and 100
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number between 1 and 100: ${randomNum}`);

// 10. Check if a Number is Odd or Even with a twist
let checkNum = 12;
console.log(`${checkNum} is ${checkNum % 2 === 0 ? "even" : "odd"}.`);

// 11. Check Prime Number with a custom message
let primeNum = 17;
let isPrime = true;
if (primeNum <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(primeNum); i++) {
        if (primeNum % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(`${primeNum} is${isPrime ? "" : " not"} a prime number.`);

// 12. Find the Largest Among Three Numbers with a twist
let a = 5, b = 10, c = 7;
let largest = Math.max(a, b, c);
console.log(`The largest number among ${a}, ${b}, and ${c} is: ${largest}`);

// 13. Find the Factorial of a Number with a custom message
let factorialNum = 6;
let factorial = 1;
for (let i = 1; i <= factorialNum; i++) {
    factorial *= i;
}
console.log(`Factorial of ${factorialNum} is: ${factorial}`);

// 14. Find the Factorial of a Number Using Recursion with a twist
function factorialRecursive(n) {
    return n === 0 || n === 1 ? 1 : n * factorialRecursive(n - 1);
}
console.log(`Factorial of 5 using recursion is: ${factorialRecursive(5)}`);

// 15. Print the table of any user-defined number using function with a twist
function printTable(num) {
    console.log(`Table of ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
printTable(7);

// 16. Find Armstrong Number in an Interval with a twist
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

console.log("Armstrong numbers between 100 and 999:");
for (let i = 100; i <= 999; i++) {
    if (isArmstrong(i)) {
        console.log(i);
    }
}

// 17. Check if the Numbers Have Same Last Digit with a twist
let numA = 123, numB = 456;
console.log(`Do ${numA} and ${numB} have the same last digit? ${numA % 10 === numB % 10 ? "Yes" : "No"}`);

// 18. Check Palindrome using array Methods with a twist
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(`Is "madam" a palindrome? ${isPalindrome("madam")}`);

// 19. Check Palindrome using for loop with a twist
function isPalindromeLoop(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(`Is "racecar" a palindrome? ${isPalindromeLoop("racecar")}`);

// 20. Check the Number of Occurrences of a Character in the String with a twist
let str = "hello world";
let char = "l";
let count = str.split(char).length - 1;
console.log(`The character "${char}" occurs ${count} times in "${str}".`);

// 21. Check Whether a String Starts and Ends With Certain Characters with a twist
let checkStr = "Hello Universe";
console.log(`Does "${checkStr}" start with "Hello"? ${checkStr.startsWith("Hello")}`);
console.log(`Does "${checkStr}" end with "World"? ${checkStr.endsWith("World")}`);

// 22. Check Whether a String Contains a Substring with a twist
let mainStr = "Hello Universe";
let subStr = "Universe";
console.log(`Does "${mainStr}" contain "${subStr}"? ${mainStr.includes(subStr)}`);

// 23. Convert the First Letter of a String into UpperCase with a twist
let sentence = "hello universe";
let capitalized = sentence.charAt(0).toUpperCase() + sentence.slice(1);
console.log(`Capitalized: ${capitalized}`);

// 24. Count the Number of Vowels in a String using Regex with a twist
let vowelStr = "Hello Universe";
let vowelCount = vowelStr.match(/[aeiou]/gi).length;
console.log(`Number of vowels in "${vowelStr}": ${vowelCount}`);

// 25. Find Armstrong Numbers between interval with a twist
console.log("Armstrong numbers between 100 and 999:");
for (let i = 100; i <= 999; i++) {
    if (isArmstrong(i)) {
        console.log(i);
    }
}

// 26. Find sum of natural numbers using recursion with a twist
function sumNatural(n) {
    return n === 1 ? 1 : n + sumNatural(n - 1);
}
console.log(`Sum of first 5 natural numbers: ${sumNatural(5)}`);

// 27. Find the factors of a number with a twist
let factorNum = 24;
console.log(`Factors of ${factorNum}:`);
for (let i = 1; i <= factorNum; i++) {
    if (factorNum % i === 0) {
        console.log(i);
    }
}

// 28. Make a simple calculator using switch case with a twist
let operator = "*";
let calcNum1 = 5, calcNum2 = 10;
switch (operator) {
    case "+":
        console.log(`${calcNum1} + ${calcNum2} = ${calcNum1 + calcNum2}`);
        break;
    case "-":
        console.log(`${calcNum1} - ${calcNum2} = ${calcNum1 - calcNum2}`);
        break;
    case "*":
        console.log(`${calcNum1} * ${calcNum2} = ${calcNum1 * calcNum2}`);
        break;
    case "/":
        console.log(`${calcNum1} / ${calcNum2} = ${calcNum1 / calcNum2}`);
        break;
    default:
        console.log("Invalid operator");
}

// 29. Print Fibonacci sequence with a twist
let fibN = 10;
let fibA = 0, fibB = 1;
console.log(`Fibonacci sequence up to ${fibN} terms:`);
for (let i = 0; i < fibN; i++) {
    console.log(fibA);
    [fibA, fibB] = [fibB, fibA + fibB];
}

// 30. Replace characters of a string with a twist
let replaceStr = "Hello World";
let newStr = replaceStr.replace("World", "Galaxy");
console.log(`Replaced string: ${newStr}`);

// 31. Reverse a string using for loop with a twist
let reverseStr = "Hello Universe";
let reversedStr = "";
for (let i = reverseStr.length - 1; i >= 0; i--) {
    reversedStr += reverseStr[i];
}
console.log(`Reversed string: ${reversedStr}`);

// 32. Sort words in alphabetical order with a twist
let words = ["banana", "apple", "cherry"];
words.sort();
console.log(`Sorted words: ${words.join(", ")}`);