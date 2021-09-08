// 테스트 100%, 효율성 0%
function solution(n) {
    var answer = ['1', '2', '4'];
    for (let i = 3; i < n; i++) {
        for (let j = 0; j < 3; j++) {
            answer.push(answer[i - 3] + answer[j])
        }
    }
    return answer[n - 1]
}

// 테스트, 효율성 100%
function solution(n) {
    var answer = '';
    let table = ['1', '2', '4'];
    for (let i = n; i > 0; i = Math.floor((i - 1) / 3)) {
        answer = table[(i - 1) % 3] + answer
    }
    return answer
}
/*
n을 3진법으로 변환했을때 0들어갔을때는 4로 변환된다.
ex) n = 6일때 (6 - 1) % 3 = 2, => table[2] = '4' + '' => (n - 1) / 3의 내림은 1
    n = 1 => (1 - 1) % 3 = 0, => table[0] = '1' + '4' => (n - 1) / 3 = 0 => return
*/