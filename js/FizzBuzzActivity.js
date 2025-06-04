let num = 5;

if(num%3 === 0 && num%5 === 0) {
    console.log("FizBuzz");
}
else if(num%3 == 0){
    console.log("Fiz");
}
else if(num%5 == 0) {
    console.log("Buzz");
}
else {
    console.log("Invalid input");
}



// var let and const 

// re-declaration
// var x = 10;
// var x = 20; // re-declaration allowed


// re-assignment
var y = 10;
y = 20; // re-assignment allowed


// scope



/*              re-declaration        re-assignment        scope

var                 true                true                function scope
let                 false                true                block scope  
const                false                false               block scope            

*/

