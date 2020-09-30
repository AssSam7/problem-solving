/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let dups = nums.filter((num, index) => nums.indexOf(num) != index);
  return dups[0];
};
