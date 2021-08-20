// 테스트 100%
function solution(arr) {
    let times = 1;
    let idx = 2;
    arr.sort((a, b) => b - a)
    function gcd(M, N) {
        return (M % N) === 0? N : gcd(N, M % N)
    }
    function lcm(M, N) {
        return M * N / gcd(M, N);
    }
    function lcmCheck(num, lcm) {
        if (lcm % num === 0) {
            return true
        } else {
            return false
        }
    }
    let preLcm = lcm(arr[1], arr[0]); // 큰 수 최소공배수 부터 구하면 반복횟수가 짧아진다.
    let currentLcm;
    while (idx < arr.length) {
        currentLcm = preLcm * times; // 현재 최소공배수
        if (lcmCheck(arr[idx], currentLcm)) {
            idx++
        } else {
            times++ // 탐색하는 값과 현재의 최소공배수가 맞지 않으면 * 1, 2, 3 늘려나가야 함.
            idx = 2
        }
    }
    return currentLcm
}
/*
O(N)
배열의 가장 큰 수부터 최소공배수를 구해 그 값으로 나머지와도 최소공배수가 맞는지 확인하면 되는 문제.
*/