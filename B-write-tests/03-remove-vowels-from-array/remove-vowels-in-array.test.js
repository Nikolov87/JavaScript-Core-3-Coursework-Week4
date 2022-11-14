let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let words = ["irina", "etza", "daniel"];

  // Act
  let result = removeVowelsFromWords(words);

  // Assert
  let expected = ["rn", "tz", "dnl"];
  expect(result).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
