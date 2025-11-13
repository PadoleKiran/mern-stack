// promise constructor

// let fileUpload = new Promise((resolve, reject) => {
//     let uploadSpeed = 80; // mbps

//     console.log("uploading a file");

//     setTimeout(() => {
//         if (uploadSpeed > 50) {
//             resolve("file uploaded successfully !")
//         }
//         else {
//             reject("file upload failed due to slow internet !")
//         }
//     }, 2000)
// });

// fileUpload.then((msg)=>{
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("File upload process finished!");
// })




// let transication = new Promise((resolve, reject)=>{
//     let balence = 5000;
//     let amount = 7000;

//     console.log("Transication started")
//     setTimeout(()=>{
//         if(balence >= amount){
//             resolve("Transication completed succesfully");
//         }
//         else{
//             reject("insufficient balence")
//         }
//     }, 2000)
// });


// transication.then((msg)=>{
//     console.log(msg);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("transaction compleated")
// })




// in above example we created promises 


// promise chaining
// login
// fetch user detail
// render dashboard


// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("sterp 1: user logged in")
//     }, 1500)
// })
//     .then((msg) => {
//         console.log(msg);
//         return "step 2: fetch user data"
//     })
//     .then((msg) => {
//         console.log(msg);
//         return new Promise((resolve) => {
//             resolve("step 3 : render user details");
//         }, 1000);
//     })
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("task completed")
//     })




// callback hell
// loginUser("jay@example.com", "1234", function (user) {
//     console.log("1️⃣ User logged in:", user);

//     getUserProfile(user.id, function (profile) {
//         console.log("2️⃣ User profile loaded:", profile);

//         getUserOrders(profile.id, function (orders) {
//             console.log("3️⃣ Orders fetched:", orders);

//             showDashboard(orders, function () {
//                 console.log("4️⃣ Dashboard shown!");
//             });
//         });
//     });
// });


// promises
function loginUser(email, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, email });
        }, 1000);
    });
}

function getUserProfile(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: "Jay", age: 26 });
        }, 1000);
    });
}

function getUserOrders(profileId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Order-101", "Order-102", "Order-103"]);
        }, 1000);
    });
}

function showDashboard(orders) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Dashboard displaying orders:", orders);
            resolve("Dashboard Ready ✅");
        }, 1000);
    });
}


// loginUser().then((msg) => {
//     console.log(msg);
//     getUserProfile().then((msg) => {
//         console.log(msg);
//         getUserOrders().then((msg) => {
//             console.log(msg);
//             showDashboard().then((msg) => {
//                 console.log(msg);
//             }).finally(() => {
//                 console.log("task compleated");
//             })
//         })
//     })
// })
// .finally(()=>{
//     console.log("task compleated");
// })

// loginUser("kiran@gmail.com", "1234")
//     .then(user => {
//         console.log(user);
//         return getUserProfile(user.id);
//     })
//     .then(profile => {
//         console.log(profile)
//         return getUserOrders(profile.id);
//     })
//     .then(orders => {
//         console.log(orders);
//         return showDashboard(orders)
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("task compleated");
//     })


new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("step 1 done")
        resolve("step 1 done")
    }, 1000)
})
// .then(msg => {
//     console.log(msg);
//     setTimeout(()=>{
//         resolve("step 2 done")
//     }, 1000)
// })
.then((msg) => {
    console.log(msg);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("step 2 done");
        resolve("step 2 done");
      }, 1000);
    });
  })
// .then(msg => {
//      console.log(msg);
//     setTimeout(()=>{
//         resolve("step 3 done")
//     }, 1000)
// })
.then((msg) => {
    console.log(msg);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("step 3 done");
        resolve("step 3 done");
      }, 1000);
    });
  })

.then(msg=>{
    console.log(msg)
})
.catch(err => {
    console.log(err);
})
.finally(()=>{
    console.log("Task compleated")
})


// befour and after