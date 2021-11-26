/**
 * @param {number[]} height
 * @return {number}
 */
// runtime 84ms
 var maxArea = function(height) {
  let front = 0;
  let back = height.length - 1
  let max = 0;
  while (front < back) {
      if (height[front] < height[back]) {
          max = Math.max(max, height[front] * (back - front))
          front++
      } else {
          max = Math.max(max, height[back] * (back - front))
          back--
      }
  }
  return max
};