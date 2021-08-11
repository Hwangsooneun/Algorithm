// 통과 100%
function solution(n) {
    n = n.toString().split('');
    return n.reduce((a, b) => Number(a) + Number(b), 0)
}
/*
O(N)
*/