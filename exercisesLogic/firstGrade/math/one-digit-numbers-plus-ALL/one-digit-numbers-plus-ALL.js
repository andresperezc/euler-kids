const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  summand: [10],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Subtractions() {
    const rating = number => {
      if (number < 3) {
        return 800;
      }
      if (number >= 3 && number < 6) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (let i = 0; i < this.summand.length; i++) {
      for (let j = 0; j < this.numbers.length; j++) {
        const correcta = this.summand[i] + this.numbers[j];
        questions.push({
          operation: `${this.summand[i]} + ${
            this.numbers[j]
          } = \\textcolor{#1E88E5}{\\_}`,
          negative: correcta,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(this.numbers[j])
        });
      }
    }

    for (let i = 0; i < this.summand.length; i++) {
      for (let j = 0; j < this.numbers.length; j++) {
        const correcta = this.summand[i] + this.numbers[j];
        questions.push({
          operation: `${this.numbers[j]} + ${
            this.summand[i]
          } = \\textcolor{#1E88E5}{\\_}`,
          negative: correcta,
          correct: correcta.toString(),
          id: uuidv4(),
          rating: rating(this.numbers[j])
        });
      }
    }

    return questions.filter(e => e.negative >= 0);
  },
  all() {
    return this.Subtractions();
  }
};

// Total = 22 * 10 Por todos los ejercicios del uno al diez
// console.log(logic.all().length);
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/firstGrade/math/one-digit-numbers-plus-ten.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
