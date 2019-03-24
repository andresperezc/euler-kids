const uuidv4 = require("uuid/v4");
const fs = require("fs");
const range = require("../../../../utilities/random").numberRange;

const logic = {
  divisors: [2, 3, 4, 5],
  factors: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  Divisions() {
    const rating = divisor => {
      if (divisor < 3) {
        return 800;
      }
      if (divisor >= 3 && divisor < 5) {
        return 1200;
      }
      return 1800;
    };

    const factors = range(5, 100);
    const questions = [];

    for (var i = 0; i < this.divisors.length; i++) {
      for (var j = 0; j < factors.length; j++) {
        const dividend = Number(this.divisors[i]) * Number(factors[j]);
        const correcta = dividend / Number(this.divisors[i]);
        questions.push({
          operation: `${dividend} \\div ${
            this.divisors[i]
          } = \\textcolor{#1E88E5}{\\_}`,
          filter: dividend,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(this.divisors[i])
        });
      }
    }

    // filtramos los dividendos menores igual a 100
    return questions.filter(e => e.filter <= 100);
  },
  all() {
    return this.Divisions();
  }
};

// Total = 112
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/fourthGrade/math/divisions-by-two-three-four-and-five.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
