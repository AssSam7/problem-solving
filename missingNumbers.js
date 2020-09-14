/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // Case where some element is missing from non-linear array
  for (let i = 0; i < Math.max(...nums); i++) {
    if (!nums.includes(i)) {
      console.log(i);
      return i;
    }
  }

  // Case where there is linear array and the next element needs to be returned
  for (let i = 0; i <= Math.max(...nums); i++) {
    if (nums.includes(i)) {
      return Math.max(...nums) + 1;
    }
  }
};
