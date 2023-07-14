const sumAll = function(initialNumber,finalNumber) {
    finalResult = 0;
    let times = Math.abs(finalNumber-initialNumber);
    let i = 0;
    
    if (!Number.isInteger(initialNumber) || !Number.isInteger(finalNumber) || initialNumber<0 || finalNumber<0  ) {
        return "ERROR";
    } else if (initialNumber>finalNumber){
        while(i<=times){
            finalResult += finalNumber;
            finalNumber++;
            i++;
        }
    } else {
        while(i<=times){
            finalResult += initialNumber;
            initialNumber++;
            i++;
        }
    }

    return finalResult;
};

// Do not edit below this line
module.exports = sumAll;
