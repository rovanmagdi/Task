const { readFileSync } = require("fs");

let loadWords = () => {
    let TestData = JSON.parse(readFileSync("TestData.json"));
    var wordList = TestData.wordList;
    let arrayObject=[];
  
    wordList.map((key) => {
      if (
        (wordList.length =
          10 ||
          (key.pos == "noun" &&
            key.pos == "adjective" &&
            key.pos == "adverb" &&
            key.pos == "verb"))
      ) {
        //console.log(wordList[Math.floor(Math.random() * wordList.length)])
        var part= wordList[Math.floor(Math.random() * wordList.length)];
        arrayObject.push(part);
      }
  });
    return arrayObject;
  };
  
  module.exports ={loadWords}
