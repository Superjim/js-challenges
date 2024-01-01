function isPalindrome(s) {
  string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return string === string.split("").reverse().join("");
}

module.exports = isPalindrome;
