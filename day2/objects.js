// SINGLETON - MADE WITH CONSTRUCTORS

// OBJECT LITERALS

// WAYS TO CREATE OBJECTS
Object.create

// creating symbol
const mySymbol = Symbol('key1')

const jsUser = {
    name: "prasad",
    "full name": "prasad Sawant",
    [mySymbol]: "key1",
    age: 18,
    location: "mumbai",
    email: "prassaw@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "wednesday", "friday"],
}

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

// UPDATING OBJECT 
jsUser.email = "email@gmail.com"
// console.log(jsUser.email);

// TO RISTRICT THE OBJECT MODIFICATIONS
// Object.freeze(jsUser)
jsUser.email = "emailllll@gmail.com"
// console.log(jsUser.email);

jsUser.greeting = function(){
    console.log('HELLO JS USER');
}

// REFERANCING TO THE OBJECT PROPERTIES/VARIABLE
jsUser.greeting2 = function(){
    console.log(`HELLO JS USER: ${this.name}`);
}
console.log(jsUser.greeting2());
