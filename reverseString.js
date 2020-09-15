module.exports = {
  //param A : string
  //return a strings
  solve: function (A) {
    return A.split(" ")
      .filter((str) => str != "")
      .reverse()
      .join(" ");
  },
};
