const orderPizza = (name, time, shouldFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            shouldFail ? reject(`${name} failed ❌`) : resolve(`${name} arrived 🍕`);
        }, time);
    });
};

const dominos = orderPizza("Dominos", 2000, false);
const pizzaHut = orderPizza("Pizza Hut", 1500, true);
const mojo = orderPizza("Mojo", 1000, false);


Promise.allSettled([dominos, pizzaHut, mojo])
.then((results) => {
    results.forEach((results) => {
        if(results.status === "fulfilled") {
            console.log(results.value);
        } else {
            console.log(results.reason);
        }
    })
})