const leapYears = function(year) {
    firstCondition = year % 4 == 0;
    secondCondition = year % 100 == 0;
    thirdCondition = year % 400 == 0;
    if (firstCondition && thirdCondition && secondCondition) {
        return true;
    } else if (firstCondition && !secondCondition && !thirdCondition){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
