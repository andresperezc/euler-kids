const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  multiplicant: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  multiplier: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  Multiplications() {
    const rating = correct => {
      if (correct < 34) {
        return 800;
      }
      if (correct >= 34 && correct < 50) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.multiplicant.length; i++) {
      for (var j = 0; j < this.multiplier.length; j++) {
        const correcta = Math.floor(
          Number(this.multiplicant[i]) * Number(this.multiplier[j])
        );
        questions.push({
          operation: `${this.multiplicant[i]} \\times ${this.multiplier[j]} = \\textcolor{#1E88E5}{\\_}`,
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
//
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
//
// fs.writeFile(
//   "exercisesLogic/math/thirdGrade/MixedTimesTables/MixedTimesTables.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
