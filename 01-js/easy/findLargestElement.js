/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  
    return  numbers.reduce((res , curr)=>{
        return ( res > curr ? res : curr)
    },numbers[0])
    
}

module.exports = findLargestElement;