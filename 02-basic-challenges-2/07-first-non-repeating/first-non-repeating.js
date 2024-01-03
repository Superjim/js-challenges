function findFirstNonRepeatingCharacter(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let obj of Object.entries(freq)) {
    if (obj[1] === 1) return obj[0];
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
