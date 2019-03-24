const sixthGrade = (loadJsonFile, jsonPath) => {
  const grade = "/sixthGrade";
  return {
    "one-digit-long-divisions-sixth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/OneDiLongDivisionSixthGrade.json"
      );
    },
    "addition-n-subtraction-equations-sixth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/addition-n-subtraction-equations.json"
      );
    },
    "short-decimal-additions-sixth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/short-decimal-additions.json"
      );
    },
    "short-decimal-subtractions-sixth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/short-decimal-subtractions.json"
      );
    },
    "short-decimal-multiplications-sixth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/short-decimal-multiplications.json"
      );
    },
    "additions-with-two-tens-sixth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/additions-with-two-tens-sixth-grade.json"
      );
    },
    "additions-with-two-hundreds-sixth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/additions-with-two-hundreds-sixth-grade.json"
      );
    },
    "additions-with-thousands-two-numbers-sixth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/additions-with-thousands-two-numbers-sixth-grade.json"
      );
    },
    "additions-with-three-tens-sixth-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/additions-with-three-tens-sixth-grade.json"
      );
    },
    "additions-with-three-hundreds-sixth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/additions-with-three-hundreds-sixth-grade.json"
      );
    },
    "additions-with-thousands-three-numbers-sixth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/additions-with-thousands-three-numbers-sixth-grade.json"
      );
    },
    "additions-and-subtractions-with-tens-sixth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/additions-and-subtractions-with-tens-sixth-grade.json"
      );
    },
    "additions-and-subtractions-with-hundreds-sixth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/additions-and-subtractions-with-hundreds-sixth-grade.json"
      );
    },
    "additions-and-subtractions-with-thousands-sixth-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/additions-and-subtractions-with-thousands-sixth-grade.json"
      );
    }
  };
};

module.exports = sixthGrade;
