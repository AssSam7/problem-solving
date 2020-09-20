/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const numVer1 = version1.split(".");
  const numVer2 = version2.split(".");
  for (let i = 0; i < Math.max(numVer1.length, numVer2.length); i++) {
    let curr1 = parseInt(numVer1[i]) || 0;
    let curr2 = parseInt(numVer2[i]) || 0;
    if (curr1 == curr2) continue;
    return curr1 > curr2 ? 1 : -1;
  }
  return 0;
};
