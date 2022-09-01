const express = require("express");
const app = express();
const body_parser = require("body-parser");
const port = 3002;
const jsonParser = body_parser.json();
const { loadWords } = require("./words_model");
const rankFun=require('./rank_model')
app.listen(port, () => console.log("server running..."));

app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/words", (req, res) => {
  res.send(loadWords());
});
app.post("/rank", jsonParser, (req, res) => {
  // console.log(req.body.score);
  const { score } = req.body;
  rankFun(score);
  res.end("Done");
  res.status(200);
});
