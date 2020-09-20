/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let shuffle = nums.slice(0, n).map((num, index) => {
    if (index < n) {
      return [num, nums[index + n]];
    }
  });
  return shuffle.flat();
};
