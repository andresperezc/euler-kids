const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  multiplicant: [3],
  multiplier: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  Multiplications() {
    const rating = correct => {
      if (correct < 9) {
        return 800;
      }
      if (correct >= 9 && correct < 21) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (let i = 0; i < this.multiplicant.length; i++) {
      for (let j = 0; j < this.multiplier.length; j++) {
        const result =
          Number(this.multiplicant[i]) * Number(this.multiplier[j]);
        questions.push({
          operation: `${this.multiplicant[i]} \\times ${
            this.multiplier[j]
          } = \\textcolor{#1E88E5}{\\_}`,
          correct: result.toString(),
          id: uuidv4(),
          rating: rating(result)
        });
      }
    }

    for (let i = 0; i < this.multiplicant.length; i++) {
      for (let j = 0; j < this.multiplier.length; j++) {
        const result =
          Number(this.multiplicant[i]) * Number(this.multiplier[j]);
        questions.push({
          operation: `${this.multiplier[j]} \\times ${
            this.multiplicant[i]
          } = \\textcolor{#1E88E5}{\\_}`,
          correct: result.toString(),
          id: uuidv4(),
          rating: rating(result)
        });
      }
    }

    //***

    for (let i = 0; i < this.multiplicant.length; i++) {
      for (let j = 0; j < this.multiplier.length; j++) {
        const result =
          Number(this.multiplicant[i]) * Number(this.multiplier[j]);
        questions.push({
          operation: `${
            this.multiplicant[i]
          } \\times \\textcolor{#1E88E5}{\\_} = ${result}`,
          correct: this.multiplier[j].toString(),
          id: uuidv4(),
          rating: rating(result)
        });
      }
    }

    for (let i = 0; i < this.multiplicant.length; i++) {
      for (let j = 0; j < this.multiplier.length; j++) {
        const result =
          Number(this.multiplier[j]) * Number(this.multiplicant[i]);
        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} \\times ${
            this.multiplicant[i]
          } = ${result}`,
          correct: this.multiplier[j].toString(),
          id: uuidv4(),
          rating: rating(result)
        });
      }
    }

    return questions;
  },
  all() {
    return this.Multiplications();
  }
};

// Total = 48
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
//
// fs.writeFile(
//   "gamesJsonData/secondGrade/math/three-times-table.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
