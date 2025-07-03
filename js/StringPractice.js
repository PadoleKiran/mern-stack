// let str = "hello this is kiran";

// // console.log(str.startsWith('hello'));
// // console.log(str.endsWith('kiran'));

// let s = "hello";
// let e = "kiran";

// function kiranStart(s, str){
//     let val = false;
//     for(let i=0;i<s.length;i++){
//         if(s[i] === str[i]){
//             val = true;
//         }
//         else{
//             return false;
//         }
//     }
//     return val;
// }

// console.log(kiranStart(s,str));


// function kiranEnd(e, str){
//     let val = false;
//     for(let i=s.length - e.length;i<s.length;i++){
//         if(s[i] === str[i]){
//             val = true;
//         }
//         else{
//             return false;
//         }
//     }
//     return val;
// }


// console.log(kiranEnd(e,str));


// console.log(str.trim("kiran"));
// console.log(str.split(" "));


// function kiransplit(){
//     let val = [];
//     // let val[i] = [];
//     for(let i=0;i<str.length;i++){
//         for()
//     }
// }



// string is primitive  
// string is immutable
// string is iterable

let str = "hello this is kiran";

console.log(str.concat(" Acciojob"));  // concate two strings
console.log(str.trim());  // remove white spaces 

console.log(str.startsWith("h"));
console.log(str.endsWith("kiran"));
console.log(str.includes("is"));
console.log(str.slice(0,3));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("k"));
console.log(str.lastIndexOf("s"));
console.log(str.replace("k","c"));
console.log(str.replaceAll("s","!"));


for(let i=0;i<str.length;i++){
    // console.log(str[i]);
}

for(let s of str){
    // console.log(s);
}




// count vowels in a string (a,e,i,o,u)
let count = 0

for(let s of str){
    if(s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u'){
        count++;
    }
}

console.log(count + " vowels present in string");

// is there any issue in the above code?
// Yes, the condition in the if statement is incorrect. It should check each vowel separately. 
// Corrected code:
count = 0; 

let a = ['a', 'e', 'i', 'o', 'u'];
for(let s of str){
    if(a.includes(s)){
        count++;
    }
}
console.log(count + " vowels present in string after correction");


// reverse a string
// let rev = "";

// for(let i=str.length-1;i>=0;i--){
//     console.log(str[i]);
//     rev = rev + str[i];
// }

// console.log(rev);  // This will not work correctly due to the loop condition

// Corrected reverse string code
// let reversedStr = "";
// for(let i=str.length-1; i>=0; i--){
//     reversedStr += str[i];
// }  


console.log(str.split("").reverse().join(""));


// palindrom


let str1 = "kiran";
let j = 0;

let k = true;
for(let i = str1.length-1; i >= 0; i--){
    
    if(str1[i] !== str1[j])
    {
        k = false;
    }
    j++;
}

if(k){
    console.log(str1 + " is a palindrom");
}
else{
    console.log(str1 + " is not a palindrom");
}

// console.log(str1 + " is palindrom");

// is there any issue in the above code?
// Yes, the condition in the for loop is incorrect. It should check if `i` is greater than or equal to `j` before comparing characters.
// Corrected code:
// let str2 = "kiran";
// let j2 = 0;
// let isPalindrome = true;
// for(let i = str2.length - 1; i >= 0; i--){
//     if(str2[i] !== str2[j2]){
//         isPalindrome = false;
//         break; // Exit the loop early if a mismatch is found
//     }
//     j2++;
// }
// console.log(str2 + " is " + (isPalindrome ? "a palindrome" : "not a palindrome"));




let str2 = "kiran kiran kiran";

let newStr = "";

for(let i = 0; i < str2.length; i++){
    if(str[i] == " "){
        newStr += "-";
    }
    else{
        newStr += str2[i];
    }
}

console.log(newStr);


// count words in string

let s = "hello this is kiran"

// for(let i=0;i<s.length;i++){
    
// }

console.log(s.trim().split(" ").length)