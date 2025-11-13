function orderPizza(name, time, shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // let val = [];
            if (shouldFail) {
                // val.push()
                reject("Order failed for " + name);
            }
            else {
                resolve("Order successful for " + name);
            }
        }, time);
    });
}


let o1 = orderPizza("Dominose", 1400, false);
let o2 = orderPizza("PizzaHut", 900, true);
let o3 = orderPizza("Mojo", 600, false);

var val = [];
var res = [];

Promise.allSettled([o1, o2, o3])
    .then(results => {
        console.log(results);
        var val = [];
        var res = [];

        let arived = results.map(result => {
            if (result.status === "fulfilled") {
                val.push(result.value);
            }
            else {
                res.push(result.reason);
            }
        });

        console.log("Successful Orders: ", val);
        console.log("Failed Orders: ", res);


        // if (results.status === "fulfilled") {
        //     val.push(results.values);
        // }
        // else {
        //     res.push(results.reason);
        // }
        // console.log(results);
        // console.log("Successful Orders: ", val);
        // console.log("Failed Orders: ", res);
    })
    .catch(err => {
        console.log("Error: ", err);
    });

// console.log("Successful Orders: ", val);
// console.log("Failed Orders: ", res);