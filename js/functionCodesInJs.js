// // function to get all function codes in a JavaScript file 
// // what is functions?
// // Functions in JavaScript are reusable blocks of code that perform a specific task. They can take inputs (parameters) and return outputs (values). Functions help in organizing code, making it more modular and easier to maintain.

// // different between parameteres and arguments?
// // Parameters are the variables listed as part of a function definition, while arguments are the actual values passed to the function when it is called. For example, in the function definition `function add(a, b)`, `a` and `b` are parameters. When you call `add(5, 10)`, `5` and `10` are the arguments.


// // traditional function
// function kp(g) {
//     return `hey ${g} kp here`;
// }
// console.log(kp('gt'));

// // arrow function
// const kpArrow = (g) => `hey ${g} kp here`;  
// console.log(kpArrow('gt'));

// // function expression
// const kpExpression = function(g) {
//     return `hey ${g} kp here`;
// };
// console.log(kpExpression('gt'));

// // IIFE (Immediately Invoked Function Expression)
// (function(g) {
//     console.log(`hey ${g} kp here`);
// })('gt');   

// // function with default parameters
// function kpWithDefault(g = 'default') {
//     return `hey ${g} kp here`;
// }

// console.log(kpWithDefault()); // Output: hey default kp here
// console.log(kpWithDefault('gt')); // Output: hey gt kp here
// // function with rest parameters
// function kpWithRest(...args) {
//     return `hey ${args.join(', ')} kp here`;
// }   
// console.log(kpWithRest('gt', 'kiran', 'gaurav')); // Output: hey gt, kiran, gaurav kp here
// // function with callback
// function kpWithCallback(callback) {
//     const message = 'hey gt kp here';
//     return callback(message);
// }
// console.log(kpWithCallback((msg) => msg)); // Output: hey gt kp here
// // function with higher-order function
// function kpHigherOrder(func) {
//     return func('gt');
// }
// console.log(kpHigherOrder((g) => `hey ${g} kp here`)); // Output: hey gt kp here
// // function with closure    
// function kpClosure() {
//     let count = 0;
//     return function() {
//         count++;
//         return `hey gt kp here, count: ${count}`;
//     };
// }
// const kpCount = kpClosure();
// console.log(kpCount()); // Output: hey gt kp here, count: 1
// console.log(kpCount()); // Output: hey gt kp here, count: 2
// // function with recursion
// function kpRecursion(n) {
//     if (n <= 0) {
//         return 'done';
//     }
//     return `hey gt kp here, count: ${n}, next: ${kpRecursion(n - 1)}`;
// }
// console.log(kpRecursion(3)); // Output: hey gt kp here, count: 3, next: hey gt kp here, count: 2, next: hey gt kp here, count: 1, next: done
// // function with async/await
// async function kpAsync() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('hey gt kp here after async delay');
//         }, 1000);
//     });
// }
// kpAsync().then((message) => console.log(message)); // Output after 1 second: hey gt kp here after async delay
// // function with generator
// function* kpGenerator() {
//     yield 'hey gt kp here, step 1';
//     yield 'hey gt kp here, step 2';
//     yield 'hey gt kp here, step 3';
// }
// const generator = kpGenerator();
// console.log(generator.next().value); // Output: hey gt kp here, step 1
// console.log(generator.next().value); // Output: hey gt kp here, step 2
// console.log(generator.next().value); // Output: hey gt kp here, step 3
// // function with promise
// function kpPromise() {
//     return new Promise((resolve, reject) => {
//         const success = true; // Simulate success or failure
//         if (success) {
//             resolve('hey gt kp here from promise');
//         } else {
//             reject('error in promise');
//         }
//     });
// }
// kpPromise()
//     .then((message) => console.log(message)) // Output: hey gt kp here from promise
//     .catch((error) => console.error(error));
// // function with class method
// class KpClass {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         return `hey ${this.name} kp here from class method`;
//     }
// }
// const kpInstance = new KpClass('gt');
// console.log(kpInstance.greet()); // Output: hey gt kp here from class method
// // function with static method
// class KpStaticClass {
//     static greet(name) {
//         return `hey ${name} kp here from static method`;
//     }
// }
// console.log(KpStaticClass.greet('gt')); // Output: hey gt kp here from static method
// // function with prototype method
// function KpPrototype(name) {
//     this.name = name;
// }
// KpPrototype.prototype.greet = function() {
//     return `hey ${this.name} kp here from prototype method`;
// };
// const kpProtoInstance = new KpPrototype('gt');
// console.log(kpProtoInstance.greet()); // Output: hey gt kp here from prototype method   
// // function with bind, call, and apply
// function kpBindCallApply(greeting) {
//     return `${greeting} kp here`;
// }
// const kpBound = kpBindCallApply.bind(null, 'hey gt');
// console.log(kpBound()); // Output: hey gt kp here

// console.log(kpBindCallApply.call(null, 'hey gt')); // Output: hey gt kp here
// console.log(kpBindCallApply.apply(null, ['hey gt'])); // Output: hey gt kp here
// // function with this context


// function scope 
// scope of var 

var x = 10; // global scope
function testScope() {
    var x = 20; // function scope
    console.log("Inside function, x:", x); // Output: Inside function, x: 20
}
testScope();
console.log("Outside function, x:", x); // Output: Outside function, x: 10

// block scope with var 
if (true) {
    var y = 30; // function scope, not block scoped
    console.log("Inside if block, y:", y); // Output: Inside if block, y: 30
}

//ruls for let 