const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  divisor: ["2", "3", "4"],
  factor: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  Final() {
    const rating = correct => {
      if (correct < 22) {
        return 800;
      }
      if (correct >= 22 && correct < 33) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.divisor.length; i++) {
      for (var j = 0; j < this.factor.length; j++) {
        const a = Number(this.divisor[i]) * Number(this.factor[j]);
        const correcta = a / Number(this.divisor[i]);
        questions.push({
          operation: `${a} \\div ${
            this.divisor[i]
          } = \\textcolor{#1E88E5}{\\_}`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  all() {
    return this.Final()
  }
};

// Total = 33
// console.log(logic.all().length);
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "exercisesLogic/math/fourthGrade/OneTwoDivTwoThreeFour/OneTwoDivTwoThreeFour.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
