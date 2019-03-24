const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  tables: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  divisors: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  Divisions() {
    const rating = divisor => {
      if (divisor < 5) {
        return 800;
      }
      if (divisor >= 5 && divisor < 9) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.tables.length; i++) {
      for (var j = 0; j < this.divisors.length; j++) {
        const dividend = Number(this.tables[i]) * Number(this.divisors[j]);
        const correcta = dividend / Number(this.tables[i]);
        questions.push({
          operation: `${dividend} \\div ${
            this.tables[i]
          } = \\textcolor{#1E88E5}{\\_}`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(this.tables[i])
        });
      }
    }

    return questions;
  },
  all() {
    return this.Divisions();
  }
};

// Total = 100
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/thirdGrade/math/mixed-divisions-tables.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
