// let obj = {
//     name : "kiran",
//     age : 24,
//     1 : 1000,
//     prc : function() {
//         return "Hello kp";
//     }
// }

// console.log(obj);           // full object value will return
// console.log(obj.name);      // name value
// console.log(obj["age"]);    // age value with [] notation
// console.log(obj[1]);


// obj.email = "k@gmail.com";
// console.log(obj);

// for(let key in obj){
//     console.log(key + " : " + obj[key]);
// }

// console.log(Object.keys(obj));     // will give keys
// console.log(Object.values(obj));   // will give values
// console.log(Object.entries(obj));  // will give key values



// let x = obj.prc();      // will return value of function prc in object
// console.log(x);


// //array destrucating

// let arr = [1,2,3,4];

// // let one = arr[0];
// // let two = arr[1];
// // let three = arr[2];


// // let [one,two,three,four] = arr;
// // console.log(one,two,three,four);


// let [one,two, ,four,five = 5] = arr;  // if we not want some value and want add some values
// console.log(one,two,four,five);





// // object destructuring
// let obj2 = {    
//     name:"kiran",
//     val : 456,
//     age : 24
// };

// // let {name,val} = obj2;
// // console.log(obj2);

// let {name,age, email = "k@gmail.com"} = obj2;
// console.log(name , age,email);






// // spread operator

let arr1 = [2,4,6];
let a = [1,2,2]
let arr2 = arr1;   // in arr2 we are stroing refreance if any chnage happen in arr1 then it reflect in arr2

arr1[1] = 44;   

let arr3 = [...arr1]; // creating new array and storing arr1 all values 

arr1[1] = 77; 

console.log(arr3);




// rest operator (...)

function sum(...num){   // give sum for n numbers no limit
    let sum = 0;
    for(n of num){
        sum += n;
    }
    return sum;
}

console.log(sum(4,5,6));


let obj = {
    name:"kiran",
    num:50
}

let o = {...obj};
console.log(o);

// delete.obj[num];
// console.log(o);

let [first , ...rest] = [1,2,3,4];
console.log(rest);
console.log(first);




// map

let m1 = new Map();
m1.set("name","Kiran");
m2.set("age",23);

