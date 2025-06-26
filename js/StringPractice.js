let str = "hello this is kiran";

// console.log(str.startsWith('hello'));
// console.log(str.endsWith('kiran'));

let s = "hello";
let e = "kiran";

function kiranStart(s, str){
    let val = false;
    for(let i=0;i<s.length;i++){
        if(s[i] === str[i]){
            val = true;
        }
        else{
            return false;
        }
    }
    return val;
}

console.log(kiranStart(s,str));


function kiranEnd(e, str){
    let val = false;
    for(let i=s.length - e.length;i<s.length;i++){
        if(s[i] === str[i]){
            val = true;
        }
        else{
            return false;
        }
    }
    return val;
}


console.log(kiranEnd(e,str));


console.log(str.trim("kiran"));
console.log(str.split(" "));


function kiransplit(){
    let val = [];
    // let val[i] = [];
    for(let i=0;i<str.length;i++){
        for()
    }
}