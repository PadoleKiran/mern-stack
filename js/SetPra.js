let set1 = new Set();

// let arr = [4,5,8,4];

// set1.add(arr);
set1.add(5);
set1.add(9);
set1.add(4);
set1.add(7);
console.log(set1);

// // set1.has(4);
// console.log(set1.has(5));

// // console.log(set1.delete());
// set1.delete(5);
// console.log(set1.size);
// console.log(set1.clear());
// console.log(set1);


for(let i of set1){
    console.log(i);
    // console.log("of");
}
for(let j in set1){
    console.log(j);
    // console.log("in");
}


let m = new Map([["name", "kiran"],
    ["age", 25],["class", "MCS"]]
);
console.log(m);

console.log(m.get("name"));
console.log(m.has("name"));
// m.clear();
// console.log(m);

console.log("for loop")
for(i of m){
    console.log(i);
}

m.forEach((element, value)=> {
  console.log(element + " " + value);  
});



function duplicate(arr){
    let set2 = new Set();
    for(a of arr){
        set2.add(a);
    }

    if(set2.size == arr.length){
        console.log("No duplicate");
    }
    else{
        console.log("duplicate");
    }
}


duplicate([1,4,5,4]);