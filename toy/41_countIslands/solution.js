// 테스트 100%
const countIslands = function (grid) {
    if (!grid.length) return 0
    let R = grid.length;
    let C = grid[0].length
    let answer = 0
  
    const visit = (r, c) => {
      if (r < 0 || r >= R || c < 0 || c >= C) return
      if (grid[r][c] === '0' || grid[r][c] === true) return
      grid[r][c] = true
      visit(r + 1, c)
      visit(r, c + 1)
      visit(r, c - 1)
    }
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (grid[i][j] === '1') {
          visit(i, j)
          answer++
        }
      }
    }
    return answer
  };