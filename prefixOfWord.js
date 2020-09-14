var isPrefixOfWord = function (sentence, searchWord) {
  let matchedIndex = [];
  sentence.split(" ").forEach((s, index) => {
    if (s.startsWith(searchWord)) {
      matchedIndex.push(index);
    }
  });
  console.log(matchedIndex);

  if (matchedIndex.length > 0) {
    return matchedIndex[0] + 1;
  } else {
    return -1;
  }
};
