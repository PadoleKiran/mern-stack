function Timeout(ms){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Completed in ${ms} ms`);
        }, ms);
    });
}



function fakeApi(){
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve("API Data Received");
        }, 1800);
    });
}


Promise.race([fakeApi(), Timeout(1200)])
.then((result => {
    console.log(result);
}))
.catch(err => {
    console.log("Error: ", err);
})
