const accountId = 123456
let accountEmail = "email@gmail.com"
var accountPassword = "88888888"
accountantCity = "Mumbai"
let accountState
/*
NOTE
Preffer not to use var, coz if issue in black scope and functional scope {}
*/

// accountId = 2 // constant - assigning another value not allowed

accountEmail = "yahoo@gmail.com"
accountPassword = "66666666"
accountantCity = "Pune"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountantCity, accountState])