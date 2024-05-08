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
let prog200StartDate = courses.find(course => course.CourseId === "PROG200").StartDate;
console.log("PROG200 course starts on:", prog200StartDate);

// What is the title of the PROJ500 course?
let proj500Title = courses.find(course => course.CourseId === "PROJ500").Title;
console.log("Title of PROJ500 course:", proj500Title);


// What are the titles of the courses that cost $50 or less?
let cheapCourses = courses.filter(course => parseFloat(course.Fee) <= 50);
let cheapCoursesTitles = cheapCourses.map(course => course.Title);
console.log("Courses that cost $50 or less:", cheapCoursesTitles);


// What classes meet in "Classroom 1"?
let classroom1Courses = courses.filter(course => course.Location === "Classroom 1");
let classroom1CourseTitles = classroom1Courses.map(course => course.Title);
console.log("Courses that meet in classroom 1:", classroom1CourseTitles);