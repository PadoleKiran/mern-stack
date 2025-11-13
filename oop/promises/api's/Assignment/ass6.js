let p1 = new Promise(resolve => {
    setTimeout(()=>{
        resolve("Data OK");
    }, 2500)
});

let p2 = new Promise((_, reject) => {
    setTimeout(()=>{
        reject("NetWork Error");
    }, 900)
});



Promise.race([p1, p2])
.then(result => {
    console.log("Result: ", result);
})
.catch(err => {
    console.log("Error: ", err);
})