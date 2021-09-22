// 테스트 100%
function solution(N, road, K) {
    var answer = 0;
    let map = [0]
    for (let i = 1; i <= N; i++) {
        map.push({})
        map[i][i] = 0
        for (let j = 0; j < road.length; j++) {
            if (road[j][0] === i) {
                if (map[i][road[j][1]] && map[i][road[j][1]] > road[j][2]) {
                    map[i][road[j][1]] = road[j][2]    
                } else if (map[i][road[j][1]] === undefined) {
                    map[i][road[j][1]] = road[j][2]
                }
            }
            if (road[j][1] === i) {
                if (map[i][road[j][0]] && map[i][road[j][0]] > road[j][2]) {
                    map[i][road[j][0]] = road[j][2]    
                } else if (map[i][road[j][0]] === undefined) {
                    map[i][road[j][0]] = road[j][2]
                }
            }
        }
    }
    let dist = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER)
    let stack = [[1, 0]]
    dist[1] = 0
    while (stack.length) {
        let [next, time] = stack.pop();
        for (let i in map[next]) {
            if (dist[Number(i)] > dist[next] + map[next][i]) {
                dist[Number(i)] = dist[next] + map[next][i];
                stack.push([Number(i), map[next][i]]);
            }
        }
    }
    dist.map((el) => {
        if (el <= K) answer++
    })
    return answer;
}
/*
그래프의 최단거리를 구하는 문제.
1. road에 나와있는 각 정점간 걸리는 최소시간을 map에 저장한다.
2. 1번정점에서 각 정점까지 걸리는 시간을 구하는 것이기 때문에 1번에 빈 정점들을 구해준다.
3. road의 정보로 1번에 저장된 연결된 정점들을 탐색하며 나머지 정점과의 최소시간을 구할 수 있다.
*/