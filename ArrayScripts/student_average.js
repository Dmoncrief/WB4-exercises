"use strict"

// Declare an array of student objects
let students = [
    {name:"Zephaniah", scores: [100, 96, 99, 92]},
    {name:"Pursalane", scores: [92, 89, 96, 100, 94]},
    {name:"Siddalee", scores: [ 86, 72, 92]},
    {name:"Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name:"Elisha", scores: [89,100]},
    {name:"Ezra", scores: [ 100, 99, 100, 87]}
];


// Outer loop to iterate over each student
for (let i = 0; i < students.length; i++) {

    let student = students[i];
    let total = 0;


// Inner loop to calculate the sum of scores for each student 
for (let j = 0; j < student.scores.length; j++) {
    total += student.scores[j];
}

// Calculate the average score for the student
let average = total / student.scores.length;

// Print the name and average score for each student
console.log(student.name + " `s average score is:" + average.toFixed(2));

}