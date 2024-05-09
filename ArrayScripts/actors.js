"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
   
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];
   // Who is the Academy Member whose ID is 187
let member187;
for (let i = 0; i < academyMembers.length; i++) {
    if (academyMembers[i].mem === 187) {
        member187 = academyMembers[i].name;
        break;
    }
}

console.log("Academy Member with ID 187:" , member187);

// Who has have been in at least 3 films?

let atLeastThreeFilms = [];
for (let i= 0; i < academyMembers.length; i++) {
    if (academyMembers[i].films.length >= 3) {
        atLeastThreeFilms.push(academyMembers[i].name);
    }
}

console.log("Members who have been in atleast 3 films:" , atLeastThreeFilms);

// Who has a name that starts with "Bob"?
let nameStartsWithBob = [];
for (let i = 0; i < academyMembers.length; i++) {
    if (academyMembers[i].name.startsWith("Bob")) {
        nameStartsWithBob.push(academyMembers[i].name);
    }
}
console.log("Members whose name starts with 'Bob' :" , nameStartsWithBob);


// HARDER: Which Academy Members have been in a film




// that starts with "A"

let filmsStartsWithA = [];
for (let i = 0; i < academyMembers.length; i++) {
    for (let j = 0; j < academyMembers[i].films.length; j++) {
        if (academyMembers[i].films[j][0] === "A") {
            filmsStartsWithA.push(academyMembers[i].name);
            break;
        }
    }
}
 console.log("Members who have been in a film starting with 'A':", filmsStartsWithA);