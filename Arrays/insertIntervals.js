/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // Between function
  function between(x, min, max) {
    return x >= min && x <= max;
  }

  let i = 0,
    n = intervals.length,
    res = [];

  // Insert the intervals less than
  while (i < n && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  // Intervals that needs to be merged
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  res.push(newInterval);

  // Insert the intervals greater than
  while (i < n) {
    res.push(intervals[i]);
    i++;
  }

  return res;
};
