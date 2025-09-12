// function ReverseSubarr(arr,n){
//     let k ;
//     for(let i=0;i<n;i++){
//         if(arr[i] < arr[i-1]){
//             k = i-1;
//             break;
//         }
//     }
    
//     let newArr = arr.slice(k);
//     // console.log(newArr);
//     for(let i=newArr.length-1;i>=0;i--){
//         if(newArr[i] > newArr[i-1])
//         {
//             console.log(newArr[i]);
//             return false;
//         }
//     }

//     return true;
// }

// let arr = [1,2,5,4,3];

// console.log(ReverseSubarr(arr,arr.length));


function checkAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  console.log("Valid age:", age);
}

// try {
//   checkAge(-5);
// } catch (error) {
//   console.log("Caught:", error.message);
// }

// checkAge(-6);


function quickSort(arr,n){
  if(arr.length <= 1){
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for(let i=0;i< arr.length-1;i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }
    else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left),pivot,...quickSort(right)];
}


let arr = [4,1,2,8,3,7];
console.log(quickSort(arr,arr.length));