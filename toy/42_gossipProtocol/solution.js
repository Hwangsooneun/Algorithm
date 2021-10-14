// 시간초과
const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(line[i]);
      matrix.push(row);
    });
    return matrix;
  };
  
  const gossipProtocol2 = function (village, num) {
    let R = village.length;
    let C = village[0].length;
    let candi = []
    const isValid = (a, b) => a >= 0 && a < R && b >= 0 && b < C
    for (let i = 0; i < village.length; i++) {
      for (let j = 0; j < village[i].length; j++) {
        let count = 0
        if (village[i][j] === '2') {
          count += isValid(i - 1, j) && village[i - 1][j] === '1' ? 1 : 0
          count += isValid(i + 1, j) && village[i + 1][j] === '1' ? 1 : 0
          count += isValid(i, j - 1) && village[i][j - 1] === '1' ? 1 : 0
          count += isValid(i, j + 1) && village[i][j + 1] === '1' ? 1 : 0
          if (count > 0) candi.push([i, j])
        }
      }
    }
    if (!candi.length) return 0
    const aux = (arr, r, c, step) => {
      if (arr[r][c] === '1' || (typeof arr[r][c] === 'number'
      && arr[r][c] > step)) {
        arr[r][c] = step
        if (isValid(r - 1, c)) aux(arr, r - 1, c, step + 1)
        if (isValid(r + 1, c)) aux(arr, r + 1, c, step + 1)
        if (isValid(r, c - 1)) aux(arr, r, c - 1, step + 1)
        if (isValid(r, c + 1)) aux(arr, r, c + 1, step + 1)
      } else {
        return
      }
    }
    const combination = (arr, len) => {
      const results = [];
      if (len === 1){
          return arr.map((element) => [element]);
      }
      arr.forEach((fixed, index, origin) => {
          const rest = origin.slice(index + 1);
          const combinations = combination(rest, len - 1);
          const attached = combinations.map((el) => [fixed, ...el]);
          results.push(...attached);
      });
      return results;
    }
    let answer = Number.MAX_SAFE_INTEGER;
    let task = combination([...candi], num)
    for (let i = 0; i < task.length; i++) {
      let clone = createMatrix(village)
      for (let j = 0; j < task[i].length; j++) {
        const [x, y] = task[i][j]
        if (isValid(x - 1, y)) aux(clone, x - 1, y, 1)
        if (isValid(x + 1, y)) aux(clone, x + 1, y, 1)
        if (isValid(x, y - 1)) aux(clone, x, y - 1, 1)
        if (isValid(x, y + 1)) aux(clone, x, y + 1, 1)
      }
      let max = 0
      let check = true
      for (let i = 0; i < clone.length; i++) {
        if (!check) break
        for (let j = 0; j < clone[i].length; j++) {
          if (clone[i][j] === '1') {
            check = false;
            break
          }
          if (clone[i][j] > max) max = clone[i][j]
        }
      }
      if (check && answer > max) answer = max
    }
    return answer
  };
  
// refactoring
const gossipProtocol2 = function (village, num) {
    const MOVES = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ]
    let R = village.length;
    let C = village[0].length;
    let candi = []
    const isValid = (a, b) => a >= 0 && a < R && b >= 0 && b < C
    for (let i = 0; i < village.length; i++) {
      for (let j = 0; j < village[i].length; j++) {
        let count = 0
        if (village[i][j] === '2') {
          MOVES.map((el) => {
            let nextR = i + el[0]
            let nextC = j + el[1]
            if (isValid(nextR, nextC) && village[nextR][nextC] === '1') {
              count++
            }
          })
          if (count > 0) candi.push([i, j])
        }
      }
    }
    if (!candi.length) return 0
    const gossip = (arr, r, c) => {
      let queue = [[r, c, 0]]
      while (queue.length) {
        let [row, col, step] = queue.shift()
        if (arr[row][col] === '1' || arr[row][col] > step) {
          arr[row][col] = step
          step++
          MOVES.map((el) => {
            let nextR = row + el[0]
            let nextC = col + el[1]
            if (isValid(nextR, nextC)) {
              queue.push([nextR, nextC, step])
            }
          })
        }
      }
    }
    const combination = (arr, len) => {
      const results = [];
      if (len === 1){
          return arr.map((element) => [element]);
      }
      arr.forEach((fixed, index, origin) => {
          const rest = origin.slice(index + 1);
          const combinations = combination(rest, len - 1);
          const attached = combinations.map((el) => [fixed, ...el]);
          results.push(...attached);
      });
      return results;
    }
    let answer = Number.MAX_SAFE_INTEGER;
    let task = combination([...candi], num)
    for (let i = 0; i < task.length; i++) {
      let clone = createMatrix(village)
      for (let j = 0; j < task[i].length; j++) {
        const [x, y] = task[i][j]
        gossip(clone, x, y)
      }
      let max = 0
      let check = true
      for (let i = 0; i < clone.length; i++) {
        if (!check) break
        for (let j = 0; j < clone[i].length; j++) {
          if (clone[i][j] === '1') {
            check = false;
            break
          }
          if (clone[i][j] > max) max = clone[i][j]
        }
      }
      if (check && answer > max) answer = max
    }
    return answer
  };
  /*
  1. village의 '2'를 가진 주민을 대상으로 주위에 '1'이 1개이상인 대상을 뽑는다
  2. '2'요원의 좌표를 조합으로 num만큼 뽑아준다.
  3. 조합한 num수만큼의 요원을 대상으로 마을에 소문을 퍼트린다.
  4. 소문을 퍼트렸을때 전달 안받은 주민이 있으면 무효,
  5. 모두가 전달받았다면 제일 오래걸린 시간을 리턴한다.
  6. 조합마다의 시간중 가작 작은 시간을 마지막으로 리턴.
  재귀 솔루션이 시간초과로 통과되지 않아
  마찬가지로 queue 솔루션으로 바꾸니 통과되었다.
  이런문제를 풀때마다 느끼지만 재귀는 큐로 바꿀 수 있고
  큐가 효율이 좋다.
  */