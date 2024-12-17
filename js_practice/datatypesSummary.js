
// primitives
// 7 categories
// String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100 
const scoreValue = 100.1

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 6458798456213456541655n

// Referance Types (Non Premitive)
// Array, Objects, Functions

//ARRAY
const instruments = ["guitar", "keyboard", "base"];

//OBJECTs
let myObj = {
    name: "prasad",
    age: 28,
}

//FUNCTIONS
const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);
