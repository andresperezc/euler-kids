const loadJsonFile = require("load-json-file");
const path = require("path");
const jsonPath = path.join(__dirname, "../", "gamesJsonData");
const firstGrade = require("./firstGrade/firstGrade");
const secondGrade = require("./secondGrade/secondGrade");
const thirdGrade = require("./thirdGrade/thirdGrade");
const fourthGrade = require("./fourthGrade/fourthGrade");
const fifthGrade = require("./fifthGrade/fifthGrade");
const sixthGrade = require("./sixthGrade/sixthGrade");
const gamesData = Object.assign(
  {},
  firstGrade(loadJsonFile, jsonPath),
  secondGrade(loadJsonFile, jsonPath),
  thirdGrade(loadJsonFile, jsonPath),
  fourthGrade(loadJsonFile, jsonPath),
  fifthGrade(loadJsonFile, jsonPath),
  sixthGrade(loadJsonFile, jsonPath)
);

module.exports = gamesData;
