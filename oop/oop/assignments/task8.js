// C3: Shape Areas
class Shape {
  // TODO: area()
  area(){
    console.log("Area is : ");
    // let a = 3.14 * r * r;
  }
}
class Circle extends Shape {
  // TODO: constructor(r)
  constructor(r){
    super();
    this.r = r;
  }
  // TODO: area()
  area(){
    // super();
    let a = 3.14 * this.r * this.r;
    console.log("circle : " + a);
  }
}
class Rectangle extends Shape {
  // TODO: constructor(w, h)
  constructor(w,h){
    super();
    this.w = w;
    this.h = h;
  }
  // TODO: area()
  area(){
    // super();
    let a = this.w * this.h;
    console.log("Rectangle : " + a);
  }
}
class Triangle extends Shape {
  // TODO: constructor(b, h)
  constructor(b,h){
    super();
    this.b = b;
    this.h = h;
  }
  // TODO: area()
  area(){
    // super();
    let a = (this.b*this.h)/2;
    console.log("Triangle : " + a);
  }
}

// TODO: demo: array of shapes → compute total area
let list = [new Shape(), new Circle(10), new Rectangle(4,2),new Triangle(5,4)];
for(let i of list){
    i.area();
}