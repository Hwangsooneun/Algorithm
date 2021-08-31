문제
정수를 요소로 갖는 배열과 특정 구간을 입력받아, 해당 구간 내에서 최소값을 리턴해야 합니다.

입력
인자 1 : arr
number 타입을 요소로 갖는 배열
arr.length는 500,000 이하
arr[i]는 -100,000 이상 100,000 이하의 정수
인자 2 : ranges
number 타입을 요소로 갖는 배열
ranges.length는 10,000 이하
ranges[i]는 특정 구간을 의미
ranges[i][0]은 i번째 구간의 시작 인덱스
ranges[i][1]은 i번째 구간의 마지막 인덱스
출력
배열(arr)를 리턴해야 합니다. (입출력 예시 참고)
arr[i]는 i번째 구간(ranges[i])의 최소값
입출력 예시
const arr = [1, 3, 2, 7, 9, 11];
const mins = rangeMinimum(arr, [
  [1, 4],
  [0, 3],
]);
console.log(mins); // --> [2, 1]