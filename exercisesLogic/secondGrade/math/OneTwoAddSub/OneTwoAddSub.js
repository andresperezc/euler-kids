const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  addends: [
    ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
    ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
    ["30", "31", "32", "33", "34", "35", "36", "37", "38", "39"],
    ["40", "41", "42", "43", "44", "45", "46", "47", "48", "49"],
    ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
    ["60", "61", "62", "63", "64", "65", "66", "67", "68", "69"],
    ["70", "71", "72", "73", "74", "75", "76", "77", "78", "79"],
    ["80", "81", "82", "83", "84", "85", "86", "87", "88", "89"],
    ["90", "91", "92", "93", "94", "95", "96", "97", "98", "99"]
  ],
  xxx: [["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]],
  Additions() {
    var counter = 0;

    const rating = correct => {
      if (correct < 48) {
        return 800;
      }
      if (correct >= 48 && correct < 78) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var h = 0; h < this.addends.length; h++) {
      for (var i = 0; i < this.addends[h].length; i++) {
        for (var j = 0; j < this.xxx.length; j++) {
          for (var k = 0; k < this.xxx[j].length - counter; k++) {
            const correcta = Math.floor(
              Number(this.addends[h][i]) + Number(this.xxx[j][k])
            );
            questions.push({
              operation: `${this.addends[h][i]} + ${this.xxx[j][k]} = \\textcolor{#1E88E5}{\\_}`,
              correct: correcta.toString(),
              id: uuidv4(),
              rating: rating(correcta)
            });
          }
        }
        counter++;
      }
      counter = 0;
    }

    return questions;
  },
  Subtractions() {
    var counter = 0;

    const rating = correct => {
      if (correct < 38) {
        return 800;
      }
      if (correct >= 38 && correct < 68) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var h = 0; h < this.addends.length; h++) {
      for (var i = 0; i < this.addends[h].length; i++) {
        for (var j = 0; j < this.xxx.length; j++) {
          for (var k = 0; k < this.xxx[j].length - counter; k++) {
            const correcta = Math.floor(
              Number(this.addends[h][i]) - Number(this.xxx[j][k])
            );
            questions.push({
              operation: `${this.addends[h][i]} - ${this.xxx[j][k]} = \\textcolor{#1E88E5}{\\_}`,
              correct: correcta.toString(),
              id: uuidv4(),
              rating: rating(correcta)
            });
          }
        }
        counter++;
      }
      counter = 0;
    }

    return questions;
  },
  all() {
    return this.Additions().concat(this.Subtractions());
  }
};

// console.log(logic.all());
//
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
//
// fs.writeFile(
//   "exercisesLogic/math/secondGrade/OneTwoAddSub/OneTwoAddSub.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
