const uuidv4 = require("uuid/v4");
const fs = require("fs");
const range = require("../../../../utilities/random").numberRange;
const shuffle = require("../../../../utilities/random").shuffleFisher;

const logic = {
  underscore: "\\textcolor{#1E88E5}{\\_}",
  rating: function(correct) {
    if (correct < 66) {
      return 800;
    }
    if (correct >= 66 && correct < 132) {
      return 1200;
    }
    return 1800;
  },
  ratingSubtractions: function(correct) {
    if (correct < 9) {
      return 800;
    }
    if (correct >= 9 && correct < 19) {
      return 1200;
    }
    return 1800;
  },
  Additions() {
    const addend = range(10, 100);
    const x = range(10, 100);
    const questions = [];

    // 12 + x = 22
    for (let i = 0; i < addend.length; i++) {
      for (let j = 0; j < x.length; j++) {
        const correcta = addend[i] + x[j];
        questions.push({
          operation: `${addend[i]} + \\textcolor{#1E88E5}{x} = ${correcta}`,
          correct: x[j].toString(),
          id: uuidv4(),
          rating: this.rating(correcta)
        });
      }
    }

    // x + 12 = 22
    for (let i = 0; i < addend.length; i++) {
      for (let j = 0; j < x.length; j++) {
        const correcta = x[j] + addend[i];
        questions.push({
          operation: `\\textcolor{#1E88E5}{x} + ${addend[i]} = ${correcta}`,
          correct: x[j].toString(),
          id: uuidv4(),
          rating: this.rating(correcta)
        });
      }
    }

    //***

    // 22 = 12 + x
    for (let i = 0; i < addend.length; i++) {
      for (let j = 0; j < x.length; j++) {
        const correcta = addend[i] + x[j];
        questions.push({
          operation: `${correcta} = ${addend[i]} + \\textcolor{#1E88E5}{x}`,
          correct: x[j].toString(),
          id: uuidv4(),
          rating: this.rating(correcta)
        });
      }
    }

    // 22 = x + 12
    for (let i = 0; i < addend.length; i++) {
      for (let j = 0; j < x.length; j++) {
        const correcta = x[j] + addend[i];
        questions.push({
          operation: `${correcta} = \\textcolor{#1E88E5}{x} + ${addend[i]}`,
          correct: x[j].toString(),
          id: uuidv4(),
          rating: this.rating(correcta)
        });
      }
    }

    return questions;
  },
  Subtractions() {
    const minuend = range(50, 100);
    const x = range(50, 100);
    const questions = [];

    // 12 - x = 22
    for (let i = 0; i < minuend.length; i++) {
      for (let j = 0; j < x.length; j++) {
        const correcta = minuend[i] - x[j];
        questions.push({
          operation: `${minuend[i]} - \\textcolor{#1E88E5}{x} = ${correcta}`,
          negative: correcta,
          correct: x[j].toString(),
          id: uuidv4(),
          rating: this.ratingSubtractions(correcta)
        });
      }
    }

    // x - 12 = 22
    for (let i = 0; i < minuend.length; i++) {
      for (let j = 0; j < x.length; j++) {
        const correcta = x[j] - minuend[i];
        questions.push({
          operation: `\\textcolor{#1E88E5}{x} - ${minuend[i]} = ${correcta}`,
          negative: correcta,
          correct: x[j].toString(),
          id: uuidv4(),
          rating: this.ratingSubtractions(correcta)
        });
      }
    }

    //***

    // 22 = 12 - x
    for (let i = 0; i < minuend.length; i++) {
      for (let j = 0; j < x.length; j++) {
        const correcta = minuend[i] - x[j];
        questions.push({
          operation: `${correcta} = ${minuend[i]} - \\textcolor{#1E88E5}{x}`,
          negative: correcta,
          correct: x[j].toString(),
          id: uuidv4(),
          rating: this.ratingSubtractions(correcta)
        });
      }
    }

    // 22 = x + 12
    for (let i = 0; i < minuend.length; i++) {
      for (let j = 0; j < x.length; j++) {
        const correcta = x[j] - minuend[i];
        questions.push({
          operation: `${correcta} = \\textcolor{#1E88E5}{x} - ${minuend[i]}`,
          negative: correcta,
          correct: x[j].toString(),
          id: uuidv4(),
          rating: this.ratingSubtractions(correcta)
        });
      }
    }

    return questions.filter(e => e.negative >= 0);
  },
  all() {
    const shuffleOne = shuffle(this.Subtractions().concat(this.Additions()));
    return shuffle(shuffleOne).slice(0, 3000);
  }
};

// Total = 3000
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/sixthGrade/math/addition-n-subtraction-equations.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
