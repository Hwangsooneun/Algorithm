// 테스트 100%
function solution(dirs) {
    var answer = 0;
    let isVisited = {}
    let dir = { 'U': [-1, 0], 'D': [1, 0], 'R': [0, 1], 'L': [0, -1] }
    let curR = 0
    let curC = 0
    for (let i = 0; i < dirs.length; i++) {
        let [or, oc] = dir[dirs[i]]
        let nextR = curR + or
        let nextC = curC + oc
        if (nextR >= -5 && nextR <= 5 && nextC >= -5 && nextC <= 5) {
            let key = String(nextR) + String(nextC)
            let key2 = String(curR) + String(curC)
            if (isVisited[key + key2] || isVisited[key2 + key]) {
                curR = nextR
                curC = nextC
            } else {
                answer++
                curR = nextR
                curC = nextC
                isVisited[key + key2] = 1
                isVisited[key2 + key] = 1
            }
        }
    }
    return answer;
}
/*
어떤 로직을 구현할지 생각하기는 쉬웠지만
엣지케이스를 빨리 생각해내지 못해 애먹었다.
*/