const uuidv4 = require("uuid/v4");
const fs = require("fs");
const range = require("../../../../utilities/random").numberRange;
const randomfromArray = require("../../../../utilities/random").randomFromArray;

const logic = {
  x: [10, 100, 1000],
  y: range(10, 1000),
  Multiplications() {
    const rating = x => {
      if (x < 100) {
        return 800;
      }

      if (x >= 100 && x < 1000) {
        return 1200;
      }

      return 1800;
    };
    const questions = [];

    for (let i = 0; i < this.x.length; i++) {
      for (let j = 0; j < this.y.length; j++) {
        const correcta = this.x[i] * this.y[j];
        questions.push({
          operation: `${this.x[i]} \\times ${this.y[j]} =`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(this.x[i])
        });
      }
    }

    for (let i = 0; i < this.x.length; i++) {
      for (let j = 0; j < this.y.length; j++) {
        const correcta = this.x[i] * this.y[j];
        questions.push({
          operation: `${this.y[j]} \\times ${this.x[i]} =`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(this.x[i])
        });
      }
    }

    // Tomamos 2000 preguntas
    return randomfromArray(questions, 2000);
  },
  all() {
    return this.Multiplications();
  }
};

// Total = 2000
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/fifthGrade/math/two-and-three-digit-number-multiplications-by-ten-one-hundred-one-thousand.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
