const express = require('express');

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract } = require('./lib/numbers');

const app = express();

// STRINGS

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.json({ result: firstCharacter(req.params.string) });
  }
});

// NUMBERS

// app.get('/numbers/add/:first/and/:second', (req, res) => {
//   if (
//     typeof parseInt(req.params.first, 10) === 'number' &&
//     typeof parseInt(req.params.second, 10) === 'number'
//   ) {
//     res.json({ result: add(parseInt(req.params.first, 10), parseInt(req.params.second, 10)) });
//   } else {
//     res.sendStatus(400);
//   }
// });

app.get('/numbers/add/:first/and/:second', (req, res) => {
  const first = parseInt(req.params.first, 10);
  const second = parseInt(req.params.second, 10);

  return Number.isNaN(first) || Number.isNaN(second)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.json({ result: add(first, second) });
});

app.get('/numbers/subtract/:first/from/:second', (req, res) => {
  const first = parseInt(req.params.first, 10);
  const second = parseInt(req.params.second, 10);

  return Number.isNaN(first) || Number.isNaN(second)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.json({ result: subtract(second, first) });
});

module.exports = app;
