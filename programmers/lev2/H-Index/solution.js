// 테스트 100%
function solution(citations) {
    let max = 0
    citations.sort((a, b) => b - a)
    for (let i = 0; i < citations.length; i++) {
        let min = Math.min(citations[i], i + 1);
        if (max < min) max = min;
        else break;
    }
    return max;
}
/*
문제를 이해하는데 시간이 한참걸린것 같다.
citations[i]의 인용된 횟수와 citations[i]이상 인용된 논문의 갯수를 비교해서
최소값이 전체 논문의 최대값을 가지는 값이 H-Index이다.
*/