// 테스트 100%
function balancedBrackets(s) {
  if (!s.length) return true
  let stack = [];
  if (s[0] === ')' || s.length % 2 !== 0) return false
  else stack.push(s[0])
  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === '(' && s[i] === ')' ||
      stack[stack.length - 1] === '[' && s[i] === ']' ||
      stack[stack.length - 1] === '{' && s[i] === '}') {
      stack.pop()
    } else { 
      stack.push(s[i])
    }
  }
  return stack.length === 0;
}