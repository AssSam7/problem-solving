/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let shuffle = [];
  [...s].forEach((str, index) => {
    shuffle[indices[index]] = str;
  });
  return shuffle.join("");
};
