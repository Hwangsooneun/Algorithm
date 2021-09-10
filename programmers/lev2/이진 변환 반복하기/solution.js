// 테스트 100%
function solution(s) {
    var answer = [0, 0]
    const aux = (str) => {
        let delZero = str.replace(/['0']/g, '').length
        let next = delZero.toString(2)
        let zeroCnt = str.length - delZero
        answer[1] += zeroCnt
        answer[0]++
        if (next === '1') return
        aux(next)
    }
    aux(s)
    return answer
}
/*
O(N)
재귀로 구현했는데 while문으로도 구현 가능할것 같다.
쉬운문제.
*/