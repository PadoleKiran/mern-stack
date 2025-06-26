// function isprime(x){
//     if (x <= 1) return false;
//     if(x==2) return true;
//     if(x%2 == 0) return false;
    

//     for(let i=3;i<x;i+2){
//         if(x % i === 0) return false;
//     }
//     return true;

// }

// let n = 5;

// for(let i=2;i<=n;i++){
//     if(isprime(i)){
//         console.log(i);
//     }
// }

// console.log([]+[]);


// let a = [[1,5,7],[8,2,9],[11,54,-9]];
// let sum = 0;
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a[i].length;j++){
//         sum += a[i][j];
//     }
// }
// console.log("sum : ",sum);



// let a = [[4,7,2],[9,6,1],[8,3,5]];
// let count = 0;

// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a[i].length;j++){
//         if(a[i][j]%2 == 0){
//             count++;
//         }
//     }
// }
// console.log("count : ",count);

// let arr = [[1,2,3],[4,5,6]]
// let transposeArr = [];

// for(let j=0;j<arr[0].length;j++){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         newArr.push(arr[i][j]);
//         // if(i == j){
//         //     newArr.push(arr[i][j]);
//         // }
//     }
//     transposeArr.push(newArr);
// }

// console.log(transposeArr);



// let arr = [[1,2,3],[4,5,6],[0,1,0]];
// // let newArr = [];
// maxSum = 0;

// for(let i=0;i<arr.length;i++){
//     let sum = 0;
//     for(let j=0;j<arr[0].length;j++){
//         sum += arr[i][j];
//     }
//     if(sum > maxSum) {
//         maxSum = sum;
//     }
//     // newArr.push(sum);
// }

// console.log(maxSum);


let arr = [[1,2,3],[4,5,6],[7,8,9]];
let newArr = [];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i];j++){
        if(arr[1][0]){
            newArr[5].push(arr[1][0]); 
        }
        else if(arr[1][2])
        {
            newArr[3].push(arr[1][2]);
        }
        else{
            // newArr.push(arr[i][j]);
            newArr.push(arr[i][j]);
        }
    }
}

console.log(newArr);


