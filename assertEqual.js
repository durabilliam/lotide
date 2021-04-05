const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDC7D Assertion Passed: \"${actual}\" === \"${expected}\"`);
  } else if (actual !== expected) {
    console.log(`\uD83E\uDD2E Assertion Failed: \"${actual}\" !== \"${expected}\"`);
  } 
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 9);
assertEqual(1, "1");
