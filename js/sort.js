// bubble sort

function bubbleSort(arr,n){

    for(let i = n-1;i >= 1;i--){
        for(let j=0;j<=i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([4,2,1,8,6],5))


function insertionSort(arr, n){
    for(let i=0;i<n;i++){
        let j = i;
        while(j>0 && arr[j-1] > arr[j]){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            j--;
        }
    }

    return arr;
}

let arr = [12,43,21,53,17,8];
let n = arr.length;
// console.log(insertionSort(arr, n));




// meregeSort algo


function meregeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length /2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    return merge(meregeSort(left),meregeSort(right));
}

function merge(left, right){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length) {
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }

    while(i < left.length){
        result.push(left[i]);
        i++;
    }

    while(j < right.length){
        result.push(right[j]);
        j++;
    }

    return result;
}


// console.log(meregeSort(arr));


function quickSort(arr){

    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log(quickSort(arr));


// function mSort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }

//     let mid = Math.floor(arr.length/2);
//     let left = arr.slice(0,mid);
//     let right = arr.slice(mid);

//     return mer(mSort(left),mSort(right));
// }

// function mer(left, right){
//     let result = [];
//     let i=0;
//     let j=0;

//     while(i<left.length && j<right.length){
//         if(left[i] < right[j]){
//             result.push(left[i]);
//             i++;
//         }

//         else{
//             result.push(right[j]);
//             j++;
//         }
//     }

//     if(i<left.length){
//         result.push(left[i]);
//         i++;
//     }

//     if(j<right.length){
//         result.push(right[j]);
//         j++;
//     }

//     return result;
// }

// console.log(mSort(arr));


