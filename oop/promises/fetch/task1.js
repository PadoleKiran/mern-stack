
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => {
//     return res.json();
// })
// .then(msg => {
//     console.log(msg[0])
// })
// .catch(err=>{
//     console.log(err)
// })



// build a counter using closure
// function that keeps its own private counter and has methods to increment and decrement the counter value.

// function counter(){
//     let count = 0;

//     return {
//         increment: function(){
//             count++;
//             return count;
//         },
//         decrement: function(){
//             count--;
//             return count;
//         }
//     }
// }



// let counter1 = counter();
// console.log(counter1.increment());
// console.log(counter1.decrement());
// console.log(counter1.increment());





// function one(){
//     let count = 2;

//     return{
//         inc: function(){
//             return ++count;
//         },
//         dec: function(){
//             return --count;
//         }
//     }
// }

// console.log(one().inc());
// console.log(one().dec());
// console.log(one().inc());



// function fac(n){
//     if(n === 0){
//         return 1;
//     }
//     return fac(n-1) * n;
// }

// console.log(fac(5));


// // call apply bind
// let person1 = {
//     firstName: "John",
//     greet: function(city){
//         console.log("Hello " + this.firstName + " from " + city);
//     }
// }

// const greetFn = person1.greet;
// greetFn.call(person1, "New York");
// greetFn.apply(person1, ["Los Angeles"]);    
// const boundGreet = greetFn.bind(person1);
// boundGreet("sambajinagar");



// closure inside event handler
// use a closure so each list item alerts its own name when clicked 

// function createList(items){
//     const ul = document.createElement('ul');
//     items.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = item;
//         li.addEventListener('click', function() {
//             alert('Item clicked: ' + item);
//         });
//         ul.appendChild(li);
//     });
//     document.body.appendChild(ul);
// }
// createList(['Apple', 'Banana', 'Cherry']);


// const a = 10;
// const b = a;
// b = 50;
// console.log(b);


// let arr = ["a", "b", "c"];

// for(let i in arr){
//     console.log(i);
// }



let arr = [1,2,3,4,5];

let out = arr.filter(num => num % 2 === 0);

console.log(out);


// what is even number 
// every number which is divisible by 2 is called even number
// 2,4,6,8,10,12,14,16,18,20