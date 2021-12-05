// 테스트 100%
function solution(n, computers) {
  let answer = 0;
  const map = new Array(computers.length).fill(false)
  const dfs = (comIdx) => {
      map[comIdx] = true;
      for (let i = 0; i < computers[comIdx].length; i++) {
          if (computers[comIdx][i] === 1 && !map[i]) {
              dfs(i)
          }
      }
  }
  for (let i = 0; i < computers.length; i++) {
      if (!map[i]) {
          dfs(i)
          answer++
      }
  }
  return answer
}
/*
dfs
*/