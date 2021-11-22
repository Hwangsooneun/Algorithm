/**
 * @param {string} s
 * @return {number}
 */
// runtime 60ms
 var lengthOfLastWord = function(s) {
  s = s.split('')
  let str = ''
  for (let i = s.length - 1; i >= 0; i--) {
      if (!str.length && s[i] === ' ') continue
      if (s[i] !== ' ') str += s[i]
      else break
  }
  return str.length
};