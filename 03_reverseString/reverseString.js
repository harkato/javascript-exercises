const reverseString = function(string) {
    let reverseStringArray = [];
    for (let i = 0; i<string.length; i++) {
        reverseStringArray[string.length-1-i] = string.charAt(i);
    }
    let reversedString = reverseStringArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
