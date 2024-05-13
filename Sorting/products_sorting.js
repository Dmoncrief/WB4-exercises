"use strict"

// Function parse part code into an object

function parsePartCode(partCode) {
const parts = partCode.split("-");
const supplierCodeProductNumber = parts[0].split("-");
return {
    supplierCode: supplierCodeProductNumber[0],
    productNumber: supplierCodeProductNumber[1],
    size: parts[1]
};

}

// Array of part codes

const partCodes = [
    "XYX:1234-L",
    "ABC:5678-M",
    "DEF:9101-S"
];

//Dusplay original part codes

console.log("Original Part Codes:");
partCodes.forEach(partCode => {
    partCodes.forEach(partCode => {
        const part = parsePartCode(partCode);
        console.log("Supplier: " + part.supplierCode + 
            " Product Number: " + part.productNumber + 
            " size: " + part.size);
      
    })
});

// Draw a long dashed line
 console.log("--------------------------------------------------------------------------------------------------------");

 // Sort part codes ny descending price
 partCodes.sort((partCode1, partCode2) => {
    const productNumber1 = parsePartCode(partCode1).productNumber;
    const productNumber2 = parsePartCode(partCode2).productNumber;
    return productNumber2.localeCompare(productNumber1);

 });

 // Display sorted part codes

 console.log("Sorted Part Codes(Descending price):");
 partCodes.forEach(partCode => {
    const part = parsePartCode(partCode);
    console.log("Supplier: " + part.productNumber + 
        "Product Number: " + partproducttNumber + 
        "Size: " + part.size );
   
 });