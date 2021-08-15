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
  
  const finish = function (arr) {
    let boolean = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes('1')) boolean = false;
    }
    return boolean
  }
  
  const gossipProtocol = function (village, row, col) {
    let mat = createMatrix(village);
    const aux = (M, N, r, c, day) => {
      if (finish(mat)) return day
      if (r < 0 || r >= M || c < 0 || c >= N) return;
  
      if (mat[r][c] !== '0') {
        if (mat[r + 1, c] === '1') mat[r + 1, c] === 'x'
        if (mat[r - 1, c] === '1') mat[r - 1, c] === 'x'
        if (mat[r, c - 1] === '1') mat[r, c - 1] === 'x'
        if (mat[r, c + 1] === '1') mat[r, c + 1] === 'x'
      } else {
        return;
      }
      aux(M, N, r + 1, c, day + 1); // 상
      aux(M, N, r - 1, c, day + 1); // 하
      aux(M, N, r, c - 1, day + 1); // 좌
      aux(M, N, r, c + 1, day + 1); // 우
    }
    return aux(mat.length, mat[0].length, row, col, 0);
  };
  