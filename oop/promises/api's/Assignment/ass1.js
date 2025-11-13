function orderPizza(name, time){
    return new Promise((resolve) => {
        setTimeout(()=>{

            resolve(`${name} arrived`)
        },time)
    })
}

let p1 = orderPizza("dominoz" , 1200);
let p2 = orderPizza("mojo" , 800);
let p3 = orderPizza("pizzhurt", 2000);

Promise.all([p1,p2,p3])
.then(result => {
    console.log(result);
    console.log("All pizza arrived");
})