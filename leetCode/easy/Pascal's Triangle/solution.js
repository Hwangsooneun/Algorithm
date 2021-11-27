/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  let answer = []
  for (let i = 1; i <= numRows; i++) {
      answer.push(new Array(i).fill(1))
  }
  for (let i = 1; i < answer.length - 1; i++) {
      for (let j = 0; j < answer[i].length - 1; j++) {
          answer[i + 1][j + 1] = answer[i][j] + answer[i][j + 1]
      }
  }
  return answer
};