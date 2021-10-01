// bfs 테스트 100% 효율성 50%
function solution(maps) {
    let R = maps.length
    let C = maps[0].length
    
    const aux = (r, c, step) => {
        if (r < 0 || r >= R || c < 0 || c >= C) return;
        if (maps[r][c] === 1 || maps[r][c] > step) {
            maps[r][c] = step
        } else {
            return
        }
        aux(r + 1, c, step + 1)
        aux(r - 1, c, step + 1)
        aux(r, c + 1, step + 1)
        aux(r, c - 1, step + 1)
    }
    aux(0, 0, 1)
    return maps[R - 1][C - 1] === 1 ? -1 : maps[R - 1][C - 1];
}
/*
효율성 런타임 아웃.
*/
