function solution(m, n, board) {
    var answer = 0;
    let rotBoard = []
    for (let i = n - 1; i >= 0; i--) {
        let row = []
        for (let j = 0; j < m; j++) {
            row.push(board[j][i])
        }
        rotBoard.push(row)
    }
    while (true) {
        let stack = []
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < m - 1; j++) {
                if (rotBoard[i][j] === '0') continue
                if (rotBoard[i][j] === rotBoard[i][j + 1]
                   && rotBoard[i][j] === rotBoard[i + 1][j]
                   && rotBoard[i][j] === rotBoard[i + 1][j + 1]) {
                    stack.push([i, j])
                }
            }
        }
        if (stack.length) {
            for (let i = 0; i < stack.length; i++) {
                let [r, c] = stack[i]
                rotBoard[r][c] = 0, rotBoard[r][c + 1] = 0
                rotBoard[r + 1][c] = 0, rotBoard[r + 1][c + 1] = 0
            }
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (rotBoard[i][j] === 0) {
                        rotBoard[i].splice(j, 1)
                        rotBoard[i].unshift('0')
                        answer++
                    }
                }
            }
        } else {
            return answer
        }
    }
}
/*
1. 행이 다르면 블록이 부숴졌을때 상단블록을 아래로 옮기기 힘드므로 270도로 board를 돌려준다.
2. 탐색시작
 2-1. 돌려준 board를 탐색하며 2X2를 만족하면 stack에 넣어준다.
 2-2. stack에 값이 존재한다면
  2-2-1. stack에 넣어둔 좌표를 돌며 2X2블록을 0으로 만들어준다.
 2-3. stack에 값이 존재하지 않는다면
  2-3-1. 더이상 사라질 블럭이 없으므로 answer를 리턴.
 2-4. 다시 board를 탐색하며 0이면 해당행에서 지워주고 앞(상단)은 '0'으로 채워주며 블록이 사라진것이므로 answer에 1을 더한다.
*/