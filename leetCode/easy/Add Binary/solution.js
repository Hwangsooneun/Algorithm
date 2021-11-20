/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// runtime 76ms
 var addBinary = function(a, b) {
  let answer = ''
  let len = Math.max(a.length, b.length)
  if (a.length < len) {
      a = '0'.repeat(len - a.length) + a
  } else if (b.length < len) {
      b = '0'.repeat(len - b.length) + b
  }
  let ceil = 0
  for (let i = len - 1; i >= 0; i--) {
      let sum = +a[i] + +b[i] + ceil
      answer = sum % 2 + answer
      ceil = Math.floor(sum / 2)
  }
  if (ceil === 1) answer = ceil + answer
  return answer
};
/*
단순히 2진법인 a와 b를 10진법으로 변환 후 더해서 다시 2진법으로 바꾸면 된다 생각했지만
표현할수 없는 자릿수를 가지고 있을 경우를 고려해야하기 때문에 문자열 상태를 유지해서 해결.
*/