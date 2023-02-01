"use strict";
let lname;
lname = "Daniel";
let newName = lname.toUpperCase();
// console.log(newName)
let age;
let dob = "25";
age = 25;
age = 25.5;
let result = parseInt(dob);
let isValid = false;
// console.log(isValid);
let empList;
empList = ["ABC", "bca", "BCa"];
let numList = []; //generics
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num < 5);
// results = numList.find((num) => num = 5) / can't assign undefined, results is a number array
results.slice(0).reverse().map((num) => numList.push(num));
console.log(numList);
