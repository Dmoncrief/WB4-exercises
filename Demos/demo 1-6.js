"use strict"

let empl = {
    employerId: "1",
    name: "Ezra",
    jobTitle: " Theatre Teacher",
    payRate: 38.46

};



let emp2 = {
    employeeId: "2",
    name: "Elisha",
    jobTitle: "Game Programmer",
    payRate: 42.27
};


emp2.startDate = "2024-05-07";
console.log(emp2.jobTitle);

console.log(emp2["jobTitle"]);


console.log(emp1.startDate);

console.log(emp1);