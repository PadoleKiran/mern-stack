// class FourQ {
//     constructor(title) {
//         this.title = title;
//     }   

//     des(){
//         return "Description for this " + this.title;
//     }
// }

// let obj1 = new FourQ("first title");
// let obj2 = Object.create(obj1);


// console.log(obj1);
// console.log(obj2);
// obj2.title = "My Note";
// // obj2.abc = "My";

// console.log(obj2);


const base = {
    describe() {
        return `title: ${this.title}`;
    }
}
const note = Object.create(base);

note.title = "my title";
console.log(note.describe());