
// // // let numbers = [1,2,3,4,5,6]

// // // let squarenumbers= numbers.map(number=>number*number)
// // // console.log(squarenumbers)


// // // let number= [1, 2, 3,4,5,6]
// // // let squarenumber=number.map(number=>number*number)


// // let numbersofstudent = 3;
// // let student = [];

// // student.push({
// //   student:1,
// //   name:"john",
// //   age:14,
// //   grade:{
// //     english:80,
// //   maths:95,
// //   science:70
// // },

// // avaragegrade:(80 + 95 +70)/3


// // //22
// //  });
// //  student.push({
// //   student:2,
// //   name:"james",
// //   age:15,
// //   grade:{
// //     english:85,
// //   maths:75,
// //   science:98
// // },

// // avaragegrade:(85 + 75 +98)/3

// //  });
// //  student.push({
// //   student:3,
// //   name:"Ada",
// //   age:17,
// //   grade:{
// //     english:95,
// //   maths:88,
// //   science:85
// // },

// // avaragegrade:(95 + 88 +85)/3

// //  });

// //  console.log("student summery:");
// //  student.forEach(function(student) {
// //   console.log("student:" + student.student);
// //   console.log("name:" + student.name);
// //   console.log("age:" + student.age);
// //   console.log("average grade:" + student.avaragegrade.toFixed(2));
// //  });

// //  let highestgradestudent = student [0];

// //  student.forEach(function(student) 
// //  {if (student.avaragegrade > highestgradestudent.avaragegrade) 
// //   {highestgradestudent = student;}});

// //  console.log("student with the highest avarage grade:");
// //  console.log("name:" + highestgradestudent.name);
// //  console.log( "age:" + highestgradestudent.age);
// //  console.log("Average Grade:" + highestgradestudent.avaragegrade.toFixed(2));

// Step 1: Prompt user for the number of students
// let numberOfStudents = prompt("Enter the number of students:");

// // Step 2: Create an array to store student objects
// let students = [];

// // Step 3: For each student
// for (let i = 0; i < numberOfStudents; i++) {
//     // Prompt user for student name, age, and grades
//     let name = prompt("Enter the name of student " + (i + 1) + ":");
//     let age = prompt("Enter the age of " + name + ":");
    
//     let mathGrade = parseFloat(prompt("Enter " + name + "'s Math grade:"));
//     let scienceGrade = parseFloat(prompt("Enter " + name + "'s Science grade:"));
//     let englishGrade = parseFloat(prompt("Enter " + name + "'s English grade:"));
    
//     // Calculate average grade
//     let averageGrade = (mathGrade + scienceGrade + englishGrade) / 3;
    
//     // Store student data in an object
//     let student = {
//         name: name,
//         age: age,
//         averageGrade: averageGrade
//     };
    
//     // Add object to the array
//     students.push(student);
// }

// // Step 4: Display a summary of all students
// console.log("Summary of Students:");
// students.forEach(student => {
//     console.log("Name: " + student.name + ", Age: " + student.age + ", Average Grade: " + student.averageGrade);
// });

// // Step 5: Find and display the student with the highest average grade
// let highestStudent = students[0];
// for (let student of students) {
//     if (student.averageGrade > highestStudent.averageGrade) {
//         highestStudent = student;
//     }
// }
// console.log("Student with the highest average grade: " + highestStudent.name + " with an average grade of " + highestStudent.averageGrade);
 

// const readline = require('readline-sync');

// // Step 1: Prompt user for the number of students
// let numberOfStudents = parseInt(readline.question("Enter the number of students: "));

// // Step 2: Create an array to store student objects
// let students = [];

// // Step 3: For each student
// for (let i = 0; i < numberOfStudents; i++) {
//     // Prompt user for student name, age, and grades
//     let name = readline.question("Enter the name of student " + (i + 1) + ": ");
//     let age = parseInt(readline.question("Enter the age of " + name + ": "));
    
//     let mathGrade = parseFloat(readline.question("Enter " + name + "'s Math grade: "));
//     let scienceGrade = parseFloat(readline.question("Enter " + name + "'s Science grade: "));
//     let englishGrade = parseFloat(readline.question("Enter " + name + "'s English grade: "));
    
//     // Calculate average grade
//     let averageGrade = (mathGrade + scienceGrade + englishGrade) / 3;
    
//     // Store student data in an object
//     let student = {
//         name: name,
//         age: age,
//         averageGrade: averageGrade
//     };
    
//     // Add object to the array
//     students.push(student);
// }

// // Step 4: Display a summary of all students
// console.log("Summary of Students:");
// students.forEach(student => {
//     console.log("Name: " + student.name + ", Age: " + student.age + ", Average Grade: " + student.averageGrade.toFixed(2));
// });

// // Step 5: Find and display the student with the highest average grade
// let highestStudent = students[0];
// for (let student of students) {
//     if (student.averageGrade > highestStudent.averageGrade) {
//         highestStudent = student;
//     }
// }
// console.log("Student with the highest average grade: " + highestStudent.name + " with an average grade of " + highestStudent.averageGrade.toFixed(2));


let name1 = andrew

function greet (name1) {
  console.log('Good morning ' +name1)
}

greet();



function greet(name1) {
  console.log('Good morning ' + name1);
}

greet('Andrew'); // Use quotes to pass 'Andrew' as a string
