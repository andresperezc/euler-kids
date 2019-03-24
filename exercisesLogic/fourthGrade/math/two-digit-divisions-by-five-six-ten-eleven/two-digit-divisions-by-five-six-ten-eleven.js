const uuidv4 = require("uuid/v4");
const fs = require("fs");
const range = require("../../../../utilities/random").numberRange;

const logic = {
  divisor: [5, 6, 10, 11],
  factor: range(1, 20),
  Final() {
    const rating = divisor => {
      if (divisor < 6) {
        return 800;
      }
      if (divisor >= 6 && divisor < 10) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.divisor.length; i++) {
      for (var j = 0; j < this.factor.length; j++) {
        const a = this.divisor[i] * this.factor[j];
        const correcta = a / this.divisor[i];
        questions.push({
          operation: `${a} \\div ${
            this.divisor[i]
          } = \\textcolor{#1E88E5}{\\_}`,
          lessThan100: a,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions.filter(e => e.lessThan100 < 100);
  },
  all() {
    return this.Final();
  }
};

// Total = 53
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/fourthGrade/math/two-digit-divisions-by-five-six-ten-eleven.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
