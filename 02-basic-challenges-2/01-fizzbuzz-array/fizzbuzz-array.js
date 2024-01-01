function fizzBuzzArray(num) {
  const ans = [];
  for (let i = 1; i < num + 1; i++) {
    let x = "";
    if (i % 3 === 0) x += "Fizz";
    if (i % 5 === 0) x += "Buzz";
    ans.push(x || i);
  }

  return ans;
}

module.exports = fizzBuzzArray;
