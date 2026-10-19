// Primitive Datatypes

let score = 100

let height = 10.5

let isLoggedIn = false

let name = "Lalit Kumar Sharma"

let userEmail = undefined
let outsideTemp = null

const id = Symbol("123")
const userId = Symbol("123")

console.log(id == userId);

const bigNumber = 12345678900987654321n
console.log(bigNumber);



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"];

let myObj = {
    name:"Lalit Kumar Sharma",
    age:19
}

const myFunction = function(){
    console.log("Hello World");
}


// How to know the datatype of a variable 

console.log(typeof id);
