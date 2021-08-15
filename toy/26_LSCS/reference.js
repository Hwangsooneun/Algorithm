// naive solution: O(N^2)
const LSCS = function (arr) {
  let max = -100000;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum > max) max = sum;
    for (let j = i + 1; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum > max) max = sum;
    }
  }
  return max;
};

// dynamic programming: O(N)
const LSCS = function (arr) {
    let subArrSum = 0; // 연속 배열의 합
    let max = Number.MIN_SAFE_INTEGER; // 정답의 후보를 저장
    for (let i = 0; i < arr.length; i++) {
      subArrSum = subArrSum + arr[i];
      if (subArrSum > max) max = subArrSum;
  
      // 연속된 구간의 합이 음수인 경우,
      // 해당 부분은 버리고 다시 시작해도 된다.
      if (subArrSum < 0) {
        subArrSum = 0;
      }
    }
  
    return max;
  };
  
  // also dynamic 2: O(N)
  const LSCS = function (arr) {
    let subArrSum = arr[0];
    let max = arr[0]; // 정답의 후보를 저장
    for (let i = 1; i < arr.length; i++) {
      // subArrSum는 바로 직전의 요소까지 검토했을 때 가장 연속합
      // 연속합에 추가로 검토하는 요소, 즉 arr[i]를 더하는 것보다
      // arr[i] 하나의 값이 더 큰 경우 (subArrSum가 음수일 경우)
      // subArrSum를 버리는 게 좋다.
      // 쭉 더해서 음수인 부분은 굳이 더할 필요가 없다.
      subArrSum = Math.max(subArrSum + arr[i], arr[i]);
      max = Math.max(max, subArrSum);
    }
  
    return max;
  };
  