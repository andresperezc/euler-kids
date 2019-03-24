const uuidv4 = require("uuid/v4");
const fs = require("fs");
const range = require("../../../../utilities/random").numberRange;
const takeRandom = require("../../../../utilities/random").randomFromArray;

const logic = {
  numbers: range(1000, 10000),
  add: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  product: 1000,
  Additions() {
    const rating = add => {
      if (add < 4) {
        return 800;
      }

      if (add >= 4 && add < 7) {
        return 1200;
      }

      return 1800;
    };
    const questions = [];

    for (let i = 0; i < this.numbers.length; i++) {
      for (let j = 0; j < this.add.length; j++) {
        const a = this.numbers[i];
        const tenth = this.add[j] * this.product;
        const total = a + tenth;

        questions.push({
          operation: `${Intl.NumberFormat().format(
            a
          )} + ${Intl.NumberFormat().format(tenth)} =`,
          correct: total.toString(),
          id: uuidv4(),
          rating: rating(this.add[j])
        });
      }
    }

    for (let i = 0; i < this.numbers.length; i++) {
      for (let j = 0; j < this.add.length; j++) {
        const a = this.numbers[i];
        const tenth = this.add[j] * this.product;
        const total = a + tenth;

        questions.push({
          operation: `${Intl.NumberFormat().format(
            tenth 
          )} + ${Intl.NumberFormat().format(a)} =`,
          correct: total.toString(),
          id: uuidv4(),
          rating: rating(this.add[j])
        });
      }
    }

    return questions;
  },
  all() {
    return takeRandom(this.Additions(), 1620);
  }
};

// Total = tens 1620, hundreds = 1620, thousands = 1620
console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/sixthGrade/math/additions-with-thousands-two-numbers-sixth-grade.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
