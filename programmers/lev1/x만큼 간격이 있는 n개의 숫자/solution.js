// 테스트 통과 100%
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i)
    }
    return answer;
}
// O(N)