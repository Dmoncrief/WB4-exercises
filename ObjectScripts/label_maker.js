"use strict"

let personalInfo = {
name: "Destiny Moncrief",
address: "1240 W Peachtree St NW",
City: "Atlanta",
state: "GA",
zip: "30309"
};




function printContact(personalInfo){
    console.log(personalInfo.name);
    console.log(personalInfo.address);
    console.log(`${personalInfo.city}, ${personalInfo.state} ${personalInfo.zip}`)


}
printContact(personalInfo);