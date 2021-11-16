/**
 * @param {number} x
 * @return {boolean}
 */
// runtime 432ms
 var isPalindrome = function(x) {
  x = String(x).split('')
  console.log(x)
  let left, right
  if (x.length & 2 === 0) {
      right = x.length / 2
      left = right - 1
  } else {
      left = Math.floor(x.length / 2) - 1
      right = Math.ceil(x.length / 2)
  }
  while (left >= 0) {
      if (x[right] !== x[left]) return false
      right++
      left--
  }
  return true
};
// refactoring
// runtime 176ms
var isPalindrome = function(x) {
  const original = x.toString();
  const reversed = original.split("").reverse().join("");
  return original === reversed;
};
/*
숫자가 판린드룸인지 boolean값을 리턴하는 문제이기 떄문에 solution 1은
적합하지 않음. 간단하게 뒤집었을때 input값과 일치하면 true, 일치하지않으면 false.
*/