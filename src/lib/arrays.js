const getNthElement = (index, array) => {
  if (array.length <= index) {
    index = index - array.length;
  };
  return array[index];
}; //This will loop over if the index is larger than the array length, until it can come down to a compatible index number.

const arrayToCSVString = array => {
  return array.toString(); //By default, this separates the array elements with a comma.
};

const csvStringToArray = string => {
  return string.split(",");
}; //This splits a string into an array. The parameter will be what is counted as the separator, in this case a comma.

const addToArray = (element, array) => {
  array.push(element);
}; // This pushes the push parameter into the end of the array.

const addToArray2 = (element, array) => {
  return array = array.concat(element);
}; // Concat concatenates (connects) an array with an element(s) passed as paramaters, and creates a new array from it.

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
}; //This removes elements starting at index, and the number specified after. In this case, 1 at given index.

const numbersToStrings = numbers => {
  return numbers.map(num => num.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(lower => lower.toUpperCase());
};

const reverseWordsInArray = strings => {
  const reverseArray = [];
  for (let i = 0; i < strings.length; i++) {
    let splitWord = strings[i].split(""); //This splits the string into individual characters in an array.
    let reverseWord = splitWord.reverse(); // This reverses the array order e.g ["D", "e", "a", "n"] -> ["n", "a", "e", "D"]
    let joinedWord = reverseWord.join(""); //This joins the array into one string, with nothing separating each character.
    reverseArray.push(joinedWord); //This pushes the reversed word into the reverseArray.
  }
  return reverseArray;
};

const onlyEven = numbers => {
  const evenNum = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNum.push(numbers[i]); //If the ith term of the numbers array is even, push it into the evenNum array.
    };
  }
  return evenNum;
};

const removeNthElement2 = (index, array) => {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) != index) { //If the index number of the ith element of array does not equal index, push it into newArray.
      newArray.push(array[i]);
    };
  }
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const vowelStrings = [];
  for (let i = 0; i < strings.length; i++) {
    let lowerCase = strings[i].toLowerCase();
    if (lowerCase.charAt(0) === "a" || lowerCase.charAt(0) === "e" || lowerCase.charAt(0) === "i" ||
      lowerCase.charAt(0) === "o" || lowerCase.charAt(0) === "u") { //If the first character of the lowerCase string is a/e/i/o/u, push to vowelStrings array.
      vowelStrings.push(strings[i]);
    };
  };
  return vowelStrings;
};

const removeSpaces = string => {
  splitUp = string.split(" "); //Splits string into substrings that are separated by " ".
  joinedUp = splitUp.join(""); //Joins substring array into one string with "" no spaces at all between them.
  return joinedUp;
};

const sumNumbers = numbers => {
  let sum = numbers.reduce(
    function (accumulator, currentValue) {
      return accumulator + currentValue //The accumulated amount up til now will add on the current value, then repeat.
    }, 0 //The process will start from the first value, index 0.
  );
  return sum;
};

const sortByLastLetter = strings => {
  function endOfWord(word1, word2) {
    if (word1.slice(-1) < word2.slice(-1)){ //If the last letter of word 1 is < word 2, put w1 before w2.
      return -1; 
    } else if (word1.slice(-1) > word2.slice(-1)) {
       return 1; //If the last letter of word 1 is > word 2, put w1 after w2.
    } else {
      return 0; //If the last letter of word 1 is = word 2, leave them where they are.
    }
}
return strings.sort(endOfWord);
}

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
