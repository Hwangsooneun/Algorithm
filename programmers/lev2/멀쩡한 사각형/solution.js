// 테스트 100%
function gcd(M, N) {
    return (M % N) === 0? N : gcd(N, M % N)
}
function solution(w, h) {
    return (w * h) - (w + h - gcd(w, h))
}
/*
O(N)
직사각형에 대각선을 그으면 대각선이 지나가게 되는 단위 정사각형은 각 변을 w, h이라고 할때 공식은 w + h - (w와h의 최대공약수)이다.
*/