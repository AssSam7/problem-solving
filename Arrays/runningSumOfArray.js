/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let runningSums = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    runningSums.push(nums.slice(0, i + 1).reduce((a, b) => a + b));
  }
  return runningSums;
};
