/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// runtime 128ms
 var findMedianSortedArrays = function(nums1, nums2) {
  let sorted = nums1.concat(nums2).sort((a, b) => a - b)
  let answer = 0
  if (sorted.length % 2 === 0) {
      answer = (sorted[sorted.length / 2] + sorted[sorted.length / 2 - 1]) / 2
  } else {
      answer = sorted[Math.floor(sorted.length / 2)]
  }
  return answer
};
// runtime 128ms
var findMedianSortedArrays = function(nums1, nums2) {
  let len = nums1.length + nums2.length
  let midian = []
  let sorted = []
  if (len % 2 === 0) {
      midian.push(len / 2 - 1, len / 2)
  } else {
      midian.push(Math.floor(len / 2))
  }
  let finish = midian[midian.length - 1]
  let cnt = -1
  while (len > sorted.length) {
      if (cnt === finish) break
      if (nums1[0] <= nums2[0] || !nums2.length) {
          sorted.push(nums1.shift())
          cnt++
      } else {
          sorted.push(nums2.shift())
          cnt++
      }
  }
  let answer = 0
  for (let i = 0; i < midian.length; i++) {
      answer += sorted[midian[i]]
  }
  return answer / midian.length
};
