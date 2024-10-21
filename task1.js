let numbersofstudent = 3;
let student = [];

student.push({
  student:1,
  name:"john",
  age:14,
  grade:{
    english:80,
  maths:95,
  science:70
},

avaragegrade:(80 + 95 +70)/3


//22
 });
 student.push({
  student:2,
  name:"james",
  age:15,
  grade:{
    english:85,
  maths:75,
  science:98
},

avaragegrade:(85 + 75 +98)/3

 });
 student.push({
  student:3,
  name:"Ada",
  age:17,
  grade:{
    english:95,
  maths:88,
  science:85
},

avaragegrade:(95 + 88 +85)/3

 });

 console.log("student summery:");
 student.forEach(function(student) {
  console.log("student:" + student.student);
  console.log("name:" + student.name);
  console.log("age:" + student.age);
  console.log("average grade:" + student.avaragegrade.toFixed(2));
 });

 let highestgradestudent = student [0];

 student.forEach(function(student) 
 {if (student.avaragegrade > highestgradestudent.avaragegrade) 
  {highestgradestudent = student;}});

 console.log("student with the highest avarage grade:");
 console.log("name:" + highestgradestudent.name);
 console.log( "age:" + highestgradestudent.age);
 console.log("Average Grade:" + highestgradestudent.avaragegrade.toFixed(2));

 
