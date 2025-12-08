// function deliver(foodName, time, fail){
// 	return new Promise((resolve, reject) => {
// 		if(fail){
// 		resolve(`${foodName} delivered`);
// }
// else {
// 	reject(`${foodName} failed`);
// }
// });
// }

// Promise.race([deliver("abc",3000,"fail"),deliver("xyz",1500,"pass")])
// .then(()=>{
// 	console.log("delivered");
// })
// .catch((e)=>{
// 	console.log("Error " + e);
// })


// function book(name, delay, shouldFail){
// 	return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldFail === true) {
//                 reject("Booking failed for " + name);
//             } else {
//                 resolve("Booking succeeded for " + name);
//             }
//         }, delay);

//     });
// }

// Promise.allSettled([book("book 1", 2000, false), book("book 2", 1000, true), book("book 3", 1500, false), book("book 4", 500, true)])
// .then((val)=>{
//     if(val.status === "fulfilled"){
//         console.log("Success : " + val.value);
//     } else {
//         console.log("Failed : " + val.reason);
//     }
// })





// function book(name, delay, shouldFail) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail === true) {
//         reject("Booking failed for " + name);
//       } else {
//         resolve("Booking succeeded for " + name);
//       }
//     }, delay);
//   });
// }

// Promise.allSettled([
//   book("book 1", 2000, false),
//   book("book 2", 1000, true),
//   book("book 3", 1500, false),
//   book("book 4", 500, true)
// ])
//   .then((results) => {
//     results.forEach((result) => {
//       if (result.status === "fulfilled") {
//         console.log("Success:", result.value);
//       } else {
//         console.log("Failed:", result.reason);
//       }
//     });
//   });



// function auth(systemName, time, willPass) {
//     return new Promise((resolve, rejecct) =>{
//         setTimeout(()=>{
//             if(willPass){
//                 resolve(`Logged in via ${systemName}`);
//             }
//             else {
//                 rejecct("systems failed");
//             }
//         },time);
//     })
// }


// Promise.any([auth("pc1",3000,true),auth("pc20",2000,false)])
// .then((result)=>{
//     console.log("Loged In !" + result)
// })
// .catch((e)=>{
//     console.log("All systems failed");
// })



function loadData(name, delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${name} loading....`);
        },delay)
    })
}

Promise.all([loadData("account info",3000), loadData("recent orders",1000), loadData("wallet balance",2000)])
.then((res)=>{
    console.log(res);
    // console.log("loading compleated");
})
.catch((e)=>{
    console.log(e);
})