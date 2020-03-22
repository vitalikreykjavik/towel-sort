
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  if (matrix.length === 0) {
    return [];
  } else if (! matrix) {
    return [];
  };

  let result =[];
  matrix.forEach(el => {
    if (matrix.indexOf(el) % 2 === 0) {
      for (let i = 0; i < el.length; i++) {
        result.push(el[i]);
      };
    } else if (matrix.indexOf(el) % 2 !== 0) {
      for (let k = el.length - 1; k >= 0; k--) {
        result.push(el[k]);
      };
    };
  });
  return result;
};
