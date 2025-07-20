// function insertionSort(arr) {
//     let n = arr.length;
//     for(let i=0;i<n;i++){
//         let j = i;
//         while(j>0 && arr[j-1] > arr[j]){
//             [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
//             j--;
//         }
//     }

//     return arr;
// }

let arr = [12,43,21,53,17,8];

console.log(insertionSort(arr));

// function insertionSort(arr){
//     let n = arr.length;

//     for(let i=0;i<n;i++){
//         let j = i;
//         while(j > 0 && arr[j] < arr[j-1]){
//             [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
//             j--;
//         }
//     }
//     return arr;
// }

function insertionSort(arr){
    let n = arr.length;

    for(let i=0;i<n;i++){
        let j = i;
        while(j > 0 && arr[j-1]> arr[j]){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            j--;
        }
    }
    return arr;
}