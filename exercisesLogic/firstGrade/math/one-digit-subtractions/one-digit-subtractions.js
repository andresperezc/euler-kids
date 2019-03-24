const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  minuend: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  subtrahend: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Subtractions() {
    const rating = correct => {
      if (correct < 2) {
        return 800;
      }
      if (correct >= 2 && correct < 5) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (let i = 0; i < this.minuend.length; i++) {
      for (let j = 0; j < this.subtrahend.length; j++) {
        const correcta = this.minuend[i] - this.subtrahend[j];
        questions.push({
          operation: `${this.minuend[i]} - ${
            this.subtrahend[j]
          } = \\textcolor{#1E88E5}{\\_}`,
          negative: correcta,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions.filter(e => e.negative >= 0);
  },
  all() {
    return this.Subtractions();
  }
};

// Total = 66
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/firstGrade/math/one-digit-subtractions.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
