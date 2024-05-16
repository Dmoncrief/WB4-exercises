"use strict";

// Declare an array containing objects of items and their prices
let lunch = [
    {item:"steak Fajitas", price: 9.95 },
    {item:"Chips and Guacamole", price: 5.25},
    {item:"Sweet Tea", price: 2.79}
];

// Function to calculate subtotal, tax, tip, and total
function calculateBill(items) {
    let subtotal = 0; // Define subtotal here

    // Loop through the array to calculate subtotal 
    for (let i = 0; i < items.length; i++) {
        subtotal += items[i].price;
    }

    const taxRate = 0.08;
    const tipRate = 0.18;
    
    // Calculate tax and tip
    const tax = subtotal * taxRate;
    const tip = subtotal * tipRate;

    // Calculate total bill
    const total = subtotal + tax + tip;

    return {
        subtotal: subtotal,
        tax: tax,
        tip: tip,
        total: total
    };
}

// Example usage:
const billDetails = calculateBill(lunch);
console.log("Subtotal:", billDetails.subtotal);
console.log("Tax:", billDetails.tax);
console.log("Tip:", billDetails.tip);
console.log("Total:", billDetails.total);
