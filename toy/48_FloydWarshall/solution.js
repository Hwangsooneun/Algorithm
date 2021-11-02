function createGraphByList(num, edges) {
  const _edges = [0];
  for (let i = 1; i <= num; i++) _edges[i] = {};
  edges.forEach(([src, dst, weight]) => {
    _edges[src][dst] = weight;
  });
  return _edges;
}

function FloydWarshall(num, edges) {
  const map = createGraphByList(num, edges)
  let result = []
  for (let j = 1; j <= num; j++) {
    let dist = new Array(num + 1).fill(Number.MAX_SAFE_INTEGER)
    let stack = [[j, 0]]
    dist[j] = 0
    while (stack.length) {
      let [next, time] = stack.pop();
      for (let i in map[next]) {
        if (dist[i] > dist[next] + map[next][i]) {
          dist[i] = dist[next] + map[next][i];
          stack.push([i, map[next][i]]);
        }
      }
    }
    dist.shift()
    for (let i = 0; i < dist.length; i++) {
      if (dist[i] > 100) dist[i] = null
    }
    result.push(dist)
  }
  return result
}
/*
1. 방향성 그래프로 한방향으로만 표시한다.
2. 각 정점들이 다른정점으로 갈때의 최단 거리를 리턴해야되기 때문에
  다익스트라 알고리즘을 모든정점에 적용시켜 리턴한다.
3. 101이상의 거리는 유효하지 않기때문에 null로 바꾼 후 리턴.
*/