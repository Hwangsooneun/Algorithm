// 테스트 100%
let longestPalindrome = function (str) {
    if (str.length < 2) return str.length
    let answer = [];
    const isValid = (l, r) => l >= 0 && r < str.length;
    const aux = (left, right) => {
      if (str[left - 1] === str[right + 1]) {
        if (isValid(left - 1, right + 1)) {
          aux(left - 1, right + 1)
        } else {
          answer.push(str.slice(left, right + 1))
          return
        }
      } else {
        answer.push(str.slice(left, right + 1))
        return
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i - 1] === str[i + 1]) {
        aux(i - 1, i + 1)
      }
      if (str[i] === str[i + 1]) {
        aux(i, i + 1)
      }
    }
    answer = answer.sort((a, b) => b.length - a.length)
    return answer.length ? answer = answer[0].length : 0
  };
