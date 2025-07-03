let user = {
    name : "kiran"
}

let x = JSON.stringify(user);
console.log(x);

let y = JSON.parse(x);
console.log(y);

// hasOwnProperty