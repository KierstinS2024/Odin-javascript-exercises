// function fibonacci(n) {
//   if n is 1 or 2:
//     return 1

//   otherwise:
//     set two starting values (like oneBack and twoBack)
//     loop from 3 up to n:
//       calculate the next number in the sequence
//       update previous values

//     return the result
// }

const fibonacci = function (n) {
  n = Number(n); // Convert string inputs like "6" to 6

  // Handle special cases
  if (n < 0 || Number.isNaN(n)) return "OOPS"; // Handle negatives and non-numbers
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
