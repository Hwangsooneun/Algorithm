// 테스트 96.6%
function solution(line) {
    var answer = []
    let table = {};
    let xMax = Number.MIN_SAFE_INTEGER;
    let yMax = Number.MIN_SAFE_INTEGER;
    let xMin = Number.MAX_SAFE_INTEGER;
    let yMin = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < line.length; i++) {
        for (let j = i + 1; j < line.length; j++) {
            let denominator = (line[i][0] * line[j][1]) - (line[i][1] * line[j][0])
            if (denominator === 0) continue
            let x = ((line[i][1] * line[j][2]) - (line[i][2] * line[j][1])) / denominator
            let y = ((line[i][2] * line[j][0]) - (line[i][0] * line[j][2])) / denominator
            if (x % 1 === 0 && y % 1 === 0) {
                if (!table[String(x) + String(y)]) {
                    table[String(x) + String(y)] = 1
                    if (xMax < x) xMax = x
                    if (yMax < y) yMax = y
                    if (xMin > x) xMin = x
                    if (yMin > y) yMin = y
                }
            }
        }
    }
    for (let i = yMax; i >= yMin; i--) {
        let candi = '';
        for (let j = xMin; j <= xMax; j++) {
            if (table[String(j) + String(i)]) {
                candi += '*'
            } else {
                candi += '.'
            }
        }
        answer.push(candi)
    }
    return answer
}
// refactoring
function solution(line) {
    var answer = []
    let table = {};
    let xMax = Number.MIN_SAFE_INTEGER;
    let yMax = Number.MIN_SAFE_INTEGER;
    let xMin = Number.MAX_SAFE_INTEGER;
    let yMin = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < line.length; i++) {
        let [A, B, E] = line[i]
        for (let j = i + 1; j < line.length; j++) {
            let [C, D, F] = line[j]
            let denominator = A * D - B * C
            if (denominator === 0) continue
            let x = (B * F - E * D) / denominator
            let y = (E * C - A * F) / denominator
            if (x % 1 === 0 && y % 1 === 0) {
                if (!table[String(x) + ',' + String(y)]) {
                    table[String(x) + ',' + String(y)] = 1
                    if (xMax < x) xMax = x
                    if (yMax < y) yMax = y
                    if (xMin > x) xMin = x
                    if (yMin > y) yMin = y
                }
            }
        }
    }
    for (let i = yMax; i >= yMin; i--) {
        let candi = '';
        for (let j = xMin; j <= xMax; j++) {
            if (table[String(j) + ',' + String(i)]) {
                candi += '*'
            } else {
                candi += '.'
            }
        }
        answer.push(candi)
    }
    return answer
}
/*
금일 제출된 문제.
테스트 케이스 5번이 통과하지 않는데, 반례를 찾기가 힘들다.
리팩토링
객체에 x, y를 저장할때 구분선이 없어서 엄한곳에 별을 찍는것 때문에
5번 테스트를 통과하지 못한 것이었다. 조금더 꼼꼼한 코드작성이 필요.
*/