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
// refactoring 테스트 100% 효율성 100%
function solution(maps) {
    let R = maps.length
    let C = maps[0].length
    let MOVES = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0]
    ]
    let queue = [[0, 0, 1]]
    
    while (queue.length) {
        let [r, c, step] = queue.shift()
        if (r < 0 || r >= R || c < 0 || c >= C) continue;
        if (maps[r][c] === 1 || maps[r][c] > step) {
            maps[r][c] = step
        } else {
            continue
        }
        step++
        for (let i = 0; i < 4; i++) {
            let [or, oc] = MOVES[i]
            let nextR = r + or
            let nextC = c + oc
            queue.push([nextR, nextC, step])
        }
    }
    return maps[R - 1][C - 1] === 1 ? -1 : maps[R - 1][C - 1];
}
/*
같은 로직인데도 불구하고 재귀로는 효율성을 통과하지 못했다.
재귀를 queue로 변환하여 채점하니 모두 통과 되었다.
비슷한 시간복잡도를 가진다고 생각했지만 재귀가 복잡성을 더 가지는것 같다.
*/
