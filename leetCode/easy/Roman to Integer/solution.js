/**
 * @param {string} s
 * @return {number}
 */
// runtime 136ms
var romanToInt = function(s) {
  const map = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
      "F": 0
  }
  s += 'F'
  let answer = 0;
  for (let i = 0; i < s.length - 1; i++) {
      if (map[s[i]] > map[s[i + 1]]) answer += map[s[i]]
      else if (map[s[i]] < map[s[i + 1]]) {
          answer += map[s[i + 1]] - map[s[i]]
          i++
      } else {
          answer += map[s[i]]
      }
  }
  return answer
};