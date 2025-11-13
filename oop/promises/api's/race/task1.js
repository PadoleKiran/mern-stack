// const pizzaDelivary = (name, time, shouldFail) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=> {
//             shouldFail
//                 ? reject(`${name} faied`)
//                 : resolve(`${name} delivered in ${time / 1000}`)
//         }, time)
//     })
// }


function okAfter(ms){
    return new Promise((resolve, reject)=>{
        resolve(`Ok after ${ms}ms`);
    },ms)
}


function failAfter(ms){
    return new Promise((resolve, reject)=>{
        reject(`Fail after ${ms}ms`);
    },ms)
}

Promise.all([okAfter(500),failAfter(800),okAfter(400)])
.then(res => {
    console.log(res);
})
.catch(err=>{
    console.log(err);
})


