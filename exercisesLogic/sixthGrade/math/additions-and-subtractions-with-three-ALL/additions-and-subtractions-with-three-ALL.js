const uuidv4 = require("uuid/v4");
const fs = require("fs");
const range = require("../../../../utilities/random").numberRange;
const takeRandom = require("../../../../utilities/random").randomFromArray;
const rN = require("../../../../utilities/random").getRandomInt;

const logic = {
  numbers: range(10, 100),
  add: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  product: 10,
  Additions() {
    const rating = add => {
      if (add < 4) {
        return 800;
      }

      if (add >= 4 && add < 7) {
        return 1200;
      }

      return 1800;
    };
    const questions = [];
    console.log(this.numbers.length);

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < this.add.length; j++) {
        for (let k = 0; k < this.add.length; k++) {
          const a = this.numbers[rN(0, 88)];
          const tenth = this.add[j] * this.product;
          const tenthTwo = this.add[k] * this.product;
          const total = a + tenth - tenthTwo;

          questions.push({
            operation: `${Intl.NumberFormat().format(
              a
            )} + ${Intl.NumberFormat().format(
              tenth
            )} - ${Intl.NumberFormat().format(tenthTwo)} =`,
            correct: total.toString(),
            id: uuidv4(),
            rating: rating(this.add[j])
          });
        }
      }
    }

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < this.add.length; j++) {
        for (let k = 0; k < this.add.length; k++) {
          const a = this.numbers[rN(0, 88)];
          const tenth = this.add[j] * this.product;
          const tenthTwo = this.add[k] * this.product;
          const total = tenth + a - tenthTwo;

          questions.push({
            operation: `${Intl.NumberFormat().format(
              tenth
            )} + ${Intl.NumberFormat().format(
              a
            )} - ${Intl.NumberFormat().format(tenthTwo)} =`,
            correct: total.toString(),
            id: uuidv4(),
            rating: rating(this.add[j])
          });
        }
      }
    }

    // for (let i = 0; i < 7; i++) {
    //   for (let j = 0; j < this.add.length; j++) {
    //     for (let k = 0; k < this.add.length; k++) {
    //       const a = this.numbers[rN(0, 8998)];
    //       const tenth = this.add[j] * this.product;
    //       const tenthTwo = this.add[k] * this.product;
    //       const total = tenth + tenthTwo - a;
    //
    //       questions.push({
    //         operation: `${Intl.NumberFormat().format(
    //           tenth
    //         )} + ${Intl.NumberFormat().format(
    //           tenthTwo
    //         )} - ${Intl.NumberFormat().format(a)} =`,
    //         correct: total.toString(),
    //         id: uuidv4(),
    //         rating: rating(this.add[j])
    //       });
    //     }
    //   }
    // }

    //***

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < this.add.length; j++) {
        for (let k = 0; k < this.add.length; k++) {
          const a = this.numbers[rN(0, 88)];
          const tenth = this.add[j] * this.product;
          const tenthTwo = this.add[k] * this.product;
          const total = a - tenth + tenthTwo;

          questions.push({
            operation: `${Intl.NumberFormat().format(
              a
            )} - ${Intl.NumberFormat().format(
              tenth
            )} + ${Intl.NumberFormat().format(tenthTwo)} =`,
            correct: total.toString(),
            id: uuidv4(),
            rating: rating(this.add[j])
          });
        }
      }
    }

    // for (let i = 0; i < 7; i++) {
    //   for (let j = 0; j < this.add.length; j++) {
    //     for (let k = 0; k < this.add.length; k++) {
    //       const a = this.numbers[rN(0, 8998)];
    //       const tenth = this.add[j] * this.product;
    //       const tenthTwo = this.add[k] * this.product;
    //       const total = tenth - a + tenthTwo;
    //
    //       questions.push({
    //         operation: `${Intl.NumberFormat().format(
    //           tenth
    //         )} - ${Intl.NumberFormat().format(
    //           a
    //         )} + ${Intl.NumberFormat().format(tenthTwo)} =`,
    //         correct: total.toString(),
    //         id: uuidv4(),
    //         rating: rating(this.add[j])
    //       });
    //     }
    //   }
    // }

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < this.add.length; j++) {
        for (let k = 0; k < this.add.length; k++) {
          const a = this.numbers[rN(0, 88)];
          const tenth = this.add[j] * this.product;
          const tenthTwo = this.add[k] * this.product;
          const total = tenth - tenthTwo + a;

          questions.push({
            operation: `${Intl.NumberFormat().format(
              tenth
            )} - ${Intl.NumberFormat().format(
              tenthTwo
            )} + ${Intl.NumberFormat().format(a)} =`,
            correct: total.toString(),
            id: uuidv4(),
            rating: rating(this.add[j])
          });
        }
      }
    }

    return questions.filter(e => e.correct >= 0);
  },
  all() {
    //return this.Additions();
    return takeRandom(this.Additions(), 1700);
  }
};

// Total = tens 1700, hundreds = 1700, thousands = 1700
console.log(logic.all());
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/sixthGrade/math/additions-and-subtractions-with-tens-sixth-grade.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
