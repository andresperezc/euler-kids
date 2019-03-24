const thirdGrade = (loadJsonFile, jsonPath) => {
  const grade = "/thirdGrade";
  return {
    "mixed-times-tables-third-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/MixedTimesTables.json");
    },
    "find-the-missing-number-times-tables-two-five-ten-and-eleven-third-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/FindMissingTimesTablesTwoFive.json"
      );
    },
    "mixed-divisions-tables-third-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/mixed-divisions-tables.json"
      );
    },
    "find-the-missing-number-division-tables-two-five-ten-eleven-third-grade": function() {
      return loadJsonFile(
        jsonPath +
          grade +
          "/math/find-the-missing-number-division-tables-two-five-ten-eleven.json"
      );
    },
    "two-division-table-third-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/two-division-table.json");
    },
    "three-division-table-third-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/three-division-table.json");
    },
    "four-division-table-third-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/four-division-table.json");
    },
    "five-division-table-third-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/five-division-table.json");
    },
    "six-division-table-third-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/six-division-table.json");
    },
    "seven-division-table-third-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/seven-division-table.json");
    },
    "eight-division-table-third-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/eight-division-table.json");
    },
    "nine-division-table-third-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/nine-division-table.json");
    },
    "ten-division-table-third-grade": function() {
      return loadJsonFile(jsonPath + grade + "/math/ten-division-table.json");
    },
    "eleven-division-table-third-grade": function() {
      return loadJsonFile(
        jsonPath + grade + "/math/eleven-division-table.json"
      );
    }
  };
};

module.exports = thirdGrade;
