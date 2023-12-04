/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  let x = {};

  for (let letter of str1) {
    if (x[letter]) {
      x[letter] = ++x[letter];
    } else {
      x[letter] = 1;
    }
  }

  // console.log("x: ", x);

  let y = {};

  for (let letter of str2) {
    if (y[letter]) {
      y[letter] = ++y[letter];
    } else {
      y[letter] = 1;
    }
  }

  let key1 = Object.keys(x);
  console.log("key1: ", key1);
  let key2 = Object.keys(y);
  console.log("key2: ", key2);

  if (key1.length != key2.length) return false;

  for (let key of key1) {
    if (!key2.includes(key) || x[key] != y[key]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("Debit Card", "Bad Credit"));

module.exports = isAnagram;
