const findSum = function(array) { //.reduce() will add values in array
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
  // your code here - don't forget to return a number!
}; // Complete. Feel good about this one

const findFrequency = function(array) {
  const freqObj = {};
  const mostLeastObj = {most: '', least: ''};
  let maxFreq = '';
  let max = 0;
  let minFreq = '';
  let min = Infinity;
  for (let element of array) {
    if (freqObj[element]) {
      freqObj[element]++;
    } else {freqObj[element] = 1};
  };
  for (let element in freqObj) {
    if (freqObj[element] > max) {
      max = freqObj[element];
      maxFreq = element;
    };
  };
  for (let element in freqObj) {
    if (freqObj[element] < min) {
      min = freqObj[element];
      minFreq = element;
    };
  };
  mostLeastObj.most = maxFreq;
  mostLeastObj.least = minFreq;
  return mostLeastObj;
  // your code here - don't forget to return an object!
}; //Complete. Rough

const isPalindrome = function(str) {
  str = str.toLowerCase();
  const revArr = str.split('').reverse();
  const revStr = revArr.join('');
  if (str === revStr) {
    return true;
  } else {return false;}
  // your code here - don't forget to return a boolean!
}; // Complete. Feel good

const largestPair = function(array) {
  const arr = [];
  for (let i = 0; i < array.length - 1; i++){
    let j = i + 1;
    arr.push(array[i] * array[j]);
  }
  return Math.max(...arr);
  // your code here - don't forget to return a number!
}; //Complete. Feel good about

const removeParenth = function(str) {
  //convert string into an array
  const arr = Array.from(str);
  //find indices of the open and close parentheses
  const start = arr.indexOf('(');
  const end = arr.indexOf(')');
  /*create elements variable to determine the number of elements that will
  need to be removed from array*/
  let elements = '';
  /*if there are no parentheses in the string, the start and elements values
  evaluate to -1 and 1, respectively, causing splice to remove the last element
  from the array even though there are no parentheses. If statement takes
  into account if start and end values are negative values*/
  if (start >= 0) {
    elements = (end - start) + 1;
  } else { elements = 0};
  /*splice array to remove the parantheses and the elements contained within
  the parentheses*/
  arr.splice(start, elements);
  //convert array back into a string and return
  //added if statement in the event parentheses are missing from the string
  if (start < 0 || end < 0) {
    return 'Parantheses missing!';
  } else { return arr.join('');}
  // your code here - don't forget to return a string!
}; //Complete. Feel good about.

const scoreScrabble = function(str) {
  //convert string to array
  const arr = Array.from(str);
  //create empty array to fill with score values
  const arrScores = [];
  /*loop to check each element(letter) and if statement to push score values of
  each letter into arrScores. There's got to be a more efficient way to assign
   scores, but this works for now*/
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u' || arr[i] === 'l' || arr[i] === 'n' || arr[i] === 'r' || arr[i] === 's' || arr[i] === 't') {
      arrScores.push(1);
    } else if (arr[i] === 'd' || arr[i] === 'g') {
      arrScores.push(2);
    } else if (arr[i] === 'b' || arr[i] === 'c' || arr[i] === 'm' || arr[i] === 'p') {
      arrScores.push(3);
    } else if (arr[i] === 'f' || arr[i] === 'h' || arr[i] === 'v' || arr[i] === 'w' || arr[i] === 'y') {
      arrScores.push(4);
    } else if (arr[i] === 'k') {
      arrScores.push(5);
    } else if (arr[i] === 'j' || arr[i] === 'x') {
      arrScores.push(8);
    } else if (arr[i] === 'q' || arr[i] === 'z') {
      arrScores.push(10);
    };
  }
  //return .reduce() method on the arrScores to get sum of all letter scores
  return arrScores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  // your code here - don't forget to return a number!
}; /*Complete. It works, but there has to be a more efficient way. I just don't
know it*/
