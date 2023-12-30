function titleCase(str) {
  let words = str.toLowerCase().split(" ");

  let returnWords = "";

  words.forEach((element) => {
    returnWords += element[0].toUpperCase() + element.slice(1) + " ";
  });

  return returnWords.trim();
}

module.exports = titleCase;
