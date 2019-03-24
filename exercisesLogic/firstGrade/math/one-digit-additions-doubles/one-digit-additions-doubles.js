const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  summand: [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
    [9, 9],
    [10, 10]
  ],
  Additions() {
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

    for (let i = 0; i < this.summand.length; i++) {
      const correcta = this.summand[i][0] + this.summand[i][1];
      questions.push({
        operation: `${this.summand[i][0]} + ${
          this.summand[i][1]
        } = \\textcolor{#1E88E5}{\\_}`,
        correct: correcta.toString(),
        id: uuidv4(),
        rating: rating(this.summand[i][0])
      });
    }

    return questions;
  },
  all() {
    return this.Additions();
  }
};

// Total = 11
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/firstGrade/math/one-digit-additions-doubles.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
