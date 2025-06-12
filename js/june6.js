// let n = 5;

// for(let i =1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(j.toString());
//     }
//     console.log();
// }

// 1
// 12
// 123
// 1234
// 12345

// for(let i =1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(i.toString());
//     }
//     console.log();
// }

// 1
// 22
// 333
// 4444
// 55555

// for(let i =1;i<=n;i++){
//     for(let j=n-i+1;j>=1;j--){
//         process.stdout.write("*");
//     }
//     console.log();
// }




// for(let i =n;i>=1;i--){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(j.toString());
//     }
//     console.log();
// }

// 12345
// 1234
// 123
// 12
// 1


// for(let i =1;i<=n;i++){
//     // if(i == 1 ){
//     //     console.log("* ");
        
//     // }
//     if(i%2 !== 0 || i == 1){
//         for(let j=1;j<=i;j++){
//         // if(j%2 !== 0){
//         //     // process.stdout.write(j);
//         //     process.stdout.write(j + "* ");
//         // }
        
//         process.stdout.write(" ");
//     }
//     for(let j=1;j<=i;j++){
//         // if(j%2 !== 0){
//         //     // process.stdout.write(j);
//         //     process.stdout.write(j + "* ");
//         // }
        
//         process.stdout.write("* ");
//     }

//     console.log();
// }
// }

// let n = 4;
// let sp = n-1;
// let st = 1; 

// for(let i=1;i<=n;i++) {
//     for(let j=1;j<=sp;j++) {
//         process.stdout.write(" ");
//     }
//     for(let k=1;k<=st;k++) {
//         process.stdout.write("*");
//     }
//     sp--;
//     st+=2;
//     console.log();
// }


//    *
//   ***
//  *****
// *******



// let n = 4;
// let sp = 1;
// let st = n-1; 

// for(let i=n;i>=1;i--) {
//     for(let j=0;j<n-i;j++) {
//         process.stdout.write(" ");
//     }
//     for(let k=1;k<=2*i-1;k++) {
//         process.stdout.write("*");
//     }
//     // sp++;
//     // st-=2;
//     console.log();
// }










function one(){
let n = 4;
let sp = n-1;
let st = 1; 

for(let i=1;i<=n;i++) {
    for(let j=1;j<=sp;j++) {
        process.stdout.write(" ");
    }
    for(let k=1;k<=st;k++) {
        process.stdout.write("*");
    }
    sp--;
    st+=2;
    console.log();
}

}



function two(){
    let n = 4;
// let sp = 1;
// let st = n-1; 

for(let i=n;i>=1;i--) {
    for(let j=0;j<n-i;j++) {
        process.stdout.write(" ");
    }
    for(let k=1;k<=2*i-1;k++) {
        process.stdout.write("*");
    }
    // sp++;
    // st-=2;
    console.log();
}
}


one();
two();


