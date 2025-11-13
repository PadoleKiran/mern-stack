const cab = (name, time, willArrive) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            willArrive
                ? resolve(`${name} confirmed`)
                : reject(`${name} canceled`)
        }, time);
    });


const p1 = cab("ola" , 2000, false)
const p2 = cab("uber" , 8000, true)

Promise.any([p1,p2])
.then((results) => {
    // results.forEach(element => {
    //     console.log(element);
    // });
    console.log(results);
})