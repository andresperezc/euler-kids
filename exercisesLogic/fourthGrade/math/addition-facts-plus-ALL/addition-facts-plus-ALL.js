const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  y: [6, 60, 600, 6000],
  factor: [1, 10, 100, 1000],
  Additions() {
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
        for (let k = 0; k < this.factor.length; k++) {
          const producto = this.x[i] * this.factor[j];
          const resultado = producto + this.y[k];
          questions.push({
            operation: `${Intl.NumberFormat().format(
              producto
            )} + ${Intl.NumberFormat().format(this.y[k])} =`,
            correct: resultado.toString(),
            id: uuidv4(),
            rating: rating(this.y[k])
          });
        }
      }
    }

    for (let i = 0; i < this.x.length; i++) {
      for (let j = 0; j < this.y.length; j++) {
        for (let k = 0; k < this.factor.length; k++) {
          const producto = this.x[i] * this.factor[j];
          const resultado = producto + this.y[k];
          questions.push({
            operation: `${Intl.NumberFormat().format(
              this.y[k]
            )} + ${Intl.NumberFormat().format(producto)} =`,
            correct: resultado.toString(),
            id: uuidv4(),
            rating: rating(this.y[k])
          });
        }
      }
    }

    return questions;
  },

  all() {
    return this.Additions();
  }
};

// Total = 288 * 9
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/fourthGrade/math/addition-facts-plus-six.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
