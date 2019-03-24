const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  multiplicant: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  multiplier: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  Tenths() {
    const precision = 10; // 100 - 2 decimals 1000 - 3 decimals
    const rating = correcta => {
      if (correcta < 65) {
        return 800;
      }

      if (correcta >= 65 && correcta < 120) {
        return 1200;
      }

      return 1800;
    };

    const questions = [];

    for (let i = 0; i < 2500; i++) {
      const randomN =
        Math.floor(Math.random() * (100 * precision - precision) + precision) /
        precision;
      const randomN2 =
        Math.floor(Math.random() * (100 * precision - precision) + precision) /
        precision;
      const correcta = +(randomN + randomN2).toFixed(12);
      questions.push({
        operation: `${randomN} + ${randomN2} = \\textcolor{#1E88E5}{\\_}`,
        num1: randomN,
        num2: randomN2,
        correct: correcta.toString(),
        id: uuidv4(),
        rating: rating(correcta)
      });
    }

    return questions.filter(e => e.num1 % 1 !== 0 && e.num2 % 1 !== 0);
  },

  all() {
    return this.Tenths();
  }
};

// Total = 2041
// console.log(logic.all().length);
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/sixthGrade/math/short-decimal-additions.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
