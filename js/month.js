/* Valid Date
Determine whether a given calendar date is valid or invalid.

Rules
Month must be between 1 and 12.

Day must fit the month and year:

31-day months: January, March, May, July, August, October, December (1, 3, 5, 7, 8, 10, 12)

30-day months: April, June, September, November (4, 6, 9, 11)

February (2)

29 days in a leap year
28 days otherwise
Leap year criteria

Divisible by 4 and not divisible by 100, unless also divisible by 400
 */

var day = 31;
var month = 4;
var year = 2023;



if (month >= 1 && month <= 12 && month != 2) {
    if(month%2 != 0) {
        if(day = 31) {
            console.log("Valid");
        }
        else {
            console.log("Invalid");
        }
    }
    else {
        if(day == 30) {
            console.log("Valid");
        }
        else {
            console.log("Invalid");
        }
    }
}
else if (month == 2) {
    if (year %4 == 0 && (year%100 != 0 || year %400 == 0)){
        if(day = 29) {
            console.log("Valid");
        }
        else {
            console.log("Invalid");
        }
    }
    else if(year % 4 != 0 || (year % 100 == 0 && year % 400 != 0)) {

        if(day == 28) {
            console.log("Valid");
        }
        else {
            console.log("Invalid");
        }
        
    }
}