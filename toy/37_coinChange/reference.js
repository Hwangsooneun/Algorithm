// naive solution: O(2^M * N))
// 6을 만드는 방법 중 [1, 5]와 [5, 1]을 중복해서 세면 안 되기 때문에.
// 동전을 순서대로 사용한다.
const coinChange = function (total, coins) {
  const makeChageFrom = (left, idx) => {
    if (left === 0) return 1;

    let cnt = 0;
    // 지금 사용하고 있는 동전부터만 고려한다.
    for (let i = idx; i < coins.length; i++) {
      if (left - coins[i] >= 0) {
        cnt = cnt + makeChageFrom(left - coins[i], i);
      }
    }

    return cnt;
  };
  // 0번째 동전부터 사용한다.
  return makeChageFrom(total, 0);
};

// simpler recursion
// and dynamic programming with memoization: O(M * N)
const coinChange = function (total, coins) {
    // memo[i][j]는 i만큼의 금액을 coins[j]부터 ~ coins[coins.length - 1]까지 사용하여 만들 수 있는 경우의 수를 저장
    const memo = [];
    for (let i = 0; i < total + 1; i++) memo.push(Array(coins.length).fill(-1));
    const makeChageFrom = (left, idx) => {
      // 0을 만드는 방법은 1가지이다. 아니면 목표 금액을 만들었다고 생각해도 된다.
      if (left === 0) return 1;
      // 금액이 마이너스가 되는 경우는 불가능하므로 0을 리턴
      if (left < 0) return 0;
      // 동전을 전부 검토해서, 남아있는 새로운 동전은 없는데 목표 금액을 만들지 못한 경우 (실패)
      if (idx >= coins.length && left > 0) return 0;
      // 이미 해결한 적이 있는 문제는 다시 풀지 않는다.
      if (memo[left][idx] !== -1) return memo[left][idx];
  
      // left만큼의 금액을 coins[idx]부터 사용하여 만들 수 있는 경우의 수는
      //  1) coins[idx]는 그만 사용하고, 다음 동전으로 넘어가거나 (목표 금액은 그대로이고, idx가 증가한다.)
      //  2)) coins[idx]를 한번 더 사용한다. coins[idx]를 또 사용할 수 있으므로, idx는 그대로이고, 목표 금액은 coins[i]만큼 줄어든다.
      memo[left][idx] =
        makeChageFrom(left, idx + 1) + makeChageFrom(left - coins[idx], idx);
      return memo[left][idx];
    };
  
    return makeChageFrom(total, 0);
  };
  
  // dynamic programming with tabulation: O(M * N)
  const coinChange = function (total, coins) {
    // table[i][j]는 coins[j]까지 사용해서 i만큼의 금액을 만들 수 있는 경우의 수를 저장
    const table = [];
    for (let i = 0; i < total + 1; i++) table.push(Array(coins.length).fill(0));
    // 모든 경우에 0을 만들 수 있는 경우는 1 (base case)
    for (let i = 0; i < coins.length; i++) table[0][i] = 1;
  
    for (let amount = 1; amount <= total; amount++) {
      // 작은 금액부터 차례대로 경우의 수를 구한다. (bottom-up)
      for (let idx = 0; idx < coins.length; idx++) {
        let coinIncluded = 0;
        if (amount - coins[idx] >= 0) {
          coinIncluded = table[amount - coins[idx]][idx];
        }
  
        let coinExcluded = 0;
        if (idx >= 1) {
          // 동전을 순서대로 검사하고 있기 때문에, 바로 직전의 경우만 고려하면 된다.
          // 단, 0번째 동전은 직전이 없으므로 제외한다.
          coinExcluded = table[amount][idx - 1];
        }
  
        table[amount][idx] = coinIncluded + coinExcluded;
      }
    }
  
    return table[total][coins.length - 1];
  };