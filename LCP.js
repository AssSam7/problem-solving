var longestCommonPrefix = function (strs) {
  let prefix = "",
    count = 0,
    flag = false;
  if (strs.length > 0) {
    const common = strs[0];
    for (let i = 0; i < common.length; i++) {
      if (strs.every((str) => str[i] === common[i])) {
        if (i == 0) {
          flag = true;
          count++;
        } else if (flag) {
          count++;
        }
      }
    }
    return common.substring(0, count);
  }
  return "";
};
