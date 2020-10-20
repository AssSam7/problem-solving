/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let needToRotate = nums.splice(nums.length - k, nums.length);
  nums.unshift(...needToRotate);
};
