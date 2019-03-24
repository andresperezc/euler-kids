const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  tuples: [
    [2, 1],
    [4, 2],
    [6, 3],
    [8, 4],
    [10, 5],
    [12, 6],
    [14, 7],
    [16, 8],
    [18, 9],
    [20, 10]
  ],
  Subtractions() {
    const rating = correct => {
      if (correct < 5) {
        return 800;
      }
      if (correct >= 5 && correct < 8) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (let i = 0; i < this.tuples.length; i++) {
      const minuend = this.tuples[i][0];
      const subtrahend = this.tuples[i][1];
      const correcta = minuend - subtrahend;
      questions.push({
        operation: `${minuend} - ${subtrahend} = \\textcolor{#1E88E5}{\\_}`,
        negative: correcta,
        correct: correcta.toString(),
        id: uuidv4(),
        rating: rating(correcta)
      });

      questions.push({
        operation: `${minuend} - \\textcolor{#1E88E5}{\\_} = ${correcta}`,
        negative: correcta,
        correct: subtrahend.toString(),
        id: uuidv4(),
        rating: rating(correcta)
      });

      questions.push({
        operation: `\\textcolor{#1E88E5}{\\_} = ${minuend} - ${subtrahend}`,
        negative: correcta,
        correct: correcta.toString(),
        id: uuidv4(),
        rating: rating(correcta)
      });

      questions.push({
        operation: `${correcta} = ${minuend} - \\textcolor{#1E88E5}{\\_}`,
        negative: correcta,
        correct: subtrahend.toString(),
        id: uuidv4(),
        rating: rating(correcta)
      });
    }

    return questions.filter(e => e.negative >= 0);
  },
  all() {
    return this.Subtractions();
  }
};

// Total = 40
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/secondGrade/math/subtractions-with-minuends-up-to-twenty-doubles.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
