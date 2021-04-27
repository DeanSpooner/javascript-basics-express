const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  return (a && !b) || (!a && b);
};

const truthiness = a => {
  if (a) {
    return true;
  } else {
    return false;
  };
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return false;
  };
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  } else {
    return false;
  };
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  } else {
    return false;
  };
};

const isOdd = a => {
  if (a % 2 === 1) {
    return true;
  } else {
    return false;
  };
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  };
}

const isSquare = a => {
  if (Math.sqrt(a) === Math.trunc(Math.sqrt(a))) { //Here, only square-roots of square numbers would have no decimal, so the square root's truncated form would be identical.
    return true;
  } else {
    return false;
  };
};

const startsWith = (char, string) => {
  if (char === string.charAt(0)) {
    return true;
  } else {
    return false;
  };
};

const containsVowels = string => {
  if (string.includes("a") || string.includes("A") || string.includes("e") || string.includes("E") || 
  string.includes("i") || string.includes("I") || string.includes("o") || string.includes("O") || 
  string.includes("u") || string.includes("U")) {
    return true;
  } else {
    return false;
  };
};

const isLowerCase = string => {
  if (string === string.toLowerCase()) {
    return true;
  } else {
    return false;
  };
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
