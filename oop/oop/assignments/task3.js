class Device {
    constructor(name="gaurav"){
        this.name = name;
        console.log("this is Device constructor");
    }
    
    info(){
        console.log("In Device class" + " name is : " + this.name);
    }
}

class Phone extends Device {

    constructor(os){
        super();
        this.os = os;
    }

    info(){
        console.log("In phone class");
        console.log("Name value : " + this.name + " Os value : "+ this.os);
    }
}

class Laptop extends Device{

    constructor( ram){
        super();
        this.ram = ram;
    }
    // info(){
    //     // console.log(name + " "+ ram);
    //     console.log("in Laptop class");
    //     console.log("Value of name is " + this.name + " value of ram is "+this.ram);
    // }
}


let D = new Device("kiran");
D.info();


let L = new Laptop(14);
L.info();

// let P = new Phone();