const sayHello = string => {
  return `Hello, ${string}!`;
};

const uppercase = string => {
  return string.toUpperCase();
};

const lowercase = string => {
  return string.toLowerCase();
};

const countCharacters = string => {
  return string.length;
};

const firstCharacter = string => {
  return string.charAt(0); // Finds the character at a particular index value of a string.
};

const firstCharacters = (string, n) => {
  return string.slice(0, n); // Finds the characters from index 0 up to (BUT NOT INCLUDING) index n index value of a string.
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
