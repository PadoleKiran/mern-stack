// Conditions in javaScript are used to control the flow of execution based on certain criteria.
// This file contains examples of various types of conditions in JavaScript.

switch (condition) {
    case value1:
        break; // break statement is used to exit the switch block

        // code block
        break;
    case value2:
        // code block
        // continue; // continue statement is used to skip the current iteration and continue with the next iteration
        break;
    default:
        // code block
}

if (condition1) {
    // code block for condition1
} else if (condition2) {        // else if ladder or else if statement or else if condition
    // code block for condition2
} else {
    // code block for all other conditions
}

// turnary operator // The ternary operator is a shorthand for the if-else statement.
// Syntax: condition ? valueIfTrue : valueIfFalse
let result = (condition) ? valueIfTrue : valueIfFalse;

var a = 10;
var status = (a > 5) ? "Greater than 5" : "Less than or equal to 5";




// is there any error in above code?
// No, there is no error in the above code. It correctly uses a switch statement to check the value of `n` and prints the corresponding message based on the case that matches. If `n` is "kiran", it will output "this is kiran". If `n` is neither "gaurav" nor "kiran", it will output "404 error".
// i am getting ReferenceError in above code, why?
// The ReferenceError in the above code could occur if the variable `n` is not defined before the switch statement. Ensure that `n` is declared and initialized properly before the switch statement. If you are still facing issues, please provide the exact error message for further assistance.

 var age = 20;
 consolelog((age>18) ? "you are above 18": "you are below 18");

 var age = "20";
 var b = Number(age);

 // difference between pareint and number?
// parseInt() converts a string to an integer, while Number() converts a value to a number (which can be an integer or a float).
// parseInt() can also take a second argument to specify the base (radix) for conversion, while Number() does not have this option.