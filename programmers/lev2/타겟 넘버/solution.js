// dfs solution 테스트 100%
function solution(numbers, target) {
    var answer = 0;
    const aux = (idx, result, op) => {
        let curNum = numbers[idx]
        if (op === 'plus') {
            result += curNum
        } else {
            result -= curNum
        }
        if (idx === numbers.length - 1) {
            if (result === target) {
                answer++
                return
            }
            return
        }
        aux(idx + 1, result, 'plus')
        aux(idx + 1, result, 'minus')
    }
    aux(0, 0, 'minus')
    aux(0, 0, 'plus')
    return answer;
}
/*
dfs는 이제 점점 익숙해지는것 같다. 비슷한 템플릿을 자주 써먹게 된다.
*/