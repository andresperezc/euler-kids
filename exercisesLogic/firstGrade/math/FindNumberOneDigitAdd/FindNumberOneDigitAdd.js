const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  numberSet: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  A() {
    const rating = correct => {
      if (correct < 6) {
        return 800;
      }
      if (correct >= 6 && correct < 12) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.numberSet.length; i++) {
      for (var j = 0; j < this.numberSet.length; j++) {
        const correcta = Math.floor(
          Number(this.numberSet[i]) + Number(this.numberSet[j])
        );
        questions.push({
          operation: `${
            this.numberSet[i]
          } + \\textcolor{#1E88E5}{\\_} = ${correcta}`,
          correct: this.numberSet[j].toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  B() {
    const rating = correct => {
      if (correct < 6) {
        return 800;
      }
      if (correct >= 6 && correct < 12) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.numberSet.length; i++) {
      for (var j = 0; j < this.numberSet.length; j++) {
        const correcta = Math.floor(
          Number(this.numberSet[i]) + Number(this.numberSet[j])
        );
        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} + ${
            this.numberSet[j]
          } = ${correcta}`,
          correct: this.numberSet[i].toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  C() {
    const rating = correct => {
      if (correct < 6) {
        return 800;
      }
      if (correct >= 6 && correct < 12) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.numberSet.length; i++) {
      for (var j = 0; j < this.numberSet.length; j++) {
        const correcta = Math.floor(
          Number(this.numberSet[i]) + Number(this.numberSet[j])
        );
        questions.push({
          operation: `${this.numberSet[i]} + ${
            this.numberSet[j]
          } = \\textcolor{#1E88E5}{\\_}`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  all() {
    return this.A().concat(
      this.B(),
      this.C()
    );
  }
};

// console.log(logic.all());
//
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
//
// fs.writeFile(
//   "exercisesLogic/math/firstGrade/FindNumberOneDigitAddE/FindNumberOneDigitAddE.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
