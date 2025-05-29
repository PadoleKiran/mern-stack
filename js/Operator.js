// Aratimatic operator 
var a = 5;
console.log(a++);
console.log(a); // Output: 6

console.log(a--); 
console.log(a); // Output: 5

console.log(++a); // Output: 6
console.log(a); // Output: 5

console.log(--a); // Output: 5
console.log(a); // Output: 4


// Assignment Operator 
var a = 10; // Assignment operator
var b = 20; 
a += 2;
console.log(a); // Output: 12

// Logical operator - return and work on boolean values . (work on boolean values and return boolean values) 
console.log(true && true); // Output: true
console.log(true && false); // Output: false
console.log(false && true); // Output: false
console.log(false && false); // Output: false

console.log(true || true); // Output: true
console.log(true || false); // Output: true
console.log(false || true); // Output: true
console.log(false || false); // Output: false

console.log(!true); // Output: false
console.log(!false); // Output: true

console.log("Hello" + " kiran"); // Output: "Hello kiran"  

let a = 10;
console.log(a !== "10"); // Output: true (strict inequality, different types)


typeof a; // Output: "number" 
// typeof operator returns the type of the variable

let sym = Symbol("id"); // Creates a unique symbol
// Symbol is a primitive data type that is unique and immutable

let bigNum = 1235467894565236896226563232n; // BigInt for large integers
// BigInt is a primitive data type that can represent integers with arbitrary precision

let empty = null; // Represents the intentional absence of any value
let notDefined; // Variable declared but not initialized, value is undefined

console.log(10+null); // Output: 10 (null is treated as 0 in arithmetic operations)
console.log(10 + undefined); // Output: NaN (undefined is not a number, so the result is NaN)
// Nan (Not a Number) is a special value that represents an undefined or unrepresentable value in arithmetic operations