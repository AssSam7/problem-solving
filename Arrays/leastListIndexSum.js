/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let res = [],
    sum;
  for (i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i]) && !res.length) {
      res.push(list1[i]);
      sum = i + list2.indexOf(list1[i]);
    } else if (list2.includes(list1[i]) && res.length) {
      if (i + list2.indexOf(list1[i]) < sum) {
        res.pop();
        res.push(list1[i]);
        sum = i + list2.indexOf(list1[i]);
      } else if (i + list2.indexOf(list1[i]) == sum) {
        res.push(list1[i]);
      }
    }
  }
  return res;
};
