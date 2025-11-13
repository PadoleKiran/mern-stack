// function ordrerPizza(name, time){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(name + " pizza is ready");
//         }, time);
//     });
// }


// let p1 = ordrerPizza("dominos", 2000);
// let p2 = ordrerPizza("pizza hut", 3000);
// let p3 = ordrerPizza("pizzaria", 1000);

// Promise.all([p1,p2,p3])
// .then((results) => {
//     console.log(results);
//     console.log("all pizzas are here");
// })
// .catch((err) => {
//     console.log(err);
// })




// const p1 = Promise.resolve("Promise 1 resolved");
// const p2 = Promise.reject("Promise 2 rejected");
// const p3 = Promise.resolve("Promise 3 resolved");
// const p4 = Promise.reject("Promise 4 rejected");


// Promise.all([p1, p2, p3, p4])
// .then((results) => {
//         console.log(results);
//     })
//     .catch(err=>{
//         console.log("Error caught in Promise.all: " + err);
//     });



// const userData = fetch("https://jsonplaceholder.typicode.com/users/1");
// const postData = fetch("https://jsonplaceholder.typicode.com/posts/1");
// const commentData = fetch("https://jsonplaceholder.typicode.com/comments/1");

// Promise.all([userData, postData, commentData])
//     .then((response) => {
//         return Promise.all(response.map(res => res.json()));
//     })
//     .then((data) => {
//         console.log(data);
//     })


// why use use map in aove line 48?// because response is an array of Response objects from the fetch calls.
// Each Response object has a json() method that returns a promise resolving to the parsed JSON data.
// We use map to iterate over each Response object in the response array and call its json() method.
// This creates a new array of promises, which we then pass to Promise.all to wait for all of them to resolve.




// function fakeAPI(name, delay){
//     return new Promise(function(resolve){
//         setTimeout(function() {
//             console.log(name + " compleated");
//             resolve(name);
//         }, delay)
//     })
// }


// fakeAPI("Task 1",5000)
// .then((res) => {
//     // return res.json();
//     // console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// // .then((data)=>{
// //     console.log(data);
// // })

// fakeAPI("Task 2",3000)
// .then((res) => {
//     // return res.json();
//     // console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// fakeAPI("Task 3",2000)
// .then((res) => {
//     // return res.json();
//     // console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// fakeAPI("Task 1",5000)
// .then((res) => {
//     // return res.json();
//     // console.log(res);
//     return fakeAPI("Task 2", 2000);
// })
// .then(()=>{
//     return fakeAPI("Task 3", 1000);
// })
// .catch((err)=>{
//     console.log(err);
// })


// Q1

// function task(name, ms){
//     return new Promise((resolve)=>{
//         setTimeout(function(){
//             resolve(name);
//         }, ms)
//     })
// }


// let p1 = task("A", 1200);
// let p2 = task("B", 5000);
// let p3 = task("C", 1500);


// Promise.all([p1,p2,p3])
// .then((resourse)=>{
//     // return Promise.all(resourse.map(res => res.json()));
//     // console.log(resourse);
//     resourse.forEach((res)=>{
//         console.log(res);
//     })
// })
// .then((data)=>{
//     console.log(data);
// })




// Q2 



function task(name, ms){
    return new Promise((resolve)=>{
        setTimeout(function(){
            resolve(name);
        }, ms)
    })
}


let p1 = task("A", 1200);
let p2 = task("B", 5000);
let p3 = task("C", 1500);


Promise.all([p1,p2,p3])
.then((resourse)=>{
    // return Promise.all(resourse.map(res => res.json()));
    // console.log(resourse);
    // resourse.forEach((res)=>{
    //     console.log(res);
    // })

    console.log("First result is "+ resourse[0]);
    console.log("second result is "+ resourse[1]);
    console.log("third result is "+ resourse[2]);
})



