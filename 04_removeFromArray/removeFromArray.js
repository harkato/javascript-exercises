const removeFromArray = function(array,argument) {
    const args = Array.from(arguments);
    for (let j = 0; j < args.length; j++) {
        argument = args[j];
        for (let i = 0; i < array.length; i++) {
            if (argument === array[i]) {
                array.splice(i,1);
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
