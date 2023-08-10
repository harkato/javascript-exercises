const palindromes = function isPalindrome(string) {
    reverseString = string.split('').reverse().join('').toLowerCase();
    originalString = string.toLowerCase();
    if(originalString == reverseString) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
