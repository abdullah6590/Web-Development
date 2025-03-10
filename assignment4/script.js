// 1. What is a function in JavaScript? Create a function to calculate the square of a number.
function square(number) {
    return number * number;
}

// 2. Write a function that takes two numbers as input and returns their product.
function product(a, b) {
    return a * b;
}

// 3. Declare an array of colors. Add a new color to the end and remove the first color.
let colors = ["red", "green", "blue"];
colors.push("yellow"); // Add a new color to the end
colors.shift(); // Remove the first color

// 4. Create an array of numbers and find the sum of all numbers using a loop.
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// 5. Create an object car with properties make, model, and year. Print each property.
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(car.make);
console.log(car.model);
console.log(car.year);

// 6. Write a function isEven() that checks if a number is even or odd.
function isEven(number) {
    return number % 2 === 0;
}

// 7. Create an array of student names. Use a loop to print each name.
let students = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// 8. Write a function that takes an array of numbers and returns the largest number.
function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// 9. Create an object person with properties firstName and lastName. Write a function to display the full name.
let person = {
    firstName: "John",
    lastName: "Doe"
};
function displayFullName(person) {
    return person.firstName + " " + person.lastName;
}

// 10. Write a program to reverse the elements of an array without using any built-in methods.
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// Example usage:
console.log(square(4)); // 16
console.log(product(3, 4)); // 12
console.log(colors); // ["green", "blue", "yellow"]
console.log(sum); // 15
console.log(isEven(4)); // true
console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(displayFullName(person)); // John Doe
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]