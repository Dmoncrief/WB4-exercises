"use strict"

// Declare an array conatining objects of items and their prices
let lunch = [
    {item:"steak Fajitas", price: 9.95 },
    {item:"Chips and Guacamole", price: 5.25},
    {item:"Sweet Tea", price: 2.79}

];


// Function to calculate subtotal, tax, tip, and total
function calculateBill(items) {
    let subtotal = 0;

}

// Loop through the array to calculate subtotal 
 for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price;
 }

const taxRate = 0.08;
const topRate = 0.18;