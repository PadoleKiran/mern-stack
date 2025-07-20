function calculator(num1,num2,operations) {
    switch(operations){
        case "+" : 
            return num1+num2;
        case "*" :
            return num1*num2;
        case "-" : 
            return num1-num2;
        case "/" :
            return num1/num2;
        default:
            return "yo";
    }

}

module.exports = calculator;
