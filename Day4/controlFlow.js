// https://www.youtube.com/watch?v=0P_YvC6Gg0c&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=26
// CONTROL FLOW 0R LOGIC CONTROL

// if

// if (condition is true then only code works){
// }
// if


// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// AND all has to be true
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

// OR one has to be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
