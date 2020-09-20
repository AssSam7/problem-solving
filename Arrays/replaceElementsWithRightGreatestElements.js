/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let i = 0;
  while (i < arr.length - 1) {
    arr[i] = Math.max(...arr.slice(i + 1, arr.length));
    i++;
  }
  arr[i] = -1;

  return arr;
};
