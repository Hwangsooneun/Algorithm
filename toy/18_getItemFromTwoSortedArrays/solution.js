// 테스트 100%
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let count = 0;
  let cnt1 = 0;
  let cnt2 = 0;
  let num = 0;
  while (count < k) {
    if (arr1[cnt1] < arr2[cnt2]) {
      num = arr1[cnt1]
      cnt1++
    } else {
      num = arr2[cnt2];
      cnt2++
    }
    count++
  }
  return num;
};