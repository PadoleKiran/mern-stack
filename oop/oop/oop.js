// object oriented programming

// Everything in JS is an object
// object is a collection of key value pairs
// key is a string
// value can be anything


// how to create an object
// 1. object literal 
// 2. class
// 3. constructor function



class ObjCreate{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    setAge(newAge) {
        this.age = newAge;
    }

    info(){
        return `info about student ${this.name} is ${this.age}`;
    }
}

let obje1 = new ObjCreate("kiran", 24);

console.log(obje1.info());

obje1.setAge(25);

console.log(obje1.info());