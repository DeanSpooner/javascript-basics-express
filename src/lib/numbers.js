const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const power = (a, b) => {
  return a ** b;
};

const round = a => {
  return Math.round(a);
};

const roundUp = a => {
  return Math.ceil(a);
};

const roundDown = a => {
  return Math.floor(a);
};

const absolute = a => {
  return Math.abs(a); //Absolute is the positive version of an integer, whether it's + or -. ±3 > 3.
};

const quotient = (a, b) => {
  return Math.trunc(a / b); //This is the part of a division answer that's not a remainder e.g. 20/3 > quotient of 6, remainder of 2.
}; //Math.floor doesn't work here because the rounding would be wrong for a negative division! This truncates a float to a number, gets rid of the remainder.

const remainder = (a, b) => {
  return a % b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
