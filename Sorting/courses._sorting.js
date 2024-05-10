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


// Sort courses by title
 courses.sort((a, b) => {
    const titleA = a.Title.toUpperCase();
    const titleB = b.Title.toUpperCase();
    if (titleA < titleB){
        return -1;
    }
    if (titleA > titleB) {
        return 1;
    }
     return 0;
 });

//  Display sorted list
courses.forEach(course => {
    console.log(`${course.CourseId}: ${course.Title}`);
})