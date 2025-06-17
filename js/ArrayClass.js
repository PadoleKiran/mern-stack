// let marks = [10,50, 20, 30, 40, 50];

// for(let i=0;i<marks.length;i++) {
//     console.log(marks[i]);
// }

// for(let mark of marks){
//     console.log(mark);
// }

// console.log(marks);

/* ******************************** */
// Array operation
// let arr = [2, 3, 4, 6]

// inserting the array

//insert at end
// let k = arr.push(10);// return value size of new array
// console.log(k);

// insert at start
// arr.unshift(100); // return value size of new array
// console.log(arr);


// removing from end
// let j = arr.pop(); // return value ji revove keli ya delete keli ti
// console.log(arr);
// console.log(j); 

// removing from start
// j = arr.shift(); // return value ji revove keli ya delete keli ti
// console.log(j);


// removing from middle
// arr.slice();
// arr.slice(starting index,no. of element to be removed, element to insert)

// console.log(arr);

// remove from specific index
// arr.splice(2,1);
// console.log(arr);

// arr./

// insert at specific index
// arr.splice(2,0,200);
// console.log(arr);


// let a1 = [1,2,3]
// let a2 = [4,5,6]

// find index of element
// console.log(a1.indexOf(3)); // presesnt on which index
// console.log(a1.indexOf(6)); // if not find then we get -1

// reversing an array
// a1.reverse();
// console.log(a1);

// sorting an array
// a1.sort();
// console.log(a1);

// concatinate

// let a3 = a1.concat(a2);  // return array 
// console.log(a3);



// forEach
// forEach is used to iterate over each element of an array and perform an operation on it.
// It does not modify the original array and does not return a new array.
// It is a method of the Array class in JavaScript.
// It takes a callback function as an argument, which is executed for each element in the array.
// The callback function can take up to three arguments: the current element, the index of the current element, and the array itself.
// Example of forEach
// Using forEach to double each element in an array
// forEach
// forEach is a method that executes a provided function once for each array element.
// It is used to iterate over an array and perform a specific action on each element.
// It does not return a new array, but rather executes the provided function for each element in the original array.
// It is commonly used for side effects, such as logging or modifying elements in place.
// Example of forEach
// Using forEach to double each element in an array
// It is important to note that forEach does not return a new array, it simply executes the provided function for each element in the original array.
// Example of forEach
// Using forEach to double each element in an array
// forEach is a method that executes a provided function once for each array element.
// It is used to iterate over an array and perform a specific action on each element.
// It does not return a new array, but rather executes the provided function for each element in the original array.
// It is commonly used for side effects, such as logging or modifying elements in place.
// Example of forEach
// Using forEach to double each element in an array
// forEach is a method that executes a provided function once for each array element.
// It is used to iterate over an array and perform a specific action on each element.
// It does not return a new array, but rather executes the provided function for each element in the original array.
// It is commonly used for side effects, such as logging or modifying elements in place.
// Example of forEach
// Using forEach to double each element in an array

// let ar = [2,4,5,6,7]

// let m = ar.forEach((element) => {
//     console.log(element*2); 
// })
// Output: 4, 8, 10, 12, 14
// Note: forEach does not return a new array, it simply executes the provided function for each element in the original array.
// console.log(m); // Output: undefined
// Note: forEach does not return a new array, it simply executes the provided function for each element in the original array.


// it does not modify original array
// it returns undfined


//map 
// map is a method that creates a new array populated with the results of calling a provided function on every element in the original array.
// It is used to transform each element in an array and return a new array with the transformed values. 
// It does not modify the original array, but rather creates a new array with the transformed values.
// It is commonly used for data transformation, such as converting an array of numbers to an array of strings or vice versa.
// Example of map
// Using map to double each element in an array



// let mappedArray = ar.map((element) => {
//     return element * 2;
// });
// console.log(mappedArray); // [4, 8, 10, 12, 14]
// console.log(ar); // [2, 4, 5, 6, 7] - original array remains unchanged



// filter
// filter is a method that creates a new array with all elements that pass the test implemented by the provided function.
// It is used to filter out elements from an array based on a specific condition and return a new array with the filtered values.
// It does not modify the original array, but rather creates a new array with the filtered values.
// It is commonly used for data filtering, such as selecting elements that meet a certain criteria.
// Example of filter
// Using filter to get only even numbers from an array


// let a = [5,8,4,3,7,9];

// let filterArray = a.filter((element) => {return element>5});

// console.log(filterArray)


// sum of all elements

// let a = [1,2,3,4];

// function sumOfAllElements(a){
//     let sum = 0;
//     for(element of a){
//         sum += element;
//     }
//     return sum;
//     // let sum2 = (e) => sum
// }

// console.log(sumOfAllElements(a));

// let k = ()


// find maximum element largest number in array

// let a = [10,22,5,7];

// function getLargestElement(a){
//     let l = a[0];
//     for(a of a){
//         if(l < a){
//             l = a;
//         }
//     }
//     return l;
// }

// console.log(getLargestElement(a));


// let a = [1,4,6,7,8];

// function evenNumbers(a){
//     let count = 0;
//     // let k = 0;    
//     for(num of a){
//         if(num % 2 == 0){
//             count++;
//         }
//         // (num%2==0)? count++ : k++;
//     }
//     return count;
// }

// console.log(evenNumbers(a));


// let a = [1,2,3];

// function rev(a) {
//     let revArr = [];
//     for(let i = a.length-1; i>=0;i--){
//         revArr.push(a[i]);
//         // revArr[i] = a[i];
//     }
//     return revArr;
// }

// console.log(rev(a));

// console.log(typeof(rev(a)));
// console.log(typeof(a));


// // check if array contains element
// let a = [5,10,15];
// let num = 10;

// function containsElement(a,num) {
//     for(element of a){
//         if(num == element){
//             return true;
//         }
//     }
//     return false;

//     // return for(element of a)(num == element)
// }

// console.log(containsElement(a,num));


// let a = [4,5,6];

// function getlength(a){
//     let length = 0;
//     for(n of a){
//         length++;
//     }
//     return length;
// }
// console.log(getlength(a));




// let a = [2,6,8,3];


//  function getLargestElement(a){
//      let l = [];
//      for(a of a){
//          if(a > 5){
//              l.push(a);
//          }
//     }
//      return l;
//  }

//  console.log(getLargestElement(a));



// function doubleElement(arr){
//     let d = [];
//     for(a of arr){
//         d.push(a+a);
//     }
//     return d;
// }

// let arr = [1,2,3];
// console.log(doubleElement(arr));


// for each
// let arr = [1,2,3];

// arr.forEach(0,0,arr.length);

// arr.forEach((element) => {console.log(element)});

// double each element by using map

// let arr = [2,3,4]

// function doubleByMap(arr){
//     return arr.map((e) => {return e*2});
// }

// console.log(doubleByMap(arr));

// let arr = [1,2,3,4,5,6];

// function evenNum(arr){
    // let result = []
    // arr.filter((element) => {(element%2==0)? result.push(element): element});
    // return arr.filter((element) => {return element%2===0});
    // return result;
// }

// console.log(evenNum(arr));

// let arr = ["kiran","chetan","gaurav","miya Bhai"];

// function hiFun(arr){
//     return arr.map((element) => (`hi ${element}`));
// }

// console.log(hiFun(arr));


// let arr = [-2,5,3,-1,0];

// function positveNumCount(arr){
//     let count = 0;
//     arr.forEach((e) => ((e>0)? count++:e ));
//     // arr.forEach((e) => {})
//     return count;
// }

// console.log(positveNumCount(arr));


//string to upper case using map
// let arr = ["apple","banana","cherry"];

// function uppCaseArr(arr){
//     return arr.map((element) => (element.toUpperCase()));
// }

// console.log(uppCaseArr(arr));

// array greater than 50 using filter
// let arr = [10,60,45,80,30];

// function greterThan50(arr){
//     return arr.filter((ele) => {if(ele > 50) {return ele}});
// }

// console.log(greterThan50(arr));


// let k = ["x","y","z"];

// function PrintElement(k){
//     return k.forEach((element,index) => console.log( "Index " + index +":"+element ));
// }

// console.log(PrintElement(k));

let arr = [5,10,15];

function add10InEachNum(arr){
    return arr.map((element) => (element + 10));
}
console.log(add10InEachNum(arr));