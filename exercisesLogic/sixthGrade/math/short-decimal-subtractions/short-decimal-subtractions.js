const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  multiplicant: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  multiplier: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  Subtractions() {
    const precision = 10; // 100 - 2 decimals 1000 - 3 decimals
    const rating = correcta => {
      if (correcta < 25) {
        return 800;
      }

      if (correcta >= 25 && correcta < 50) {
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
        Math.floor(Math.random() * (10 * precision - precision) + precision) /
        precision;
      const result = +(randomN - randomN2).toFixed(12);
      questions.push({
        operation: `${randomN} - ${randomN2} = \\textcolor{#1E88E5}{\\_}`,
        num1: randomN,
        num2: randomN2,
        negativeCheck: result,
        correct: result.toString(),
        id: uuidv4(),
        rating: rating(result)
      });
    }

    return questions.filter(
      e => e.num1 % 1 !== 0 && e.num2 % 1 !== 0 && e.negativeCheck >= 0
    );
  },

  all() {
    return this.Subtractions();
  }
};

// Total = 1915
// console.log(logic.all().length);
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/sixthGrade/math/short-decimal-subtractions.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
