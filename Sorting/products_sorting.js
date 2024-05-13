"use strict"

supplierCode:productNumber-size
{
 supplierCode: "someValue",
 productNumber: "someValue",
 size: "someValue"
}
let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode +
 " Product Number: " + part1.productNumber +
 " Size: " + part1.size);

 
