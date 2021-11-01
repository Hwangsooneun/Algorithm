// 테스트 100%
function createGraphByList(num, edges) { // 무방향이므로 양방향으로 간선끼리 연결시켜줌
  const _edges = [0];
  for (let i = 1; i <= num; i++) _edges[i] = {};
  edges.forEach(([src, dst, weight]) => {
    _edges[src][dst] = weight;
    _edges[dst][src] = weight;
  });
  return _edges;
}

function Dijkstra(num, edges, start, end) {
  const map = createGraphByList(num, edges)
  let dist = new Array(num + 1).fill(Number.MAX_SAFE_INTEGER)
  let stack = [[start, 0]]
  dist[start] = 0
  while (stack.length) {
    let [next, time] = stack.pop();
    for (let i in map[next]) {
      if (dist[Number(i)] > dist[next] + map[next][i]) {
        dist[Number(i)] = dist[next] + map[next][i];
        stack.push([Number(i), map[next][i]]);
      }
    }
  }
  return dist[end]
}
/*
1. 주어진 정점들은 무방향이므로 양쪽으로 연결시켜 준다.
2. input값의 start에서 시작해 각 정점까지의 최단거리를 표시한 배열을 만든다(다익스트라 알고리즘)
3. 각정점의 최단거리를 표시한 배열의 end번째를 리턴한다.
*/