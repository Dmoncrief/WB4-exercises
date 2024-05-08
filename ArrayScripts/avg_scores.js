"use strict"

// Declare two arrays of exam scores

let myScores = [92,98,84,76,89,99,100];
let yourScores = [82,98,94,88,92,100,100];

// Function to calculate the average of scores in an array
function getAverage(scores) {

    let sum = 0; 
    for (let i = 0; i < scores.length; i++) {

        sum += scores[i];

    }

    return sum / scores.length;

}

// Calculate and display average of my scores
const myAverage = getAverage(myScores);
console.log("My average score:", myAverage);

// Calculate and display average of your scores
const yourAverage = getAverage(yourScores);
console.log("Your average score:", yourAverage);