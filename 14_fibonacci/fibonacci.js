// function fibonacci(n) {
//   convert input to a number
//
//   if n is less than 0 or not a number:
//     return error message
//
//   if n is 0:
//     return 0
//   if n is 1:
//     return 1
//
//   set two starting values (like oneBack = 1 and twoBack = 0)
//
//   loop from 2 up to n:
//     calculate nextNumber as oneBack + twoBack
//     shift twoBack to oneBack
//     shift oneBack to nextNumber
//
//   return oneBack
// }


const fibonacci = function (n) {
  n = Number(n); // Convert string inputs like "6" to 6

  // Handle special cases
  if (n < 0 || Number.isNaN(n))
    return "Try again! No negatives or letters allowed!"; // Handle negatives and non-numbers
  if (n === 0) return 0; // First number in the sequence
  if (n === 1) return 1; // Second number in the sequence

  let twoBack = 0; // Starts as F(0)
  let oneBack = 1; // Starts as F(1)

  // Start calculating from position 2 up to n
  for (let i = 2; i <= n; i++) {
    let nextNumber = oneBack + twoBack; // Add last two numbers
    twoBack = oneBack; // Shift one step forward
    oneBack = nextNumber; // Shift one step forward
  }

  return oneBack; // This holds the final result
};


// Do not edit below this line
module.exports = fibonacci;
