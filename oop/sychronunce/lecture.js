// callback 
// function fetchData(url, callback) {
//     setTimeout(() => {
//         let data = {messageFromGt: "Gt is still waiting for nandu"};
//         callback(data);
//     }, 2000)
// }


// function printData(data) {
//     console.log(data);
// }

// fetchData("www.GtWaiting.com", printData);


// promices 

// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         let data = {messageFromGt: "Gt is still waiting for nandu"}; 

//         if(data) {
//             resolve(data);
//         }
//         else {
//             reject(new Error("Gt rejected Nandu! Not Gt not intrested"));
//         }
//     });
//     });
    
// }


// fetch 
// then and catch for fetch

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=> {
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err)=> { console.log(err)});


async function apiData() {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(data);
        let data = await res.json();
        console.log(data);
    
}

apiData();