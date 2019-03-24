const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  divisor: [7],
  dividend: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  Divisions() {
    const rating = factor => {
      if (factor < 21) {
        return 800;
      }
      if (factor >= 21 && factor < 49) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (let i = 0; i < this.divisor.length; i++) {
      for (let j = 0; j < this.dividend.length; j++) {
        const factor = this.dividend[j] * this.divisor[i];
        const result = factor / this.divisor[i];
        questions.push({
          operation: `${factor} \\div ${
            this.divisor[i]
          } = \\textcolor{#1E88E5}{\\_}`,
          correct: result.toString(),
          id: uuidv4(),
          rating: rating(factor)
        });
      }
    }

    for (let i = 0; i < this.divisor.length; i++) {
      for (let j = 0; j < this.dividend.length; j++) {
        const factor = this.dividend[j] * this.divisor[i];
        const result = factor / this.divisor[i];
        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} \\div ${
            this.divisor[i]
          } = ${result}`,
          correct: factor.toString(),
          id: uuidv4(),
          rating: rating(factor)
        });
      }
    }

    //***

    for (let i = 0; i < this.divisor.length; i++) {
      for (let j = 0; j < this.dividend.length; j++) {
        const factor = this.dividend[j] * this.divisor[i];
        const result = factor / this.divisor[i];
        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} = ${factor} \\div ${
            this.divisor[i]
          }`,
          correct: result.toString(),
          id: uuidv4(),
          rating: rating(factor)
        });
      }
    }

    for (let i = 0; i < this.divisor.length; i++) {
      for (let j = 0; j < this.dividend.length; j++) {
        const factor = this.dividend[j] * this.divisor[i];
        const result = factor / this.divisor[i];
        questions.push({
          operation: `${result} = \\textcolor{#1E88E5}{\\_} \\div ${
            this.divisor[i]
          }`,
          correct: factor.toString(),
          id: uuidv4(),
          rating: rating(factor)
        });
      }
    }

    return questions;
  },
  all() {
    return this.Divisions();
  }
};

// Total = 48
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/thirdGrade/math/seven-division-table.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
