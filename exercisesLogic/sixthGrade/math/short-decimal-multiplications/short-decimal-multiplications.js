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
    0.09
  ],
  multiplier: [
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
    0.09
  ],
  All() {
    const rating = multipleIndex => {
      if (multipleIndex < 6) {
        return 800;
      }
      if (multipleIndex >= 6 && multipleIndex < 12) {
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
          rating: rating(i)
        });
      }
    }

    return questions;
  },
  all() {
    return this.All();
  }
};

// Total = 324
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/sixthGrade/math/short-decimal-multiplications.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
