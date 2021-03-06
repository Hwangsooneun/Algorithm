문제
무방향 그래프의 한 정점(vertex)에서 다른 정점까지의 최단 거리를 리턴해야 합니다.

입력
인자 1: num
number 타입의 자연수
그래프에 존재하는 정점의 개수
정점은 1부터 num까지 존재
인자 2: edges
배열(간선에 대한 정보)을 요소로 갖는 배열
edges[i]는 number 타입을 요소로 갖는 배열
edges[i].length는 3
edges[i]의 요소는 차례대로 정점, 정점, 거리
edges[i][2]은 100 이하의 양의 정수
[1, 2, 3]은 1번 정점과 2번 정점 사이의 거리가 양방향 모두 3임을 의미함
인자 3: start
number 타입의 출발 정점
인자 4: end
number 타입의 도착 정점
출력
number 타입을 리턴해야 합니다.
주의사항
최단 경로의 길이를 리턴해야 합니다.
다익스트라 알고리즘을 구현해야 합니다.
다익스트라 알고리즘을 직접 생각해내긴 어렵기 때문에 바로 학습하시기 바랍니다.
정점들은 서로 양뱡향으로 연결되어 있습니다(무방향 그래프).
입출력 예시
let num = 4;
let edges = [
  [1, 2, 6],
  [1, 3, 2],
  [2, 3, 3],
  [2, 4, 1],
  [3, 4, 5],
];
let start = 1;
let end = 4;
let output = Dijkstra(num, edges, start, end);
console.log(output); // --> 6 (1 - 3 - 2 - 4)

num = 7;
edges = [
  [1, 3, 100],
  [1, 2, 3],
  [1, 4, 4],
  [4, 3, 3],
  [4, 5, 8],
  [5, 6, 10],
  [2, 7, 9],
  [5, 7, 50],
];
start = 1;
end = 7;
output = Dijkstra(num, edges, start, end);
console.log(output); // --> 12 (1 - 2 - 7)
Advanced
최단 경로의 길이 대신 최단 경로를 리턴하도록 구현해 보세요. 테스트 코드는 따로 제공하지 않습니다.
정점의 수에 비해 간선의 수가 작은 경우, 그래프를 연결 리스트로 구현하고 우선순위 큐(priority queue)를 이용해 보다 효율적인 알고리즘 구현이 가능합니다. 우선순위 큐는 이진 힙(heap)을 통해 구현할 수 있습니다. 레퍼런스 코드는 따로 제공하지 않습니다.