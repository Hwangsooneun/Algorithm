/**
 * @param {string} s
 * @return {boolean}
 */
// runtime 80ms
 var isValid = function(s) {
  let openBrackets = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
          let open;
          if (s[i] === ')') open = '('
          if (s[i] === ']') open = '['
          if (s[i] === '}') open = '{'
          if (openBrackets[openBrackets.length - 1] !== open) return false
          else openBrackets.pop()
      } else {
          openBrackets.push(s[i])
      }
  }
  return !openBrackets.length
};