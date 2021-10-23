// 테스트 100%
const subsetSum = function (set, bound) {
    let memo = new Array(set.length).fill(0).map((el) => el = new Array(bound + 1).fill(false))
    let max = 0
    for (let i = 0; i < set.length; i++) {
        for (let j = 0; j < memo[i].length; j++) {
            if (j === 0 || i === 0 && set[i] === j) {
                memo[i][j] = true;
                continue
            } else if (i === 0) continue
            if (set[i] > j) memo[i][j] = memo[i - 1][j];
            else if (memo[i - 1][j]) memo[i][j] = true;
            else memo[i][j] = memo[i - 1][j - set[i]]
            if (memo[i][j]) max = j > max ? j : max
        }
    }
    return max
};