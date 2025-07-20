// select minimum and swap

function SelectionSort(arr,n){
    for(let i=0;i<=n-2;i++){
        let min = i;
        for(let j=i;j<=n-1;j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

let arr = [5,7,1,3,8,4];
let n = arr.length;

console.log(SelectionSort(arr,n));