const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  y: [
    [10, 20, 30, 40, 50, 60, 70, 80, 90],
    [100, 200, 300, 400, 500, 600, 700, 800, 900],
    [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
  ],
  Multiplications() {
    const rating = y => {
      if (y < 100) {
        return 800;
      }

      if (y >= 100 && y < 1000) {
        return 1200;
      }

      return 1800;
    };
    const questions = [];

    for (let i = 0; i < this.x.length; i++) {
      for (let j = 0; j < this.y.length; j++) {
        for (let k = 0; k < this.y[j].length; k++) {
          const correcta = this.x[i] * this.y[j][k];
          questions.push({
            operation: `${this.x[i]} \\times ${
              this.y[j][k]
            } =`,
            correct: correcta.toString(),
            id: uuidv4(),
            rating: rating(this.y[j][k])
          });
        }
      }
    }

    for (let i = 0; i < this.x.length; i++) {
      for (let j = 0; j < this.y.length; j++) {
        for (let k = 0; k < this.y[j].length; k++) {
          const correcta = this.x[i] * this.y[j][k];
          questions.push({
            operation: `${this.y[j][k]} \\times ${
              this.x[i]
            } =`,
            correct: correcta.toString(),
            id: uuidv4(),
            rating: rating(this.y[j][k])
          });
        }
      }
    }

    return questions;
  },

  all() {
    return this.Multiplications();
  }
};

// Total = 486
// console.log(logic.all().length);
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/fourthGrade/math/multiplications-by-tens-hundreds-or-thousands.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
