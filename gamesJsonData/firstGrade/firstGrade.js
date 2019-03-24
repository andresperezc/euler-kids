const firstGrade = (loadJsonFile, jsonPath) => {
  const grade = "/firstGrade";
  return {
    "one-digit-additions-first-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/OneDigitAdditions.json");
    },
    "find-the-missing-number-one-digit-additions-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/FindNumberOneDigitAdd.json"
      );
    },
    "one-digit-subtractions-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-subtractions.json"
      );
    },
    "find-the-missing-number-one-digit-subtractions-first-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/find-the-missing-number-one-digit-subtractions.json"
      );
    },
    "one-digit-additions-and-subtractions-up-to-twenty-first-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/one-digit-additions-and-subtractions-up-to-twenty.json"
      );
    },
    "one-digit-numbers-plus-one-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-numbers-plus-one.json"
      );
    },
    "one-digit-numbers-plus-two-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-numbers-plus-two.json"
      );
    },
    "one-digit-numbers-plus-three-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-numbers-plus-three.json"
      );
    },
    "one-digit-numbers-plus-four-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-numbers-plus-four.json"
      );
    },
    "one-digit-numbers-plus-five-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-numbers-plus-five.json"
      );
    },
    "one-digit-numbers-plus-six-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-numbers-plus-six.json"
      );
    },
    "one-digit-numbers-plus-seven-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-numbers-plus-seven.json"
      );
    },
    "one-digit-numbers-plus-eight-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-numbers-plus-eight.json"
      );
    },
    "one-digit-numbers-plus-nine-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-numbers-plus-nine.json"
      );
    },
    "one-digit-numbers-plus-ten-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-numbers-plus-ten.json"
      );
    },
    "one-digit-additions-doubles-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-additions-doubles.json"
      );
    },
    "one-digit-number-minus-one-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-number-minus-one-first-grade.json"
      );
    },
    "one-digit-number-minus-two-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-number-minus-two-first-grade.json"
      );
    },
    "one-digit-number-minus-three-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-number-minus-three-first-grade.json"
      );
    },
    "one-digit-number-minus-four-first-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-digit-number-minus-four-first-grade.json"
      );
    },
    "two-digit-number-minus-five-up-to-twenty-first-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/two-digit-number-minus-five-up-to-twenty-first-grade.json"
      );
    },
    "two-digit-number-minus-six-up-to-twenty-first-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/two-digit-number-minus-six-up-to-twenty-first-grade.json"
      );
    },
    "two-digit-number-minus-seven-up-to-twenty-first-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/two-digit-number-minus-seven-up-to-twenty-first-grade.json"
      );
    },
    "two-digit-number-minus-eight-up-to-twenty-first-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/two-digit-number-minus-eight-up-to-twenty-first-grade.json"
      );
    },
    "two-digit-number-minus-nine-up-to-twenty-first-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/two-digit-number-minus-nine-up-to-twenty-first-grade.json"
      );
    }
  };
};

module.exports = firstGrade;
