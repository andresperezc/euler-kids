const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  multiplicant: [
    0.1,
    0.2,
    0.3,
    0.4,
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    0.01,
    0.02,
    0.03,
    0.04,
    0.05,
    0.06,
    0.07,
    0.08,
    0.09,
    0.11
  ],
  multiplier: [2, 3, 4, 5, 6, 7, 8, 9],
  All() {
    const rating = multiplier => {
      if (multiplier < 5) {
        return 800;
      }
      if (multiplier >= 5 && multiplier < 8) {
        return 1200;
      }

      return 1800;
    };

    const correct2 = correct => {
      if (correct[0] === "0") {
        return correct.slice(1);
      }

      return correct;
    };

    const questions = [];

    for (let i = 0; i < this.multiplicant.length; i++) {
      for (let j = 0; j < this.multiplier.length; j++) {
        const correcta = +(this.multiplicant[i] * this.multiplier[j]).toFixed(
          12
        );

        questions.push({
          operation: `${this.multiplicant[i]} \\times ${this.multiplier[j]} =`,
          correct: correcta.toString(),
          correct2: correct2(correcta.toString()),
          id: uuidv4(),
          rating: rating(this.multiplier[j])
        });
      }
    }

    return questions;
  },
  all() {
    return this.All();
  }
};

// Total = 152
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/fifthGrade/math/multiply-decimals-by-one-digit-whole-numbers.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
