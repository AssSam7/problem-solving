/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  var i = 1;
  nums = nums
    .filter((num, index) => num > 0 && nums.indexOf(num) == index)
    .sort((a, b) => a - b);
  while (i <= Math.max(...nums)) {
    if (nums[i - 1] != i) {
      return i;
    }
    i++;
  }
  return i;
};
