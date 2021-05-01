const express = require('express');

const app = express();

app.use(express.json());

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const { negate } = require('./lib/booleans');

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

app.get('/numbers/subtract/:first/from/:second', (req, res) => {
  const first = parseInt(req.params.first, 10);
  const second = parseInt(req.params.second, 10);

  return Number.isNaN(first) || Number.isNaN(second)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.json({ result: subtract(second, first) });
});

app.post('/numbers/multiply', (req, res) => {
  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(req.body.a) || isNaN(req.body.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  }
});

// app.post('/numbers/divide', (req, res) => {
//   if (!req.body.a || !req.body.b) {
//     res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
//   } else if (isNaN(req.body.a) || (isNaN(req.body.b) && req.body.b !== 0)) {
//     res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
//   } else if (req.body.b === 0) {
//     res.status(400).json({ error: 'Unable to divide by 0.' });
//   } else {
//     res.status(200).json({ result: divide(req.body.a, req.body.b) });
//   }
// });

app.post('/numbers/divide', (req, res) => {
  if (req.body.a == null || req.body.b == null) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  const a = Number(req.body.a);
  const b = Number(req.body.b);

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (req.body.a == null || req.body.b == null) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  const a = Number(req.body.a);
  const b = Number(req.body.b);

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.a) });
});

module.exports = app;
