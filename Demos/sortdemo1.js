"use Strict"



function compareAscendingNumber(a,b){
    if(a < b){
        return -1;
    }
    else if ( a == b ) {
        return 0;
    }
    else {
        return 1;
    }
}




let students = [ "Natalie","Brittany", "Monse","Zana", "Ian", "Tracie","Yoseph","Adama","Juian"];
let numbers = ["11", "26","67", "38"];

console.log("BEFORE")
console.log(students);

students.sort();


console.log();
console.log("AFTER");
console.log(students)



console.log("BEFORE")
console.log(numbers);


numbers.sort(compareAscendingNumber);


functioncaseInsensitiveCompare(a, b){
    let aAsUpper = a.toUpperCase();
    let bAsUpper = b.toUpperCase();
    if ( aAsUpper < bAsUpper) { return -1;}
    else if (aAsUpper == bAsUpper ) {return 0;}
    else { return 1;}
}

numbers.sort(function (a,b){ return a - b});
numbers.sort( (a,b) => a - b);

console.log();
console.log("AFTER");
console.log(numbers)
