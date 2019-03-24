const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  multiplicant: ["2", "5", "10", "11"],
  multiplier: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  Multiplier() {
    const rating = correct => {
      if (correct < 34) {
        return 800;
      }
      if (correct >= 34 && correct < 50) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.multiplicant.length; i++) {
      for (var j = 0; j < this.multiplier.length; j++) {
        const correcta = Math.floor(
          Number(this.multiplicant[i]) * Number(this.multiplier[j])
        );
        questions.push({
          operation: `${
            this.multiplicant[i]
          } \\times \\textcolor{#1E88E5}{\\_} = ${correcta}`,
          correct: this.multiplier[j].toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  MultiplierInvert() {
    const rating = correct => {
      if (correct < 34) {
        return 800;
      }
      if (correct >= 34 && correct < 50) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.multiplicant.length; i++) {
      for (var j = 0; j < this.multiplier.length; j++) {
        const correcta = Math.floor(
          Number(this.multiplicant[i]) * Number(this.multiplier[j])
        );
        questions.push({
          operation: `${correcta} = ${
            this.multiplicant[i]
          } \\times \\textcolor{#1E88E5}{\\_}`,
          correct: this.multiplier[j].toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  Multiplicant() {
    const rating = correct => {
      if (correct < 34) {
        return 800;
      }
      if (correct >= 34 && correct < 50) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.multiplicant.length; i++) {
      for (var j = 0; j < this.multiplier.length; j++) {
        const correcta = Math.floor(
          Number(this.multiplicant[i]) * Number(this.multiplier[j])
        );
        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} \\times ${
            this.multiplicant[i]
          } = ${correcta}`,
          correct: this.multiplier[j].toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  MultiplicantInvert() {
    const rating = correct => {
      if (correct < 34) {
        return 800;
      }
      if (correct >= 34 && correct < 50) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.multiplicant.length; i++) {
      for (var j = 0; j < this.multiplier.length; j++) {
        const correcta = Math.floor(
          Number(this.multiplicant[i]) * Number(this.multiplier[j])
        );
        questions.push({
          operation: `${correcta} = \\textcolor{#1E88E5}{\\_} \\times ${
            this.multiplicant[i]
          }`,
          correct: this.multiplier[j].toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  Product() {
    const rating = correct => {
      if (correct < 34) {
        return 800;
      }
      if (correct >= 34 && correct < 50) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.multiplicant.length; i++) {
      for (var j = 0; j < this.multiplier.length; j++) {
        const correcta = Math.floor(
          Number(this.multiplicant[i]) * Number(this.multiplier[j])
        );
        questions.push({
          operation: `${this.multiplicant[i]} \\times ${
            this.multiplier[j]
          } = \\textcolor{#1E88E5}{\\_}`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  ProductInvert() {
    const rating = correct => {
      if (correct < 34) {
        return 800;
      }
      if (correct >= 34 && correct < 50) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var i = 0; i < this.multiplicant.length; i++) {
      for (var j = 0; j < this.multiplier.length; j++) {
        const correcta = Math.floor(
          Number(this.multiplicant[i]) * Number(this.multiplier[j])
        );
        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} = ${
            this.multiplicant[i]
          } \\times ${this.multiplier[j]}`,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(correcta)
        });
      }
    }

    return questions;
  },
  all() {
    return this.Multiplier().concat(
      this.MultiplierInvert(),
      this.Multiplicant(),
      this.MultiplicantInvert(),
      this.Product(),
      this.ProductInvert()
    );
  }
};

// Total = 264
// console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "exercisesLogic/math/thirdGrade/FindMissingTimesTablesTwoFive/FindMissingTimesTablesTwoFive.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
