// 1. Create an object student with properties like name, age, and marks (an array of subject marks)
let student = {
    name: "John Doe",
    age: 16,
    marks: [85, 90, 78, 92, 88]
};

// 2. Write a function calculateAverage() to calculate the average marks
function calculateAverage(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total / marks.length;
}

// 3. Display the student details and average marks
function displayStudentReport(student) {
    let averageMarks = calculateAverage(student.marks);
    console.log(`Student Name: ${student.name}`);
    console.log(`Student Age: ${student.age}`);
    console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
}

// Example usage:
displayStudentReport(student);