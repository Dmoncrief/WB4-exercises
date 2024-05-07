"use strict"
             //  0123456789   index numbers
let partcode1 = "ABC:1234-M";
let partcode2 = "XYZ:322-L";
let partcode3 = "ACME:6-5";


let thispartcode = partcode1;

// console.log(getSupplier(thispartcode));


// function parsePaartCode(partcode) {
//     let result = {
//         supplier: getSupplier(partcode),
//         productNumber: getproductNumber(partcode),
//         size: getSize(partcode)
//     };
//     return result
// }



function getSupplier(code) {
    let supplierIndexEnd = code.indexOf(":");
    let supplierName = code.substring(0 , supplierIndexEnd);
 
    return supplierName;
 
}


function getproductNumber(code) {

    let productNumberIndexBegining = code.indexOf(":")
    let productNumberIndexEnd = code.indexOf("-");
    let productNumber = code.substring(productNumberIndexBegining + 1, productNumberIndexEnd);
    
    return productNumber;
}



function getSize(code) {

    let productSizeIndexStart = code.indexOf("-");
    let productSize = code.substring(productSizeIndexStart + 1); 
 
 //    console.log(productSize);
 
    if (productSize == "L") {
     let sizeName = "large"
     let result = sizeName + " (" + productSize + ")" ;
 
     return result;
    } else if (productSize == "M") {
     let sizeName = "medium"
     let result = sizeName + " (" + productSize + ")" ;
 
     return result;
    } else if (!isNaN(productSize)) {
     let sizeName = "size"
     let result = sizeName + " (" + productSize + ")" ;
 
     return result;
    };
 }



console.log(getSupplier(thispartcode));

console.log(getproductNumber(thispartcode));

console.log(getSize(thispartcode));