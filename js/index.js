let input = 4000;
let year = 2025 , days = 30 ,month = 4 , rem;
 year = parseInt(input/365);
 rem = input%365;
month = parseInt(rem/30);
days = rem%30;
console.log(year,month,days);