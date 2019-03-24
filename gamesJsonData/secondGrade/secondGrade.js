const secondGrade = (loadJsonFile, jsonPath) => {
  const grade = "/secondGrade";
  return {
    "one-and-two-digit-additions-and-subtraction-second-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/OneTwoAddSub.json");
    },
    "find-the-missing-number-additions-up-to-twenty-second-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/FindMissNumUpToTwenty.json"
      );
    },
    "one-and-two-digit-subtractions-second-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/one-and-two-digit-subtractions.json"
      );
    },
    "find-the-missing-number-subtractions-up-to-twenty-second-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/find-the-missing-number-subtractions-up-to-twenty.json"
      );
    },
    "two-times-table-second-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/two-times-table.json");
    },
    "three-times-table-second-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/three-times-table.json");
    },
    "four-times-table-second-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/four-times-table.json");
    },
    "five-times-table-second-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/five-times-table.json");
    },
    "six-times-table-second-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/six-times-table.json");
    },
    "seven-times-table-second-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/seven-times-table.json");
    },
    "eight-times-table-second-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/eight-times-table.json");
    },
    "nine-times-table-second-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/nine-times-table.json");
    },
    "ten-times-table-second-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/ten-times-table.json");
    },
    "eleven-times-table-second-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/eleven-times-table.json");
    },
    "subtractions-with-minuends-up-to-twenty-near-doubles-second-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/subtractions-with-minuends-up-to-twenty-near-doubles.json"
      );
    },
    "subtractions-with-minuends-up-to-twenty-doubles-second-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/subtractions-with-minuends-up-to-twenty-doubles.json"
      );
    },
    "subtractions-with-minuends-up-to-twenty-one-facts-second-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/subtractions-with-minuends-up-to-twenty-one-facts.json"
      );
    },
    "subtractions-with-minuends-up-to-twenty-two-facts-second-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/subtractions-with-minuends-up-to-twenty-two-facts.json"
      );
    },
    "subtractions-with-minuends-up-to-twenty-three-facts-second-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/subtractions-with-minuends-up-to-twenty-three-facts.json"
      );
    }
  };
};

module.exports = secondGrade;
