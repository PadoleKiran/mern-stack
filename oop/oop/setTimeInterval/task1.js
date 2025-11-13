// let now = new Date();


// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();


//time
// let count = 0;
// setInterval(()=>
// {
//     // count++;
//     // console.log(count);

//     let now = new Date();
//     console.log(now.toLocaleTimeString());

// }, 1000
// );




// stop at 5 with clear interval

// let count = 0;
// setInterval(()=>
// {
//     if(count === 5){
//         clearInterval();
//     }
//     else{
//     count++;
//     console.log(count);
//     }



// }, 1000
// );


// settimeout

// let count = 0;
// for(let i=0;i<=5;i++){
//     setTimeout(()=>{
//         count++;
//         console.log(count);
//     },1000);
// }



    // let count = 0;
    // function print(count){
    //     console.log(count);
    //     count++;
        
    //     setTimeout(print, count);
    // }

    // print(count);



// setTimeout(()=>{
//     console
// });


// Q1

// function sellTicket(n){
//     for(let i=1;i<=n;i++){
//         console.log("Serving Customer " + i);
//     }
//     console.log("all Ticker sole");
// }

// sellTicket(3);


// Q2

// function longTask(){
//     for(let i=0;i<1e3;i++){
//         console.log("output " + i);
//     }
//     console.log("Done");
// }

// longTask();

// Q4 

// function countdown(count){
//     console.log(count);
//     count--;

//     if(count == 0){
//         console.log("Go");
//         return;
//     }

//     countdown(count);
// }

// countdown(5);


// console.log("Start");

// setTimeout(() => console.log("A"), 1000);
// setTimeout(() => console.log("B"), 0);

// console.log("End");
