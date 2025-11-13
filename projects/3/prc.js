//Q2
// const arr = [2,4,6,8];

// let sum = 0;
// arr.forEach((val, ind) => {
//     console.log("value : " + val + " and index : " + ind);
//     sum += val;
// })

// console.log(sum);


// Q4 

// function applyToEach(arr, cb){
//     // arr.forEach((element, ind )=> {
//     //     cb(element, ind);
//     // });
//     for(let i=0;i<arr.length;i++){
//         cb(arr[i], i);
//     }
// }

// applyToEach([10,20,30] , (v,i) => {
//     console.log(i, v);
// })


// function fetchData(url, callback){
//     // handleData(data);
//     setTimeout(() => {
//         let data = {message: "gt waiting for nandu"};
//         handleData(data);
//     }, 800);
// }

// function handleData(data){
//     console.log(data.message);
// }

// fetchData("example.com", handleData);

// Q6
// function getUser(id) {
//   // TODO: Return a Promise with setTimeout(700ms)
//   return new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     let data = {message: "Gt still waiting for n....."};
//     if(id){
//         resolve(id);
//     }
//     else {
//         reject(new Error("Gt not intrested in nandu!"));
//     }
//   }, 700);});
// }

// getUser(1)
//   .then(u => console.log("OK:", u))
//   .catch(e => console.log("ERR:", e.message));

// getUser(0)
//   .then(u => console.log("OK:", u))
//   .catch(e => console.log("ERR:", e.message));

//Q9
// TODO: fetch -> res.json() -> get names using map()
// TODO: print names or handle error using .catch

// async function apidata() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log(data);
// }

// apidata();


//Q10
async function getInfo() {
  // TODO: fetch -> await res.json()
  // TODO: print count and first email
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  let count = 0;
  for(let i=0;i<data.length;i++){
  console.log(data[i].name);
  count += 1;
  }
  console.log(count);
}
getInfo();