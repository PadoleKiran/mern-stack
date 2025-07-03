let arr = [1,2,3,4,1,2];

let s = new Set(arr);

console.log(s);

console.log(Array.from(s)); // set to array

// for(let i of s){
//     console.log(i);
// }

s.forEach(element => {
    console.log(element)
});

s.add(7);

s.delete(4);
console.log(s.has(7));

console.log(s.size);
console.log(s);
