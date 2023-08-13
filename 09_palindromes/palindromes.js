const palindromes = function isPalindrome(string) {
    const cleanedStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverseString = cleanedStr.split('').reverse().join('');
    if(cleanedStr == reverseString) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
