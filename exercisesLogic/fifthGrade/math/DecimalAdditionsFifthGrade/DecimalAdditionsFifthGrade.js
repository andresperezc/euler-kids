const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  multiplicant: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  multiplier: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  Tenths() {
    const precision = 100; // 100 - 2 decimals 1000 - 3 decimals

    const questions = [];

    for (let i = 0; i < 500; i++) {
      const tenths = 0.1;
      const randomN =
        Math.floor(Math.random() * (100 * precision - precision) + precision) /
        precision;
      console.log(randomN);
      console.log(+(randomN + tenths).toFixed(12));
      const correcta = +(randomN + tenths).toFixed(12);
      questions.push({
        operation: `${randomN} + ${tenths} =`,
        correct: correcta.toString(),
        id: uuidv4(),
        rating: 800
      });
    }

    return questions;
  },
  EasyTwo() {
    const precision = 100; // 100 - 2 decimals 1000 - 3 decimals

    const questions = [];

    for (let i = 0; i < 500; i++) {
      const tenths = 1;
      const randomN =
        Math.floor(Math.random() * (100 * precision - precision) + precision) /
        precision;
      console.log(randomN);
      console.log(+(randomN + tenths).toFixed(12));
      const correcta = +(randomN + tenths).toFixed(12);
      questions.push({
        operation: `${randomN} + ${tenths} =`,
        correct: correcta.toString(),
        id: uuidv4(),
        rating: 800
      });
    }

    return questions;
  },
  Hundredths() {
    const precision = 100; // 100 - 2 decimals 1000 - 3 decimals

    const questions = [];

    for (let i = 0; i < 500; i++) {
      const tenths = 0.01;
      const randomN =
        Math.floor(Math.random() * (100 * precision - precision) + precision) /
        precision;
      console.log(randomN);
      console.log(+(randomN + tenths).toFixed(12));
      const correcta = +(randomN + tenths).toFixed(12);
      questions.push({
        operation: `${randomN} + ${tenths} =`,
        correct: correcta.toString(),
        id: uuidv4(),
        rating: 1200
      });
    }

    return questions;
  },
  AdvancedOne() {
    const precision = 1000; // 100 - 2 decimals 1000 - 3 decimals
    const questions = [];

    for (let i = 0; i < 500; i++) {
      const tenths = 0.01;
      const randomN =
        Math.floor(Math.random() * (100 * precision - precision) + precision) /
        precision;
      console.log(randomN);
      console.log(+(randomN + tenths).toFixed(12));
      const correcta = +(randomN + tenths).toFixed(12);
      questions.push({
        operation: `${randomN} + ${tenths} =`,
        correct: correcta.toString(),
        id: uuidv4(),
        rating: 1800
      });
    }

    return questions;
  },
  AdvancedTwo() {
    const precision = 1000; // 100 - 2 decimals 1000 - 3 decimals
    const questions = [];

    for (let i = 0; i < 500; i++) {
      const tenths = 0.001;
      const randomN =
        Math.floor(Math.random() * (100 * precision - precision) + precision) /
        precision;
      console.log(randomN);
      console.log(+(randomN + tenths).toFixed(12));
      const correcta = +(randomN + tenths).toFixed(12);
      questions.push({
        operation: `${randomN} + ${tenths} =`,
        correct: correcta.toString(),
        id: uuidv4(),
        rating: 1800
      });
    }

    return questions;
  },
  all() {
    return this.Tenths().concat(
      this.EasyTwo(),
      this.Hundredths(),
      this.AdvancedOne(),
      this.AdvancedTwo()
    );
  }
};

// console.log(logic.all());

// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "exercisesLogic/math/fifthGrade/DecimalAdditionsFifthGrade/DecimalAdditionsFifthGrade.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
