const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  addends: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  xxx: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  Additions() {
    const rating = correct => {
      if (correct < 5) {
        return 800;
      }
      if (correct >= 5 && correct < 10) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.addends.length; i++) {
      for (var j = 0; j < this.xxx.length; j++) {
        const correcta = Math.floor(
          Number(this.addends[i]) + Number(this.xxx[j])
        );
        questions.push({
          operation: `${this.addends[i]} + ${this.xxx[j]} = \\textcolor{#1E88E5}{\\_}`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  all() {
    return this.Additions();
  }
};

// console.log(logic.all());

// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
//
// fs.writeFile(
//   "exercisesLogic/math/firstGrade/OneDigitAdditions/OneDigitAdditions.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
