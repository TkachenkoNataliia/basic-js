const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  let cat = "^^";

  let concatMatrix = [].concat(...matrix);

  for (let i = 0; i < concatMatrix.length; i++) {
    if (concatMatrix[i] === cat) {
      result = result + 1;
    }
  }
  return result;
};
