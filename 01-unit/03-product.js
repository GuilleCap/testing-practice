// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function product(num1 = 1, num2 = 2) {
  return num1 * num2;
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the product of two numbers.
  var result = product(2, 2);
  if (result !== 4) throw new Error('Expected product(2, 2) to be 4. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return 0 when either of the numbers are 0.
  var result1 = product(5, 0);
  var result2 = product(0, 4);
  if (result1,result2 !== 0) throw new Error('Expected product(5, 0) or product(0, 4) to be 0. Received: ' + result1 + ' and ' + result2 );
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = product(1, 1, 2, 7, 3);
  if (result !== 1) throw new Error('Expected product(1, 1, 2, 7, 3) to be 1. Received: ' + result);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = product(2);
  if (result !== 4) throw new Error('Expected product(2) to be 4. Received: ' + result);
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = product(0);
  if (result !== 0) throw new Error('Expected product(0) to be 0. Received: ' + result);

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
