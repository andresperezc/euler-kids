const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  minus: 3,
  tuples: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ],
  Subtractions() {
    const rating = minuend => {
      if (minuend < 6) {
        return 800;
      }
      if (minuend >= 6 && minuend < 12) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (let i = 0; i < this.tuples.length; i++) {
      const minuend = this.tuples[i];
      const subtrahend = this.minus;
      const correcta = minuend - subtrahend;

      if (subtrahend >= 0) {
        questions.push({
          operation: `${minuend} - ${subtrahend} = \\textcolor{#1E88E5}{\\_}`,
          negative: correcta,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(minuend)
        });

        questions.push({
          operation: `${minuend} - \\textcolor{#1E88E5}{\\_} = ${correcta}`,
          negative: correcta,
          correct: subtrahend.toString(),
          id: uuidv4(),
          rating: rating(minuend)
        });

        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} = ${minuend} - ${subtrahend}`,
          negative: correcta,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(minuend)
        });

        questions.push({
          operation: `${correcta} = ${minuend} - \\textcolor{#1E88E5}{\\_}`,
          negative: correcta,
          correct: subtrahend.toString(),
          id: uuidv4(),
          rating: rating(minuend)
        });
      }
    }

    for (let i = 0; i < this.tuples.length; i++) {
      const minuend = this.tuples[i];
      const subtrahend = this.tuples[i] - this.minus;
      const correcta = minuend - subtrahend;

      if (subtrahend >= 0) {
        questions.push({
          operation: `${minuend} - ${subtrahend} = \\textcolor{#1E88E5}{\\_}`,
          negative: correcta,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(minuend)
        });

        questions.push({
          operation: `${minuend} - \\textcolor{#1E88E5}{\\_} = ${correcta}`,
          negative: correcta,
          correct: subtrahend.toString(),
          id: uuidv4(),
          rating: rating(minuend)
        });

        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} = ${minuend} - ${subtrahend}`,
          negative: correcta,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(minuend)
        });

        questions.push({
          operation: `${correcta} = ${minuend} - \\textcolor{#1E88E5}{\\_}`,
          negative: correcta,
          correct: subtrahend.toString(),
          id: uuidv4(),
          rating: rating(minuend)
        });
      }
    }

    return questions.filter(e => e.negative >= 0);
  },
  all() {
    return this.Subtractions();
  }
};

// Total = 160
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/secondGrade/math/subtractions-with-minuends-up-to-twenty-three-facts.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
