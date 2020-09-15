/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Trimming the leading and trailing spaces
  s = s.trimStart();
  s = s.trimEnd();

  if (!s.length) return 0;

  return s.split(" ")[s.split(" ").length - 1].length;
};
