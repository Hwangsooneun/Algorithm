// 테스트 100%
const spiralTraversal = function (matrix) {
  const R = matrix.length
  const C = matrix[0].length
  let MOVES = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  const isValid = (r, c) => r < R && r >= 0 && c < C && c >= 0
  let answer = matrix[0][0]
  matrix[0][0] = false
  let dir = 0
  let row = 0
  let col = 0
  while (answer.length < R * C) {
    const [nextR, nextC] = MOVES[dir]
    const r = row + nextR
    const c = col + nextC
    if (isValid(r, c) && matrix[r][c]) {
      row = r
      col = c
      answer += matrix[row][col]
      matrix[row][col] = false
    } else {
      dir++
      if (dir > 3) dir = 0
    }
  }
  return answer
};
/*
1. 오른쪽 -> 아래 -> 왼쪽 -> 위 순으로 반복적으로 이루어지는 작업이므로 MOVES에 이동좌표를 순서대로 넣어준다.
2. while문시작 (answer가 matrix의 행 * 열과 같아지면 리턴)
  2-1 다음 좌표의 값이 false이거나 matrix의 범위를 넘어설 경우 방향을 틀어준다.
3. answer를 리턴.
*/