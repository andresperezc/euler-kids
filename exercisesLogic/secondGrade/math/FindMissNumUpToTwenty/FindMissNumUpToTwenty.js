const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  numberSetOne: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  upToTwenty: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "18",
    "19",
    "20"
  ],
  rating: function(correct) {
    if (correct < 10) {
      return 800;
    }
    if (correct >= 10 && correct < 20) {
      return 1200;
    }
    return 1800;
  },
  AOne() {
    const questions = [];

    for (var i = 0; i < this.numberSetOne.length; i++) {
      for (var j = 0; j < this.upToTwenty.length; j++) {
        const correcta = Math.floor(
          Number(this.numberSetOne[i]) + Number(this.upToTwenty[j])
        );
        questions.push({
          operation: `${this.numberSetOne[i]} + ${
            this.upToTwenty[j]
          } = \\textcolor{#1E88E5}{\\_}`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: this.rating(correcta)
        });
      }
    }

    return questions;
  },
  ATwo() {
    const questions = [];

    for (var i = 0; i < this.numberSetOne.length; i++) {
      for (var j = 0; j < this.upToTwenty.length; j++) {
        const correcta = Math.floor(
          Number(this.numberSetOne[i]) + Number(this.upToTwenty[j])
        );
        questions.push({
          operation: `${this.upToTwenty[j]} + ${
            this.numberSetOne[i]
          } = \\textcolor{#1E88E5}{\\_}`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: this.rating(correcta)
        });
      }
    }

    return questions;
  },
  B() {
    const questions = [];

    for (var i = 0; i < this.numberSetOne.length; i++) {
      for (var j = 0; j < this.upToTwenty.length; j++) {
        const correcta = Math.floor(
          Number(this.numberSetOne[i]) + Number(this.upToTwenty[j])
        );
        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} + ${
            this.upToTwenty[j]
          } = ${correcta}`,
          correct: this.numberSetOne[i].toString(),
          id: uuidv4(),
          rating: this.rating(correcta)
        });
      }
    }

    return questions;
  },
  C() {
    const questions = [];

    for (var i = 0; i < this.numberSetOne.length; i++) {
      for (var j = 0; j < this.upToTwenty.length; j++) {
        const correcta = Math.floor(
          Number(this.upToTwenty[j]) + Number(this.numberSetOne[i])
        );
        questions.push({
          operation: `${
            this.upToTwenty[j]
          } + \\textcolor{#1E88E5}{\\_} = ${correcta}`,
          correct: this.numberSetOne[i].toString(),
          id: uuidv4(),
          rating: this.rating(correcta)
        });
      }
    }

    return questions;
  },
  all() {
    return this.AOne().concat(this.ATwo(), this.B(), this.C());
  }
};

// Total 880
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "exercisesLogic/math/secondGrade/FindMissNumUpToTwenty/FindMissNumUpToTwenty.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
