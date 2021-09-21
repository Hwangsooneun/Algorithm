// 테스트 100% 효율성 100%
function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1) answer++
    }
    return answer;
}
/*
자연수 n을 만드는 연속된 숫자는 의 경우는
n의 약수중 홀수의 개수와 같다.
*/