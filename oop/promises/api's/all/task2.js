// Q2

// function task(name, ms){
//     return new Promise((resolve)=>{
//         setTimeout(function(){
//             resolve(name);
//         }, ms)
//     })
// }


// let p1 = task("A", 1200);
// let p2 = task("B", 5000);
// let p3 = task("C", 1500);


// Promise.all([p1,p2,p3])
// .then((resourse)=>{
//     // return Promise.all(resourse.map(res => res.json()));
//     // console.log(resourse);
//     // resourse.forEach((res)=>{
//     //     console.log(res);
//     // })

//     console.log("First result is "+ resourse[0]);
//     console.log("second result is "+ resourse[1]);
//     console.log("third result is "+ resourse[2]);
// })




// Q3


function convert(n, ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(n * 2);
        }, ms)
    })
}

nums = [3,5,9,10];
time = 3000;

let x = nums.map((n)=>{
    return convert(n, 3000);
})

Promise.all(x)
.then((res)=>{
    // res.array.forEach(element => {
    //     console.log(element);
    // });
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
