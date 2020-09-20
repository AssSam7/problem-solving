/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let arr = Array.from(new Set(nums)),
    i = 0;
  for (i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }
  return i;
};
