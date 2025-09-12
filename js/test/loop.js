// let username;

// do {
//     username.prompt("Enter user name");
// }
// while(!username);

// console.log("welcome");

// let num = 1234;
// let sum = 0;

// while(num>0){
//     sum += num % 10;
//     num = Math.floor(num/10);
// }

// console.log(sum);


// let num = 5;
// let fact = 1;


// for(let i=1;i<=num;i++){
//     fact = fact * i;
// }

// console.log(fact);


// let num = 5;
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log(`Factorial of ${num} is ${fact}`);


// let a = [4,5,2];
// let sum = 0;
// for(let i=0;i<a.length;i++){
//     sum += a[i];
// }

// console.log(sum);

// for(let i of a){
//     sum += i;
// }

// let a = [4,5,2];
// let sum = 0;
// console.log(a.sort());


// for(let i=1;i<6;i++){
//     // console.log("* " * i);
//     for(let j=(6-i);j>0;j--){
//         process.stdout.write("* ");
//     }
//     console.log();
// }


// for(let i=0;i<=5;i++){
//     console.log(String.fromCharCode(65+i).repeat(i+1));
// }

// for(let i=0;i<=5;i++){
//     console.log("* ".repeat(i+1));
// }

// for(let i=5;i>0;i--){
//     for(let j=i;j>0;j--){
//         process.stdout.write(j + " ");
//     }
//     console.log();
// }


// for(let i=0;i<5;i++){
//     for(let j=i;j>0;j--){
//         process.stdout.write(j.toString());
//     }
//     console.log();
// }


// for(let i=0;i<=5;i++){
//     process.stdout.write(" ".repeat(5-i));
//     process.stdout.write("*".repeat(i));
//     process.stdout.write("*".repeat(i));
//     process.stdout.write(" ".repeat(5-i));
//     console.log();
// }