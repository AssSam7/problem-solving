/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let arr = Array.from(new Set(nums)).sort((a, b) => a - b);
  let len = arr.length;
  if (arr[len - 3] != undefined) {
    return arr[len - 3];
  }
  return arr[len - 1];
};
