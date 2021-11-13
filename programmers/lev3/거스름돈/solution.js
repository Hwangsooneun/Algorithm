// 테스트 100% 효율성 100%
function solution(n, money) {
  let table = new Array(n + 1).fill(0);
  table[0] = 1
  for (let i = 0; i < money.length; i++) {
      table[money[i]] += 1;
      for (let j = money[i] + 1; j <= n; j++){
          table[j] += table[j - money[i]];
      }
  }       
  return table[n];
}
/*
dp + memoization
*/