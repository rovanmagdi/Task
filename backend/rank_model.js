const { readFileSync } = require("fs");

let rankFun = (value) => {
    let TestData = JSON.parse(readFileSync("TestData.json"));
    var scoresList = TestData.scoresList;
    var countScores, belowValue, Percentile;
    scoresList.sort((a, b) => a - b);
    // Total Number of Values
    countScores = scoresList.length;
    // Number of scores below of value
    belowValue = scoresList.indexOf(value);
    //Percentile = (Number of Values Below “x” / Total Number of Values) × 100
    Percentile = (belowValue / countScores) * 100;
    console.log(Percentile);
    // console.log(scoresList);
    return Percentile;
  };
module.exports = (params) => {
    rankFun(params)
 }
