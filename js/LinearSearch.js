let arr = [10,5,6,7,20,8];
let x = 7;

function linerSearch(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == x){
            return i;
        }
    }
}

console.log(x + " is present at index : " + linerSearch(arr,x));