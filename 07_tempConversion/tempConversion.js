const convertToCelsius = function(temperatureFahrenheit) {
  let result = 0;
  let answer = 0;
  result = ((temperatureFahrenheit-32) *5/9)
  if (!Number.isInteger(result)) {
    answer = Number(((result)).toFixed(1));
    return answer;
  }
  return result;
};

const convertToFahrenheit = function(temperatureCelsius) {
  let result = 0;
  let answer = 0;
  result = ((temperatureCelsius*9/5) +32);
  if (!Number.isInteger(result) ) {
    answer = Number(((result)).toFixed(1));
    return answer;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
