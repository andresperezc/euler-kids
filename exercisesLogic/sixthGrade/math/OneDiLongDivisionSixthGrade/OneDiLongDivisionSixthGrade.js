const uuidv4 = require("uuid/v4");
const fs = require("fs");
const range = require("../../../../utilities/random").numberRange;

const logic = {
  divisors: ["2", "3", "4", "5", "6", "7", "8", "9"],
  Multiplications() {
    const rating = correct => {
      if (correct < 200) {
        return 800;
      }
      if (correct >= 200 && correct < 500) {
        return 1200;
      }
      return 1800;
    };

    const numbers = range(10, 1000);

    const questions = [];

    for (var i = 0; i < this.divisors.length; i++) {
      for (var j = 0; j < numbers.length; j++) {
        const factor = this.divisors[i] * numbers[j];
        const correcta = Number(factor) / Number(this.divisors[i]);
        questions.push({
          operation: `${Intl.NumberFormat().format(factor)} \\div ${this.divisors[i]} = \\textcolor{#1E88E5}{\\_}`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  all() {
    return this.Multiplications();
  }
};

// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
//
// fs.writeFile(
//   "exercisesLogic/math/sixthGrade/OneDiLongDivisionSixthGrade/OneDiLongDivisionSixthGrade.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
