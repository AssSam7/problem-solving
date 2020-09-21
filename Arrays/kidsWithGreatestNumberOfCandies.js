/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies),
    bools = [];
  candies.forEach((candie) => {
    if (candie == max) bools.push(true);
    else if (candie < max) {
      let diff = max - candie;
      if (diff > extraCandies) {
        bools.push(false);
      } else {
        bools.push(true);
      }
    }
  });
  return bools;
};
