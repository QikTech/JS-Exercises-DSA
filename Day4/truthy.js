// Step 81

// The text has appeared again! This is because "false" is a string, which when evaluated to a boolean becomes true.
// This means "false" is a truthy value.

// A  truthy value is a value that is considered true when evaluated as a boolean. 
// Most of the values you encounter in JavaScript will be truthy.

// A falsy value is the opposite - a value considered false when evaluated as a boolean. 
// JavaScript has a defined list of falsy values. Some of them include false, 0, "", null, undefined, and NaN.

// Try changing your if condition to an empty string "", which is a falsy value.


/* 
TRUTHY and FALSY Values
falsy values
-> false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values
// "0", 'false', " ", [], {}, function(){}


*/
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// NULL / Nullish Coalescing Operator (??): checks null or undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")