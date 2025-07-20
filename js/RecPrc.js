function pd(i,n){
    
    if(i == n+1){
        return;
    }

    console.log(i);
    pd(i+1,n);
}

// pd(1,5);



function pi(n){
    if(n==0)
        return;
    pi(n-1);
    console.log(n);
}

// pi(5);


function pdi(n){
    if(n == 0){
        return;
    }
    console.log(n);
    pdi(n-1);
    console.log(n)
}

// pdi(5);




function powerOf(n,x){
    if(n === 0){
        return 1;
    }
    let a = powerOf(n-1,x);
    let b = x*a;

    return b;
}

// console.log(powerOf(3,2));


function maxArr(arr,n){
    if(n == arr.length){
        return;
    }

    let a = maxArr(arr,n+1)
    let max = arr[n];
    if(a > max){
        max = a;
    }

    return max;
}

let arr = [7,5,11,1,9];
console.log(maxArr(arr,0));