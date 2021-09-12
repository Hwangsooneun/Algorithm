// 테스트 100%
function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow
    for (let i = 3; i < brown / 2; i++) {
        if (sum % i === 0) {
            let width = sum / i
            if ((width - 2) * (i - 2) === yellow) {
                answer.push(width, i)
                break
            }
        }    
    }
    return answer
}