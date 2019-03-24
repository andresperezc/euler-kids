const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  minuend: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ],
  subtrahend: [9],
  Subtractions() {
    const rating = number => {
      if (number < 3) {
        return 800;
      }
      if (number >= 3 && number < 6) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (let i = 0; i < this.minuend.length; i++) {
      for (let j = 0; j < this.subtrahend.length; j++) {
        const difference = this.minuend[i] - this.subtrahend[j];
        questions.push({
          operation: `${this.minuend[i]} - ${
            this.subtrahend[j]
          } = \\textcolor{#1E88E5}{\\_}`,
          negative: difference,
          correct: difference.toString(),
          id: uuidv4(),
          rating: rating(this.minuend[j])
        });
      }
    }

    for (let i = 0; i < this.minuend.length; i++) {
      for (let j = 0; j < this.subtrahend.length; j++) {
        const difference = this.minuend[i] - this.subtrahend[j];
        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} - ${
            this.subtrahend[j]
          } = ${difference} `,
          negative: difference,
          correct: this.minuend[i].toString(),
          id: uuidv4(),
          rating: rating(this.minuend[j])
        });
      }
    }

    for (let i = 0; i < this.minuend.length; i++) {
      for (let j = 0; j < this.subtrahend.length; j++) {
        const difference = this.minuend[i] - this.subtrahend[j];
        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} = ${this.minuend[i]} - ${
            this.subtrahend[j]
          }`,
          negative: difference,
          correct: difference.toString(),
          id: uuidv4(),
          rating: rating(this.minuend[j])
        });
      }
    }

    for (let i = 0; i < this.minuend.length; i++) {
      for (let j = 0; j < this.subtrahend.length; j++) {
        const difference = this.minuend[i] - this.subtrahend[j];
        questions.push({
          operation: `${difference} = \\textcolor{#1E88E5}{\\_} - ${
            this.subtrahend[j]
          }`,
          negative: difference,
          correct: this.minuend[i].toString(),
          id: uuidv4(),
          rating: rating(this.minuend[j])
        });
      }
    }

    return questions.filter(e => e.negative >= 0);
  },
  all() {
    return this.Subtractions();
  }
};

// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/firstGrade/math/two-digit-number-minus-nine-up-to-twenty-first-grade.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
