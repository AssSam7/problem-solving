/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Checking palindrome
  const checkPalindrome = (str) => str === str.split("").reverse().join("");

  if (!s) return true;
  let st = "";

  [...s].forEach((str) => {
    if (/^[a-z0-9]+$/.test(str.toLowerCase())) {
      st += str.toLowerCase();
    }
  });

  return checkPalindrome(st);
};
