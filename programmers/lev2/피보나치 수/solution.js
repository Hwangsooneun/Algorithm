// dynamic with memoization: O(N) 테스트 13, 14 런타임에러
function solution(n) {
    const memo = [0, 1];
    const aux = (n) => {
        if (memo[n] !== undefined) return memo[n];
        memo[n] = (aux(n - 1) + aux(n - 2)) % 1234567;
        return memo[n];
    }
    return aux(n);
}
// for loop with memoization
function solution(n) {
    const memo = [0, 1];
    if (n < 2) return memo[n]
    for (let i = 2; i <= n; i++) {
        memo.push((memo[i - 1] + memo[i - 2]) % 1234567)
    }
    return memo[n]
}