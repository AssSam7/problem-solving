/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  // Return false if array size is less than 3
  if (A.length < 3) {
    return false;
  }

  // If max is duplicate
  if (
    A.filter((item) => item == Math.max(...A)).length != 1 ||
    A.indexOf(Math.max(...A)) == 0 ||
    A.indexOf(Math.max(...A)) == A.length - 1
  ) {
    return false;
  }

  // Calculate the mid point and two slices
  let mid = A.indexOf(Math.max(...A)),
    slice1 = A.slice(0, mid + 1),
    slice2 = A.slice(mid + 1, A.length),
    bool = true;

  // Check if any of slices has duplicates
  if (
    new Set(slice1).size != slice1.length ||
    new Set(slice2).size != slice2.length ||
    !slice1.length ||
    !slice2.length
  ) {
    return false;
  }

  console.log(slice1, slice2);

  // Check if slice1 is increasing
  for (let i = 1; i < slice1.length; i++) {
    if (slice1[i] < slice1[i - 1]) {
      bool = false;
    }
  }

  // Check if slice2 is decreasing
  for (let i = 1; i < slice2.length; i++) {
    if (slice2[i] > slice2[i - 1]) {
      bool = false;
    }
  }

  return bool;
};
