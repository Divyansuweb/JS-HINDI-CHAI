let score = "33abc"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);  // NaN => Not A Number


// "33" => 33
// "33abc" => NaN
// "true" => 1
// "null" => 0
// "undefined" => NaN

let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

/*
    1 => true ; 0 => false ;
    "" => false ; "Divyansu" => true ;
*/

let someNumber = 100
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);