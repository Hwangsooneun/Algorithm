문제
외판원 문제(travelling salesman problem, 이하 TSP)는 아래와 같이 정의됩니다.

여러 도시들의 위치가 주어졌을 때, 모든 도시들을 단 한번씩 방문하는 최단 거리를 구하세요.
각 도시의 위치를 나타내는 좌표평면 위의 점들을 입력받아, TSP의 최단 거리를 리턴해야 합니다.

입력
인자 1: places
배열을 요소로 갖는 배열
places[i]는 number 타입을 요소로 갖는 배열
places[i].length는 2
places[i]의 요소는 차례대로 좌표평면 위의 y좌표, x좌표
출력
number 타입을 리턴해야 합니다.
주의사항
외판원이 출발하는 도시와 도착해야 하는 도시는 정해져 있지 않습니다. 모든 도시를 빠짐없이 한번씩 방문하는 경로 중 최단 거리를 리턴해야 합니다.
두 점 사이의 거리를 계산하는 함수 calculateDistance가 주어집니다. 도시 간 거리는 반드시 이 함수를 이용해서 계산해야 합니다.
함수 calculateDistance는 소수점 계산을 피하기 위해 두 점 사이의 거리에 100을 곱한 후 정수 부분만 취합니다. 최단 거리도 이 기준으로 판단합니다.
입출력 예시
let placesToVisit = [
  [0, 0],
  [1, 1],
  [1, 3],
  [2, 2],
];
let output = TSP(placesToVisit);
console.log(output); // --> 423
// 방문 순서: [0, 0], [1, 1], [2, 2], [1, 3]

placesToVisit = [
  [0, 0],
  [3, 3],
  [-3, 3],
  [2, 3],
  [1, 3],
];
output = TSP(placesToVisit);
console.log(output); // --> 940
// 방문 순서: [-3, 3], [1, 3], [2, 3], [3, 3], [0, 0]
