let time = 12;

if(time >= 7 && time <= 12){
    console.log("morning");
}
else if(time > 12 && time <= 6) {
    console.log("After noone");
}
else if((time > 6 && time <= 10)) {
    console.log("Evening");
}
else {
    console.log("Night");
}