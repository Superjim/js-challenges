function findMaxNumber(arr) {
  arr.sort((a, b) => b - a);
  return arr[0];
}

module.exports = findMaxNumber;
