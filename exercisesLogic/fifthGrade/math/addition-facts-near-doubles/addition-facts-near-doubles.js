const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  x: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]],
  factor: [1, 10, 100, 1000],
  Additions() {
    const rating = factor => {
      if (factor < 100) {
        return 800;
      }

      if (factor >= 100 && factor < 1000) {
        return 1200;
      }

      return 1800;
    };
    const questions = [];

    for (let i = 0; i < this.x.length; i++) {
      for (let k = 0; k < this.factor.length; k++) {
        const a = this.x[i][0] * this.factor[k];
        const b = this.x[i][1] * this.factor[k];
        const total = a + b;
        questions.push({
          operation: `${Intl.NumberFormat().format(
            a
          )} + ${Intl.NumberFormat().format(b)} =`,
          correct: total.toString(),
          id: uuidv4(),
          rating: rating(this.factor[k])
        });
      }
    }

    return questions;
  },

  all() {
    return this.Additions();
  }
};

// Total = 32
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/fifthGrade/math/addition-facts-near-doubles.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
