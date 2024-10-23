// Step 1: Prompt user for the number of students
let numberOfStudents = prompt("Enter the number of students:");

// Step 2: Create an array to store student objects
let students = [];

// Step 3: For each student
for (let i = 0; i < numberOfStudents; i++) {
    // Prompt user for student name, age, and grades
    let name = prompt("Enter the name of student " + (i + 1) + ":");
    let age = prompt("Enter the age of " + name + ":");
    
    let mathGrade = parseFloat(prompt("Enter " + name + "'s Math grade:"));
    let scienceGrade = parseFloat(prompt("Enter " + name + "'s Science grade:"));
    let englishGrade = parseFloat(prompt("Enter " + name + "'s English grade:"));
    
    // Calculate average grade
    let averageGrade = (mathGrade + scienceGrade + englishGrade) / 3;
    
    // Store student data in an object
    let student = {
        name: name,
        age: age,
        averageGrade: averageGrade
    };
    
    // Add object to the array
    students.push(student);
}

// Step 4: Display a summary of all students
console.log("Summary of Students:");
students.forEach(student => {
    console.log("Name: " + student.name + ", Age: " + student.age + ", Average Grade: " + student.averageGrade);
});

// Step 5: Find and display the student with the highest average grade
let highestStudent = students[0];
for (let student of students) {
    if (student.averageGrade > highestStudent.averageGrade) {
        highestStudent = student;
    }
}
console.log("Student with the highest average grade: " + highestStudent.name + " with an average grade of " + highestStudent.averageGrade);


 
