/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowelsIndex = [],
    vowels = [],
    res = s.split("");
  vowels = [...s]
    .filter((str, index) => {
      if (/^(a|e|i|o|u|A|E|I|O|U)$/.test(str)) {
        vowelsIndex.push(index);
        return str;
      }
    })
    .reverse()
    .join("");
  console.log(vowelsIndex, vowels);

  // Replace s with reversed vowels
  for (let i = 0; i < vowelsIndex.length; i++) {
    res[vowelsIndex[i]] = vowels[i];
  }
  console.log(res.join(""));

  return res.join("");
};
