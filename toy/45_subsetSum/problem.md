문제
자연수의 집합(set)과 자연수(bound)를 입력받아 아래의 조건을 만족하는 가장 큰 수를 리턴해야 합니다.

- 집합의 요소를 최대 한번씩만 더해서 만들어야 한다.
- `bound`를 넘지 않아야 한다.
입력
인자 1: set
자연수를 요소로 갖는 배열
인자 2: bound
number 타입의 자연수 (bound <= 300)
출력
number 타입을 리턴해야 합니다.
주의사항
조건을 만족하는 조합이 없는 경우, 0을 리턴해야 합니다.
입출력 예시
let output = subsetSum([1, 8, 3, 15], 10);
console.log(output); // --> 9 (= 1 + 8)

output = subsetSum([20, 80, 99, 27, 35], 100);
console.log(output); // --> 100 (= 20 + 80)

output = subsetSum([10, 20, 15, 25, 30], 5);
console.log(output); // --> 0