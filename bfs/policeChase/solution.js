// 재귀 solution
function policeChase(N, M) {
    let visited = new Array(M + 1).fill(100001)
    const isValid = (idx) => idx >= 0 && idx < visited.length;
    const aux = (times, dis) => {
        if (isValid(dis)) {
            if (visited[dis] < times) {
                return
            } else {
                visited[dis] = times
                times++
                aux(times, dis * 2)
                aux(times, dis - 1)
                aux(times, dis + 1)
            }
        } else {
            return
        }
    }
    aux(1, N * 2)
    aux(1, N - 1)
    aux(1, N + 1)
    return visited[M]
}
/*
재귀로 구현했기 때문에 시간복잡도가 많이 높다. 또한 M이 100000이 들어왔을때는 처리하지 못한다.
*/
