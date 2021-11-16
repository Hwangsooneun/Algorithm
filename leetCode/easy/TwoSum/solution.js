/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// runtime 100ms
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) return [i, j]
      }
  }
};
// refactoring
// runtime 76ms
var twoSum = function(nums, target) {
  let map = {}
  let answer;
  for (let i = 0; i < nums.length; i++) {
      const isPair = target - nums[i]
      
      if (map[isPair] !== undefined) {
          answer = [map[isPair], i]
          break
      }
      map[nums[i]] = i
  }
  return answer
};
/*
두개의 합이 target과 같을때 두 인덱스를 리턴하는 것이므로
처음 작성한 solution의 O(n^2)은 효율적이지 않다.
반복문을 하나 줄이고, 객체로 대체함으로써 target이 되는 짝을
찾을 수 있다.
*/