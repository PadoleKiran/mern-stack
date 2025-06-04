var marks = 85;

if(marks >= 90) {
    console.log("Grade: A");
}
else if(marks >= 70 || marks <= 89) {
    console.log("Grade: B");
}
else if(marks >= 50 || marks <= 69) {
    console.log("Grade: C");
}
else if(marks <50) {
    console.log("Grade: D");
}
else {
    console.log("Invalid marks");
}