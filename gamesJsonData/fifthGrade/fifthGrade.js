const fifthGrade = (loadJsonFile, jsonPath) => {
  const grade = "/fifthGrade";
  return {
    "decimal-additions-up-to-thousandths-fifth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/DecimalAdditionsFifthGrade.json"
      );
    },
    "find-the-missing-number-long-multiplications-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/find-the-missing-number-long-multiplications.json"
      );
    },
    "decimal-multiplications-by-ten-one-hundred-and-one-thousand-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/decimal-multiplications-by-ten-one-hundred-and-one-thousand.json"
      );
    },
    "two-and-three-digit-number-multiplications-by-ten-one-hundred-one-thousand-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/two-and-three-digit-number-multiplications-by-ten-one-hundred-one-thousand.json"
      );
    },
    "multiply-decimals-by-one-digit-whole-numbers-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/multiply-decimals-by-one-digit-whole-numbers.json"
      );
    },
    "addition-facts-doubles-plus-ten-one-hundred-one-thousand-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/addition-facts-doubles-plus-ten-one-hundred-one-thousand.json"
      );
    },
    "addition-facts-doubles-plus-twenty-two-hundred-two-thousand-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/addition-facts-doubles-plus-twenty-two-hundred-two-thousand.json"
      );
    },
    "addition-facts-doubles-plus-thirty-three-hundred-three-thousand-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/addition-facts-doubles-plus-thirty-three-hundred-three-thousand.json"
      );
    },
    "addition-facts-doubles-plus-fourty-four-hundred-four-thousand-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/addition-facts-doubles-plus-fourty-four-hundred-four-thousand.json"
      );
    },
    "addition-facts-doubles-plus-fifty-five-hundred-five-thousand-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/addition-facts-doubles-plus-fifty-five-hundred-five-thousand.json"
      );
    },
    "addition-facts-doubles-plus-sixty-six-hundred-six-thousand-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/addition-facts-doubles-plus-sixty-six-hundred-six-thousand.json"
      );
    },
    "addition-facts-doubles-plus-seventy-seven-hundred-seven-thousand-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/addition-facts-doubles-plus-seventy-seven-hundred-seven-thousand.json"
      );
    },
    "addition-facts-doubles-plus-eighty-eight-hundred-eight-thousand-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/addition-facts-doubles-plus-eighty-eight-hundred-eight-thousand.json"
      );
    },
    "addition-facts-doubles-plus-ninety-nine-hundred-nine-thousand-fifth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/addition-facts-doubles-plus-ninety-nine-hundred-nine-thousand.json"
      );
    },
    "addition-facts-near-doubles-fifth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/addition-facts-near-doubles.json"
      );
    }
  };
};

module.exports = fifthGrade;
