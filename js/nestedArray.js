let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,0]
];

// for(let a of arr){
//     for(let x of a){
//         console.log(x);
//     }
// }

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }

// console.log(arr[1][1]);

// arr[1][1] = 95;
// console.log(arr);

let count = 0;

for(let a of arr){
    for(let x of a){
        count++;
    }
}

console.log(count);