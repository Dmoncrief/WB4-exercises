"use strict"

let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
   
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7
    },
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
   
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5
    }
   ];

   // Which vehicles are RED? 
let redVehicles = []; 
for (let i = 0; i < vehicles.length; i++){
    if(vehicles[i].color === "Red") {
        redVehicles.push(vehicles[i]);
    }
}
console.log("Red Vehicles:" , redVehicles);


// Which vehicles have registrations that are expired?
let expiredVehicles =[];
let currentDate = new Date();
for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].registrationExpires < currentDate) {
        expiredVehicles.push(vehicles[i]);
    }
}
console.log("Expired Vehicles:", expiredVehicles);



// Which vehicles that hold at least 6 people?
let vehiclesWithCapacityAtLeast6 = [];
for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].capacity >= 6) {
        vehiclesWithCapacityAtLeast6.push(vehicles[i]);
    }
}
console.log("Vehicles with capacity atleast 6", vehiclesWithCapacityAtLeast6);




// Which vehicles have license plates that end with "222"?
let vehiclesWithLicenseEnding222 = [];
for (let i = 0; i < vehicles.length; i ++) {
  let licenseNo = vehicles[i].licenseNo;
  if (licenseNo.endsWith("222")) {
    vehiclesWithLicenseEnding222.push(vehicles[i]);
  }
}

console.log("Vehicles with license ending with 222", vehiclesWithLicenseEnding222);