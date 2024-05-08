"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];


   // Which candies costs less than $4.00?
let cheapCandies = products.filter(product => product.price < 4.00);
console.log("candies that cost less than $4.00",cheapCandies);


// Which candies has "M&M" its name?
let mAndMCandies = products.filter(product => product.product.includes("M&M"));
console.log("Candies that have 'M&M' in their name:",mAndMCandies);

// Do we carry "Swedish Fish"?

let hasSwedishFish = products.some(product => product.product === "Swedish Fish");
console.log("Do we carry Swedish Fish?", hasSwedishFish ? "Yes" : "No");