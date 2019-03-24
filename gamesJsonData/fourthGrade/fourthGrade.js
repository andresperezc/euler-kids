const fourthGrade = (loadJsonFile, jsonPath) => {
  const grade = "/fourthGrade";
  return {
    "find-the-factor-to-complete-the-multiplication-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/FindFactorMultiplication.json"
      );
    },
    "one-two-digit-divisions-by-two-three-four-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/OneTwoDivTwoThreeFour.json"
      );
    },
    "divisions-by-two-three-four-and-five-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/divisions-by-two-three-four-and-five.json"
      );
    },
    "multiplications-by-tens-hundreds-or-thousands-fourth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/multiplications-by-tens-hundreds-or-thousands.json"
      );
    },
    "two-digit-divisions-by-five-six-ten-eleven-fourth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/two-digit-divisions-by-five-six-ten-eleven.json"
      );
    },
    "addition-facts-plus-one-ten-one-hundred-one-thousand-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/addition-facts-plus-one.json"
      );
    },
    "addition-facts-plus-two-twenty-two-hundred-two-thousand-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/addition-facts-plus-two.json"
      );
    },
    "addition-facts-plus-three-thirty-three-hundred-three-thousand-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/addition-facts-plus-three.json"
      );
    },
    "addition-facts-plus-four-fourty-four-hundred-four-thousand-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/addition-facts-plus-four.json"
      );
    },
    "addition-facts-plus-five-fifty-five-hundred-five-thousand-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/addition-facts-plus-five.json"
      );
    },
    "addition-facts-plus-six-sixty-six-hundred-six-thousand-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/addition-facts-plus-six.json"
      );
    },
    "addition-facts-plus-seven-seventy-seven-hundred-seven-thousand-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/addition-facts-plus-seven.json"
      );
    },
    "addition-facts-plus-eight-eighty-eight-hundred-eight-thousand-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/addition-facts-plus-eight.json"
      );
    },
    "addition-facts-plus-nine-ninety-nine-hundred-nine-thousand-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/addition-facts-plus-nine.json"
      );
    },
    "addition-facts-doubles-fourth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/addition-facts-doubles-fourth-grade.json"
      );
    }
  };
};

module.exports = fourthGrade;
