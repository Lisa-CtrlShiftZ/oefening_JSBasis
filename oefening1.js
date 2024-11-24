const students = [
    { name: "Alice", age: 22, grade: "A", major: "Computer Science" },
    { name: "Bob", age: 20, grade: "B", major: "Mathematics" },
    { name: "Charlie", age: 23, grade: "A", major: "Physics" },
    { name: "Diana", age: 21, grade: "B", major: "Computer Science" },
    { name: "Eve", age: 19, grade: "C", major: "Biology" }
];

// Tasks:
// 1. Create an array of just student names
// 2. Filter students with grade "A"
// 3. Calculate the average age of all students
// 4. Create a new array with students' names in uppercase
// 5. Find the youngest student in the roster


//1
let studentNames = students.map(student => student.name);
console.log(studentNames);
//2
let studentAGrade = students.filter(student => student.grade == "A");
console.log(studentAGrade);
//3
let studentAge = students.reduce((ageSum, student) => ageSum + student.age, 0);
let amountOfStudents = students.length;
function averageAge(amountOfStudents, studentAge){
    let averageAge = studentAge / amountOfStudents;
    return averageAge; 
}

console.log(averageAge(amountOfStudents,studentAge))
 
//GPT OPLOSSING VARIANT
// function averageAge(students) {
//     let totalAge = students.reduce((sum, student) => sum + student.age, 0);
//     let amountOfStudents = students.length;
//     return totalAge / amountOfStudents;
// }

// console.log(averageAge(students));

//4
function namesToUppercase(students){
    const studentNames = students.map(student => student.name);
    const studentNamesToUppercase = studentNames.map(name => name.toUpperCase());
    return studentNamesToUppercase;
}

console.log(namesToUppercase(students)); 

//5
function getYoungestStudent(students){
    const ageArray = students.map(student => student.age);
    const sortedAgeArray = ageArray.toSorted((a, b) => a - b);
    return sortedAgeArray[0];
}

console.log(getYoungestStudent(students)); 
