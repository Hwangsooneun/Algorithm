// 테스트 100%
function solution(word) {
    var answer = 0;
    let table = ['A', 'E', 'I', 'O', 'U']
    let op = 781
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (table[j] === word[i]) {
                answer += 1 + j * op;
            }
        }
        op = (op - 1) / 5;
    }
    return answer;
}