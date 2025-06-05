// This code demonstrates different types of loops in JavaScript
// theroy:
// 1. for loop: Used to iterate over a block of code a specific number of times.
// 2. while loop: Executes a block of code as long as a specified condition is true.
// 3. do while loop: Similar to the while loop, but it executes the block of code at least once before checking the condition.
// 4. for of loop: Used to iterate over iterable objects like arrays, strings, etc.
// 5. for in loop: Used to iterate over the properties of an object.
// 6. forEach loop: Used to execute a function on each element of an array.
// 7. for await of loop: Used to iterate over asynchronous iterables, allowing for asynchronous operations within the loop.
// 8. for await loop: Similar to for await of, but used with promises or async functions.
// forEach loop
 
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log("Number is: " + number);
});



//loop  
// for loop
for (let i = 0; i < 5; i++) {
    console.log("Value of i is: " + i);
}
// while loop
let j = 0; 
while (j < 5) {
    console.log("Value of j is: " + j);
    j++;
}
// do while loop
let k = 0;
do {
    console.log("Value of k is: " + k);
    k++;
}while (k < 5);


// for of loop
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log("Value is: " + value);
}

// for in loop
let obj = {
    name: "Kiran",
    age: 30,
    city: "Hyderabad"
};


let name = "kiran";

console.log(`name : $(name)`);