// B2: Employee → Manager/Intern
class Employee {
  // TODO: constructor(name)
  constructor(name){
    this.name = name;
  }
  // TODO: intro()
  intro(){
    console.log("name is " + this.name);
  }
}

class Manager extends Employee {
  // TODO: constructor(name, dept)
  constructor(name, dept){
    super(name);
    this.dept = dept;
  }
  // TODO: intro() // call super.intro() then log dept
//   super.intro();
  intro(){
    super.intro();
    console.log("dept : " + this.dept);
  }
}

class Intern extends Employee {
  // TODO: constructor(name, durationMonths)
  constructor(name, deurationMonths){
    super(name);
    this.deurationMonths = deurationMonths;
  }
  // TODO: intro() // customized message
  intro(){
    console.log("this name : " + this.name + " deurationMonths : " + this.deurationMonths);
  }
}

// TODO: demo all three
let E = new Employee("kiran");
E.intro();

let M = new Manager("kiran", "cs");
M.intro();

let I = new Intern("kiran", 3);
I.intro();