// 그래프 구현이 필요없는 알고리즘: O(V * E)
// V는 정점의 개수, E는 간선의 개수
function BellmanFord(num, edges, start) {
  const INF = Number.MAX_SAFE_INTEGER;
  const dist = Array(num + 1).fill(INF);
  dist[start] = 0;

  for (let v = 1; v <= num - 1; v++) {
    edges.forEach((e) => {
      const [src, dst, weight] = e;
      // 최단경로의 부분 경로 역시 최단경로이다.
      // dist[dst], 즉 start에서 dst까지의 최단 경로는
      //  1) 중간에 거쳐서 갈 수 있는 경로가 존재하고 (dist[src] !== INF)
      //  2) 그 경로를 통해서 가는 방법이 보다 짧으면,
      //     즉 start에서 src까지 갔다가 (dist[src]), src에서 dst까지 가는 (weight) 방법이 더 짧으면,
      // 해당 방법으로 갱신(update)한다.
      if (dist[src] !== INF && dist[src] + weight < dist[dst]) {
        dist[dst] = dist[src] + weight;
      }
    });
  }

  // 음의 사이클이 존재하는지 확인하고
  // 존재하면 빈 배열을 리턴한다.
  const hasNegCycle = edges.some((e) => {
    const [src, dst, weight] = e;
    if (dist[src] !== INF && dist[src] + weight < dist[dst]) {
      return true;
    }
  });

  return hasNegCycle ? [] : dist.slice(1);
}