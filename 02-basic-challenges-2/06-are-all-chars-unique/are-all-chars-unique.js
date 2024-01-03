function areAllCharactersUnique(nums) {
  let freq = {};
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let obj of Object.entries(freq)) {
    if (obj[1] > 1) return false;
  }
  return true;
}
module.exports = areAllCharactersUnique;
