let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 ");
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 ");
    }, 700);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 ");
    }, 1200);
});

Promise.race([p1,p2,p3])
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
})