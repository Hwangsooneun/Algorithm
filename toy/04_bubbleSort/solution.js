// 테스트 100%
const bubbleSort = function (arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    let count
    for (let j = 1; j <arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        count = 1
      }
    }
    if (!count) return arr;
  }
  return arr;
};