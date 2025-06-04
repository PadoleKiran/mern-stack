var num = 4000;
var year = 365;
var month = 30;
var day = 1;

var yearCount = 0;
var monthCount = 0;
var dayCount = 0;


while(true) {
	if(num >= 365){
		num = num - year;
		yearCount += 1;
	}
	else if(num >= 30){
		num = num - month;
		monthCount += 1;
	}
	else if(num >= 1){
		num = num - day;
		dayCount += 1;
	}
    else {
        break;
    }
}

console.log( yearCount + " year," + monthCount + " month, " + dayCount + " days.");