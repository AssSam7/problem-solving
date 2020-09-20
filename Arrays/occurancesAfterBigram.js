/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  let t = text.split(" "),
    answer = [];
  for (let i = 0; i < t.length; i++) {
    if (t[i] == first && t[i + 1] == second) {
      if (t[i + 2]) {
        answer.push(t[i + 2]);
      }
    }
  }

  return answer;
};
