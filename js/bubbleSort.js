// function bubbleSort(arr){
//     let n = arr.length;
//     for(let i=n-1;i>=1;i--){
//         for(j=0;j<=i-1;j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//             }
//         }
//     }

//     return arr;
// }

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = n - 1; i >= 1; i--) {
        let swapped = false;  // Flag to check if any swaps happen

        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no swaps happened, array is already sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}


let arr = [5,3,7,2,8];
let n = arr.length;

console.log(bubbleSort(arr));
// console.log(arr);