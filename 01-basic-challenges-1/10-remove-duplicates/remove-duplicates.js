function removeDuplicates(nums) {
  let freq = {};
  for (let num of nums) {
    if (!freq.hasOwnProperty(num)) {
      freq[num] = num;
    }
  }
  return Object.values(freq);
}

module.exports = removeDuplicates;
