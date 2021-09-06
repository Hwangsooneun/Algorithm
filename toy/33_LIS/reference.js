// naive solution: O(2^N)
// 배열의 각 요소에 대해서 선택, 무시의 2가지 선택이 가능
const LIS = function (arr) {
  // 현재 검토할 차례인 배열의 '인덱스'와
  // 이전에 선택된 요소의 '값'을 인자로 전달한다.
  const pickOrNot = (idx, before) => {
    // base case
    // 가장 짧은 LIS의 길이는 1이다. 모든 요소는 그 자체로 길이 1인 부분 서열이다.
    if (idx === arr.length) return 1;

    // recursive case
    // (초기값인 Number.MAX_SAFE_INTEGER를 포함해) 이전에 선택된 요소와 비교를 한다.
    const adder = arr[idx] > before ? 1 : 0;
    return Math.max(
      // 1) 현재 요소를 선택한다.
      //  1-1) adder === 1: 현재 요소를 이전에 선택된 요소 뒤에 이어지는 요소로 생각해 LIS의 길이에 1을 더한다.
      //  1-2) adder === 0: 현재 요소를 이어지는 요소로 생각할 수 없는 경우. 이전 요소를 건너뛰고 LIS의 처음 또는 중간 요소로 현재 요소를 선택한다.
      adder + pickOrNot(idx + 1, arr[idx]), // concat or restart
      // 2) 현재 요소를 무시한다.
      pickOrNot(idx + 1, before) // ignore
    );
  };
  // 첫 번째 요소의 이전 요소는 없기 때문에 매우 큰 값을 이전 값으로 설정한다.
  // 첫 번째 요소부터 시작하는 LIS를 검사하는 효과를 갖는다.
  return pickOrNot(0, Number.MAX_SAFE_INTEGER);
};

// dynamic programming with memoization: O(N^2)
const LIS = function (arr) {
  // memo[i]는 i부터 시작하는 LIS의 길이를 저장
  const memo = Array(arr.length).fill(-1);
  // 마지막 요소부터 시작하는 LIS는 1이 유일하다.
  memo[memo.length - 1] = 1;
  const calculateLIS = (idx) => {
    if (memo[idx] !== -1) return memo[idx];

    let max = 1;
    for (let i = idx + 1; i < arr.length; i++) {
      const len = calculateLIS(i);
      // idx와 i가 연결되지 않을 수도 있다.
      if (arr[idx] < arr[i]) {
        // i부터 시작하는 LIS를 연결할 수 있는 경우
        max = Math.max(max, len + 1);
      }
      // i부터 시작하는 LIS가 더 길 수도 있다.
      // idx부터 시작하는 LIS를 구해야 하므로, 무시한다.
    }
    memo[idx] = max;
    return memo[idx];
  };
  calculateLIS(0);
  // 가장 긴 길이를 구한다.
  return Math.max(...memo);
};