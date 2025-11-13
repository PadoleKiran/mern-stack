function fakeAPI(name, delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(`${name} completed`);
            resolve(name);
        }, delay);
    })
}

let t1 = fakeAPI("Task 1", 1500);
let t2 = fakeAPI("Task 2", 1000);
let t3 = fakeAPI("Task 3", 500);

// Promise.all([t1,t2,t3])
// .then((res) =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


fakeAPI("Task 1", 1500)
.then(() => {
    return fakeAPI("Task 2", 1000);
})
.then(() => {
    return fakeAPI("Task 3", 500);
})
.then((res) => {
    // console.log(res);
})
.catch((err)=>{
    console.log(err);
})