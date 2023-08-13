const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    number = parseInt(number);
    if (number <= 2) return 1;
    let sum = 0;
    let firstNumber = 1;
    let secondNumber = 1;
    for (let i = number-2; i>0; i--) {
        sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;


// 1, 1, 2, 3, 5, 8