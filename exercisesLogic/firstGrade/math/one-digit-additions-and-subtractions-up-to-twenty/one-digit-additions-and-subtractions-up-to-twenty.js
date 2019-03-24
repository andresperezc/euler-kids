const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  addends: [
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
  xxx: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Additions() {
    const rating = correct => {
      if (correct < 10) {
        return 800;
      }
      if (correct >= 15 && correct < 25) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (let i = 0; i < this.addends.length; i++) {
      for (let j = 0; j < this.xxx.length; j++) {
        const correcta = Math.floor(
          Number(this.addends[i]) + Number(this.xxx[j])
        );
        questions.push({
          operation: `${this.addends[i]} + ${
            this.xxx[j]
          } = \\textcolor{#1E88E5}{\\_}`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    for (let i = 0; i < this.addends.length; i++) {
      for (let j = 0; j < this.xxx.length; j++) {
        const correcta = Math.floor(
          Number(this.addends[i]) + Number(this.xxx[j])
        );
        questions.push({
          operation: `${this.xxx[j]} + ${
            this.addends[i]
          } = \\textcolor{#1E88E5}{\\_}`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  Subtractions() {
    const rating = correct => {
      if (correct < 5) {
        return 800;
      }
      if (correct >= 5 && correct < 10) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (let i = 0; i < this.addends.length; i++) {
      for (let j = 0; j < this.xxx.length; j++) {
        const correcta = Math.floor(
          Number(this.addends[i]) - Number(this.xxx[j])
        );
        questions.push({
          operation: `${this.addends[i]} - ${
            this.xxx[j]
          } = \\textcolor{#1E88E5}{\\_}`,
          negative: correcta,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions.filter(e => e.negative >= 0);
  },
  all() {
    return this.Additions().concat(this.Subtractions());
  }
};

// Total = 555
// console.log(logic.all().length);
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/firstGrade/math/one-digit-additions-and-subtractions-up-to-twenty.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
