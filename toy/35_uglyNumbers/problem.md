uglyNumbers
문제
아래와 같이 정의된 ugly numbers 중 n번째 수를 리턴해야 합니다.

ugly number는 2, 3, 5로만 나누어 떨어지는 수이다.
1은 1번째 ugly number 이다.
1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, ...
입력
인자 1 : n
number 타입의 자연수 (n >= 1)
출력
number 타입을 리턴해야 합니다.
주의사항
ugly numbers를 배열에 저장했을 때, n번째 ugly number의 위치는 인덱스 n-1 입니다.
입출력 예시
let result = uglyNumbers(1);
console.log(result); // --> 1

result = uglyNumbers(3);
console.log(result); // --> 3
Advanced
단순히 처음부터 끝까지 모든 수에 대해서 나눗셈 연산을 하는 대신 다른 방법(O(N))을 탐구해 보세요.

힌트
나눗셈 연산을 매번 다시 할 필요가 없습니다. ugly number에 2, 3 또는 5를 곱한 수 역시 ugly number 입니다.