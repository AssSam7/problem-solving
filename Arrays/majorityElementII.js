/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = {},
    res = [];
  nums.forEach((num) => {
    map[num] = (map[num] || 0) + 1;
  });
  for (const key in map) {
    if (map[key] > Math.floor(nums.length / 3)) {
      res.push(Number(key));
    }
  }
  return res;
};
