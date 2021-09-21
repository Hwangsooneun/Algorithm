// 테스트 0%
function solution(land) {
    var answer = [];
    const aux = (sum, floor) => {
        if (floor === land.length) {
            answer.push(sum[1])
            return
        }
        for (let i = 0; i < 4; i++) {
            if (sum[0] !== i) {
                aux([i, sum[1] + land[floor][i]], floor + 1)
            }
        }
    }
    for (let i = 0; i < 4; i++) {
        aux([i, land[0][i]], 1)
    }

    return Math.max(...answer);
}
// refactoring
function solution(land) {
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            let max = 0
            for (let n = 0; n < 4; n++) {
                if (j !== n && max < land[i - 1][n]) max = land[i - 1][n]
            }
            land[i][j] += max
        }
    }
    return Math.max(...land[land.length - 1]);
}
/*
dp, memo
재귀적으로 모든경로를 체크하며 최대값을 리턴하는 솔루션은 비효율적으로 시간초과로 테스트를 통과하지 못한다.
메모이제이션을 활용하면 가능한 문제.
*/