// 테스트 100% 효율성 100%
function solution(board) {
    var answer = 0
    let r = board.length
    let c = board[0].length
    if (r < 2 || c < 2) return 1
    
    for (let i = 1; i < r; i++) {
        for (let j = 1; j < c; j++) {
            let check = 0
            if (board[i][j] !== 0) {
                check = Math.min(
                    board[i - 1][j - 1],
                    board[i - 1][j],
                    board[i][j - 1]
                ) + 1
                board[i][j] = check
            }
            if (answer < check) answer = check
        }
    }
    return answer * answer
}
/*
dp, memoization
*/