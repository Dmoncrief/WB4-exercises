"use strict"

let courses = [ {


    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location:"Classrooom 7",
    StartDate:"09/08/22",
    Fee: "100.00",

},

{
    CourseId:"PROG200",
    Title:"Introduction to Javascript",
    Location:"Classroom 9",
    StartDate:"11/22/22",
    Fee:"350.00",
},

{
    CouseId:"PROG300",
    Title:"Introduction to Java",
    Location:"Classroom 1",
    StartDate:"01/09/23",
    Fee:"50.00",
},

{
    CouseId:"PROG400",
    Title:"Introduction to SQL and Databases",
    Location:"Classroom 7",
    StartDate:"03/16/23",
    Fee:"50.00",
},


{
    CouseId:"PROJ500",
    Title:"Introduction Angular",
    Location:"Classroom 1",
    StartDate:"04/25/23",
    Fee:"50.00",
},

];


// When does the PROG200 course start?
let PROJ200Course;
for (let i = 0; i < courses.length ; i++) {
    if(courses[i].CourseId == "PROG200"){
        PROJ200Course = courses[i];

 console.log(PROJ200Course.StartDate);
} 
}

// What is the title of the PROJ500 course?
let PROJ500Course;
for (let i = 0; i < courses.length; i++) {
  if (courses[i].CourseId === "PROJ500") {
    PROJ500Course = courses[i];
    console.log("PROJ500 Title:", PROJ500Course.Title);
    break; 
  }
}



// What are the titles of the courses that cost $50 or less?
console.log();
console.log("courses under $50");
let courseUnder50 = [];
for (let i = 0; i < courses.length ; i++){
    if(courses[i].Fee <= 50){
        courseUnder50.push(courses[i]);
    }
}

// What classes meet in "Classroom 1"?
console.log("Courses in Classroom 1:");
let coursesInClassroom1 = [];
for (let i = 0; i < courses.length; i++) {
  if (courses[i].Location === "Classroom 1") {
    coursesInClassroom1.push(courses[i].Title);
  }
}
console.log(coursesInClassroom1.join(", "));