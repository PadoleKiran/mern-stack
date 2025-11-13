let p1 = Promise.resolve("Ok 1");
let p2 = Promise.reject("Fail 2");
let p3 = Promise.resolve("Ok 3");
let p4 = Promise.reject("Fail 4");


Promise.all([p1,p2,p3,p4])
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
})