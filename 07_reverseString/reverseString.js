const reverseString = function (word) {
  //take word and break it up
  let breakUpArray = word.split("");
  //re-order letters
  let reversedArray = breakUpArray.reverse();
  //join back together
  let reversedString = reversedArray.join("");

  return reversedString;
};

// WAY easier verson:
// const reverseString = function (string) {
//   return string.split("").reverse().join("");
// };

// Do not edit below this line
module.exports = reverseString;
