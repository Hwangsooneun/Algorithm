/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// runtime 84ms top 98.94%
 var convert = function(s, numRows) {
  if (numRows <= 1) return s
  const answer = new Array(numRows).fill('')
  const up = -1, down = 1
  let op, idx = 0;
  answer[idx] += s[0]
  for (let i = 1; i < s.length; i++) {
      if (idx === numRows - 1) op = up
      else if (idx === 0) op = down
      idx += op
      answer[idx] += s[i]
  }
  return answer.join('')
};
/*
O(N)
*/