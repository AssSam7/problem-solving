/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  for (let i = 0; i < t.length; i++) {
    if (s.includes(t[i])) {
      s = s.replace(t[i], "");
    } else {
      return t[i];
    }
  }
};
