// bfs queue solution
function solution(places) {
    var answer = [];
    let R = places.length;
    let C = places[0].length;
    const isValid = (r, c) => r >= 0 && c >= 0 && r < R && c < C;
    const corona = (place, r, c) => {
        if (isValid(r + 1, c) && place[r + 1][c] === 'P') return false
        if (isValid(r + 2, c) && place[r + 2][c] === 'P' && place[r + 1][c] !== 'X') return false
        if (isValid(r, c + 1) && place[r][c + 1] === 'P') return false
        if (isValid(r, c + 2) && place[r][c + 2] === 'P' && place[r][c + 1] !== 'X') return false
        if (isValid(r + 1, c + 1) && place[r + 1][c + 1] === 'P' && (place[r + 1][c] !== 'X' || place[r][c + 1] !== 'X')) return false
        if (isValid(r + 1, c - 1) && place[r + 1][c - 1] === 'P' && (place[r][c - 1] !== 'X' || place[r + 1][c] !== 'X')) return false
        return true
        // 위에서부터 확인을 하기 때문에 위에 앉아있는 사람을 확인할 필요는 없다.
    }
    let queue = []
    let roomIdx = 0;
    while (roomIdx < 5) {
        let isCorona = true
        for (let i = 0; i < places.length; i++) {
            for (let j = 0; j < places[i].length; j++) { // 사람이 앉아있는 경우만 확인하도록 queue에 task를 넣는다.
                if (places[roomIdx][i][j] === 'P') {
                    queue.push([i, j])
                }
            }
        }
        for (let i = 0; i < queue.length; i++) {
            let [x, y] = queue[i]
            if (!corona(places[roomIdx], x, y)) { // 사람이 앉아있는 좌표가 들어가있기 때문에 거리두기 확인.
                isCorona = false
                break;
            }
        }
        queue = []
        if (isCorona) {
            answer.push(1)
        } else {
            answer.push(0)
        }
        roomIdx++
    }
    return answer;
}
/*
O(N^3)
겉으로 보이는 시간복잡도가 높지만 해야할일만 하게 함으로써 테스트 결과는 나쁘지 않다.
*/