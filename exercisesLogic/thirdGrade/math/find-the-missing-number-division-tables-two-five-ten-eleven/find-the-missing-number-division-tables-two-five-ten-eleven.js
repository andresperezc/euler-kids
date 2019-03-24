const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  divisors: [2, 5, 10, 11],
  tables: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  Divisions() {
    const rating = divisor => {
      if (divisor < 5) {
        return 800;
      }
      if (divisor >= 5 && divisor < 9) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (let i = 0; i < this.divisors.length; i++) {
      for (let j = 0; j < this.tables.length; j++) {
        const dividend = Number(this.tables[j]) * Number(this.divisors[i]);
        const result = dividend / Number(this.divisors[i]);
        questions.push({
          operation: `${dividend} \\div ${
            this.divisors[i]
          } = \\textcolor{#1E88E5}{\\_}`,
          correct: result.toString(),
          id: uuidv4(),
          rating: rating(this.tables[j])
        });
      }
    }

    for (let i = 0; i < this.divisors.length; i++) {
      for (let j = 0; j < this.tables.length; j++) {
        const dividend = Number(this.tables[j]) * Number(this.divisors[i]);
        const result = dividend / Number(this.divisors[i]);
        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} \\div ${
            this.divisors[i]
            } = ${result}`,
          correct: dividend.toString(),
          id: uuidv4(),
          rating: rating(this.tables[j])
        });
      }
    }

    for (let i = 0; i < this.divisors.length; i++) {
      for (let j = 0; j < this.tables.length; j++) {
        const dividend = Number(this.tables[j]) * Number(this.divisors[i]);
        const result = dividend / Number(this.divisors[i]);
        questions.push({
          operation: `${dividend} \\div \\textcolor{#1E88E5}{\\_} = ${result}`,
          correct: this.divisors[i].toString(),
          id: uuidv4(),
          rating: rating(this.tables[j])
        });
      }
    }

    //***

    for (let i = 0; i < this.divisors.length; i++) {
      for (let j = 0; j < this.tables.length; j++) {
        const dividend = Number(this.tables[j]) * Number(this.divisors[i]);
        const result = dividend / Number(this.divisors[i]);
        questions.push({
          operation: `\\textcolor{#1E88E5}{\\_} = ${dividend} \\div ${
            this.divisors[i]
          }`,
          correct: result.toString(),
          id: uuidv4(),
          rating: rating(this.tables[j])
        });
      }
    }

    for (let i = 0; i < this.divisors.length; i++) {
      for (let j = 0; j < this.tables.length; j++) {
        const dividend = Number(this.tables[j]) * Number(this.divisors[i]);
        const result = dividend / Number(this.divisors[i]);
        questions.push({
          operation: `${result} = \\textcolor{#1E88E5}{\\_} \\div ${
            this.divisors[i]
          }`,
          correct: dividend.toString(),
          id: uuidv4(),
          rating: rating(this.tables[j])
        });
      }
    }

    for (let i = 0; i < this.divisors.length; i++) {
      for (let j = 0; j < this.tables.length; j++) {
        const dividend = Number(this.tables[j]) * Number(this.divisors[i]);
        const result = dividend / Number(this.divisors[i]);
        questions.push({
          operation: `${result} = ${dividend} \\div \\textcolor{#1E88E5}{\\_}`,
          correct: this.divisors[i].toString(),
          id: uuidv4(),
          rating: rating(this.tables[j])
        });
      }
    }

    return questions;
  },
  all() {
    return this.Divisions();
  }
};

// Total = 240
//console.log(logic.all().length);
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/thirdGrade/math/find-the-missing-number-division-tables-two-five-ten-eleven.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
