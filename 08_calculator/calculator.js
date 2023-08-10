const add = function(firstNumber, secondNumber) {
  let numbers = {
    firstNumber,
    secondNumber,
  }
  let result = 0;
  for(number in numbers) {
    result += numbers[number]
  }
  return result;
};

const subtract = function(firstNumber, secondNumber) {
  let numbers = {
    firstNumber,
    secondNumber,
  }
  return numbers.firstNumber - numbers.secondNumber;
};

const sum = function(...args) {
    if (Array.isArray(args[0])) {
      args = args[0];
    }
    const numbers = {};
    for (let i = 0; i < args.length; i++) {
        const key = `number${i + 1}`;
        numbers[key] = Number(args[i]);
    }
    let sum = 0;
    for (const key in numbers) {
      sum+= numbers[key];
    }
    return sum;
}

const multiply = function(...args) {
  let numbers = {}
    for (let i = 0; i < args.length; i++) {
      const key = `number${i + 1}`;
      numbers[key] = Number(args[i]);
  }
  let multi = 1;
  for (const key in numbers) {
    multi*= numbers[key];
  }
  return multi;
}

const power = function(firstNumber, secondNumber) {
  let numbers = {
    firstNumber,
    secondNumber,
  }
  return numbers.firstNumber ** numbers.secondNumber;
};

const factorial = function(number) {
	if (!(number === 0)) {
    let result = 1;
    for (let i = number; i>0; i--) {
      result*= i;
    }
    return result;
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
