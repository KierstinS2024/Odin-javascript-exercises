const sumAll = function (a, b) {
  //add conditions to make sure there's no negatives and only accepts integers
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";
  //create variable to add to
  let sum = 0;
  //make sure we're starting with the smaller number and increasing to larger number
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
