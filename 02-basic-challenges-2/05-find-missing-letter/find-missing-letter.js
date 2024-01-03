function findMissingLetter(chars) {
  let charCodes = chars.map((char) => char.charCodeAt(0));
  charCodes.sort((a, b) => a - b);

  let fullArray = [];
  for (let i = charCodes[0]; i <= charCodes[charCodes.length - 1]; i++) {
    fullArray.push(i);
  }

  let missingCode = fullArray.find((code) => !charCodes.includes(code));

  return String.fromCharCode(missingCode);
}

module.exports = findMissingLetter;
