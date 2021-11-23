/**
 * @param {string} s
 * @return {number}
 */
// runtime 92ms
 var lengthOfLongestSubstring = function(s) {
  let answer = 0
  let candi = ''
  for (let i = 0; i < s.length; i++) {
      let str = s[i]
      let idx = candi.indexOf(s[i])
      if (idx !== -1) {
          answer = candi.length > answer ? candi.length : answer
          candi = candi.slice(idx + 1) + str
      } else {
          candi += str
          answer = candi.length > answer ? candi.length : answer
      }
  }
  return answer
};