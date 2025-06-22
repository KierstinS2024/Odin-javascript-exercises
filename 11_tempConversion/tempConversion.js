const convertToCelsius = function (fDegrees) {
  celsius = ((fDegrees - 32) * 5) / 9;
  let cRounded = Math.round(celsius * 10) / 10;
  return cRounded;
};

const convertToFahrenheit = function (cDegrees) {
  farenheit = (cDegrees * 9) / 5 + 32;
  let fRounded = Math.round(farenheit * 10) / 10;
  return fRounded;
};

convertToFahrenheit(73.2);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
