// 테스트 100%
function BellmanFord(num, edges, start) {
  const dist = new Array(num + 1).fill(101);
  dist[start] = 0

  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < edges.length; j++) {
      const [from, to, weight] = edges[j]
      if (dist[to] > dist[from] + weight) {
        dist[to] = dist[from] + weight
      }
    }
  }
  for (let i = 0; i < edges.length; i++) {
    const [from, to, weight] = edges[i];
    if (dist[to] > dist[from] + weight) {
      return []
    }
  }
  return dist.slice(1)
}
/*
1. 방향성 그래프이기 때문에 정점별로 최단거리를 구해준다.
2. 음수의 싸이클이 존재할 수 있기 떄문에 주어진 정점들의 정보를 탐색하며
   결과값의 거리가 계속 -가 되는 경우에는 빈 배열을 리턴한다.
벨만포드는 기본적으로 O(V * E)의 시간복잡도를 가지고 있으므로,
다익스트라 + 힙 O(V * LogV)보다는 높은 시간복잡도를 가지고 있다.
다만 음수의 가중치가 존재할 경우에는 다익스트라를 사용할 수 없으므로
벨만포드를 사용한다.
*/