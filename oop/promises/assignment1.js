
//Assignemnt 1
function checkStock(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(product === "laptop" || product === "phone"){
                resolve(`In stock : ${product}`)
            }
            else {
                reject(`Out of stock : ${product}`)
            }
        }, 1000)
    })
}

// checkStock("laptop")
// .then((msg) => {
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Done")
// })



// assignment 2

// function createAccount() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Account created")
//         }, 1000)
//     })
// }


// function fetchUserProfile(userId) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(`Profile loaded for1 ${userId}`)
//         }, 1000)
//     })
// }


// function showWelcomeScreen(profile) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(`Welcome ${profile}!`)
//         }, 1000)
//     })
// }


// createAccount().then((msg)=> {
//     console.log(msg)
//     return fetchUserProfile("101")
// })
// .then((msg)=>{
//     console.log(msg)
//     return showWelcomeScreen("kiran")
// }).then(msg => {
//     console.log(msg);
// })
// .catch(err => {
//     console.log(err);
// })
// .finally(()=>{
//     // console.log("Task compleated")
//     setTimeout(()=>{
//         console.log("Task compleated")
//     })
// })


// assignemtn 3

function runStep(stepName){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log("Step 1: Preparing cart")
            resolve(stepName);
        }, 1000)
    })
}

runStep("step 1").then(msg=>{
    console.log(msg);
    return runStep("step 2");
})
.then(msg=>{
    console.log(msg);
    return runStep("step 3");
})
.then(msg=>{
    console.log(msg);
})
.catch(err=>{
    console.log(err);
})
.finally(()=>{
    console.log("compleated");
})
