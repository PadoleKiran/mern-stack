function binarySearch(arr, x){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === x){
            return mid;
            // high = mid-1;
        }
        else if(x < arr[mid]){
            right = mid -1;
        }
        else {
            left = mid +1;
        }
    }
    return -1;
}


let arr = [2,4,6,8,8,8,8,8,9];
let x = 8;

console.log(binarySearch(arr, x));