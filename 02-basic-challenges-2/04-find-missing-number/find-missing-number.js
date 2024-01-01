function findMissingNumber(nums) {
  nums.sort((a, b) => a - b);

  let fullArray = [];
  for (let i = nums[0]; i <= nums[nums.length - 1]; i++) {
    fullArray.push(i);
  }

  let difference = fullArray.filter((x) => !nums.includes(x));

  return difference[0];
}

module.exports = findMissingNumber;
