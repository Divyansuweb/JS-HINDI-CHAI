// WHEN WE WANTS TO STORE SOMETHING SO WE HAVE TO CREATE A VARIABLE...

const accountId = 144553
let accountEmail = "divyansu@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2        // NOT ALLOWED
accountEmail = "priya@google.com"
accountPassword = "221548"
accountCity = "Bengalaru"

/*
    Prefer Not To Use var
    because of issue in block scope({}) and functional scope
*/

console.log(accountId);
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])