/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr.includes(arr[i] / 2) && i != arr.indexOf(arr[i] / 2)) ||
      (arr.includes(arr[i] * 2) && i != arr.indexOf(arr[i] * 2))
    ) {
      console.log(arr[i]);
      return true;
    }
  }
  return false;
};
