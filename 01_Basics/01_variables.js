const accountId = 144553


let accountEmail = "lalit9001sh@gmail.com"
var accountPassword = "12345"
// What is the difference between let and var 
/*
    prefer to use let instead of var, because of issue in block scope and functional scope.
*/

accountCity = "Jaipur"

// accountId = 2 // changing a constant value is invalid!!!

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Ahmedabad"
let accountState;

console.log(accountState);
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])
