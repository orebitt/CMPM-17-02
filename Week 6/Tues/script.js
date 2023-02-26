const express = require('express');
const request = require("request");

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log("welcome to the root!");
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});