// let a = 321;

// let rev = a % 10;
// console.log(rev);

// a = Math.floor(a / 10);
// console.log(a);





// reverses number 

// let n = 123;
// let rev = 0;
// let origin = n;

// while(n>0){
//     let l = n%10;
//     rev = rev * 10 + l;
//     n = Math.floor(n/10);
//     // console.log(n);
// }

// console.log(rev);



function reverses_num(n){
    let rev = 0;

    while(n>0){
        let digit = n%10;
        rev = rev*10 + digit;
        n = Math.floor(n/10);
    }
    
    return rev;
}

let n = 123;
let rev = reverses_num(n);


if(n == rev){
    console.log("palindrom");
}
else{
    console.log("not palindrome");
}