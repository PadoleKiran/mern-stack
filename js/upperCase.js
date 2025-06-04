let ch = "hello Kiran";

console.log(ch.toLowerCase());
console.log(ch.toUpperCase());
// console.log();

if(ch === ch.toLowerCase()){
    console.log(ch.toUpperCase());
}
else if(ch === ch.toUpperCase()){
    console.log(ch.toLowerCase());
}
else {
    console.log(ch.toLowerCase());
    console.log(ch.toUpperCase());
}