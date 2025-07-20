function meregeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    return merge(meregeSort(left), meregeSort(right));
}

function merge(left, right){
    let result = [];
    let i=0;
    let j=0;

    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }

    while(i<left.length){
        result.push(left[i]);
        i++;
    }

    while(j<right.length){
        result.push(right[j]);
        j++;
    }

    return result;
}

let arr = [7,4,1,8,9,2,0];

console.log(meregeSort(arr));










// function maximumDistance(arr, N) {
//   // Do not console.log here
// // return the max Distance
// let m = new Map();
// let bigIndex = 0;
// for(let i=0;i<N;i++){

//   let lastIndex = i;
  
//   for(let j=1;j<N;j++){
    
//     if(arr[i] === arr[j]){
//       lastIndex = j;
//     }
//   }
//   m.set(arr[i],lastIndex);

//   for(let (key,index) of m){
//     if(bigIndex < index){
//       bigIndex = index;
//     }
//   }
// }

// return bigIndex;

// }