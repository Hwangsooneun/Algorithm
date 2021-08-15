const LSCS = function (arr) {
  let sum = arr[0];
  let max = Math.max(...arr)
    for (let i = 1; i < arr.length; i++) {
      sum = Math.max(sum + arr[i], arr[i])
      max = Math.max(max, sum)
    }
    return max
};
/*
O(N)
*/