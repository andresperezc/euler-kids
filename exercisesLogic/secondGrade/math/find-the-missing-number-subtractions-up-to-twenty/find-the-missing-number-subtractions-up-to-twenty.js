const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  minuend: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
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
        const total = this.minuend[i] - this.subtrahend[j];
        questions.push({
          operation: `${this.minuend[i]} - ${
            this.subtrahend[j]
          } = \\textcolor{#1E88E5}{\\_}`,
          negative: total,
          correct: total.toString(),
          id: uuidv4(),
          rating: rating(total)
        });
      }
    }

    for (let i = 0; i < this.minuend.length; i++) {
      for (let j = 0; j < this.subtrahend.length; j++) {
        const total = this.minuend[i] - this.subtrahend[j];
        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} - ${
            this.subtrahend[j]
          } = ${total}`,
          negative: total,
          correct: this.minuend[i].toString(),
          id: uuidv4(),
          rating: rating(total)
        });
      }
    }

    for (let i = 0; i < this.minuend.length; i++) {
      for (let j = 0; j < this.subtrahend.length; j++) {
        const total = this.minuend[i] - this.subtrahend[j];
        questions.push({
          operation: `${
            this.minuend[i]
          } - \\textcolor{#1E88E5}{\\_} = ${total}`,
          negative: total,
          correct: this.subtrahend[j].toString(),
          id: uuidv4(),
          rating: rating(total)
        });
      }
    }

    return questions.filter(e => e.negative >= 0);
  },
  all() {
    return this.Subtractions();
  }
};

// Total = 363
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/secondGrade/math/find-the-missing-number-subtractions-up-to-twenty.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
