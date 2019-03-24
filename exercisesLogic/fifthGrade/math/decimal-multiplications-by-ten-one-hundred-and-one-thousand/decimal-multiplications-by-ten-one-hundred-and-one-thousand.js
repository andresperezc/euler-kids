const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  multiplicant: [10, 100, 1000],
  All() {
    const rating = multiplicant => {
      if (multiplicant === 10) {
        return 800;
      }
      if (multiplicant === 100) {
        return 1200;
      }

      return 1800;
    };

    const correct2 = correct => {
      if (correct[0] === "0") {
        return correct.slice(1);
      }

      return correct;
    };

    const precision = 1000; // 100 - 2 decimals 1000 - 3 decimals
    const questions = [];

    for (let i = 0; i < this.multiplicant.length; i++) {
      for (let j = 0; j < 600; j++) {
        const randomN =
          Math.floor(Math.random() * (0 - precision) + precision) / precision;
        const correcta = +(randomN * this.multiplicant[i]).toFixed(12);
        //console.log(`${randomN} \\times ${this.multiplicant[i]} = ${correcta}`)
        questions.push({
          operation: `${randomN} \\times ${Intl.NumberFormat().format(
            this.multiplicant[i]
          )} =`,
          correct: correcta.toString(),
          correct2: correct2(correcta.toString()),
          id: uuidv4(),
          rating: rating(this.multiplicant[i])
        });
      }
    }

    return questions;
  },
  all() {
    return this.All();
  }
};

// Total = 1800
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/fifthGrade/math/decimal-multiplications-by-ten-one-hundred-and-one-thousand.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
