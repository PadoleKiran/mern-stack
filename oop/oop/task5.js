let p = "hello";
let w = new String("hello !");

String.prototype.lastChar = function() {
    return this.charAt(this.length-1);
};

console.log(p.lastChar());
console.log(w.lastChar());