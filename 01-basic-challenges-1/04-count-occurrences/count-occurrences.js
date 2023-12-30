function countOccurrences(string, char) {
  let count = 0;
  string.split("").forEach((letter) => {
    if (letter === char) count++;
  });

  return count;
}

module.exports = countOccurrences;
