let arr = [7,5,3,9,1,8];

let res = arr.reduce((acc, element) => {return acc*element},1);
console.log(res);

let sum = arr.reduce((acc, element) => {return acc + element},0);
console.log(sum);

// let arr = [7,5];

let max = arr.reduce((acc, element) => {return acc<element ? element:acc}, arr[0]);
console.log(max);

