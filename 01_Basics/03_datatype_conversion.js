let score = null

console.log(typeof score)
console.log(typeof(score))


let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)


// When "33" => 33 
// When "33abc" => NaN /* typeof NaN  is also Number */
// null => 0 typeof null is object
// true => 1 and false => 0
// undefined => NaN


let isLoggedIn = "a"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(isLoggedIn)
console.log(booleanIsLoggedIn)


// 1 => true
// 0 => false
// "" => false
// "abcd" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)


// ***************************** Operations **********************************

let value = 3
let negValue = -value
console.log(negValue)

console.log("hello world "+ "lalit kumar sharma")

let num = 5
for (let index = 0; index < 10; index++) {
    console.log(num + "X" + (index+1) + "=" + (num*(index+1)))
}

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);
console.log(+"")

let num1 = 56;
let num2 = 67;
let num3 = 89;

console.log(num1);
console.log(num2);
console.log(num3);