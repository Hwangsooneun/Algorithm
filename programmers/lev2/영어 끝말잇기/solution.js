// 테스트 100%
function solution(n, words) {
    var answer = [];
    let stack = [words.shift()];
    while (!answer.length) {
        let talk = words.shift()
        if (stack.includes(talk) ||
            stack[stack.length - 1][stack[stack.length - 1].length - 1] !== talk[0]) {
            let count = Math.ceil((stack.length + 1) / n)
            let who = Math.abs((count - 1) * n - (stack.length + 1))
            answer.push(who, count)
            break
        } else {
            stack.push(talk)
        }
        if (!words.length) answer = [0, 0]
    }
    return answer;
}
/*
1. 처음부터 탐색하며 전에 말한 끝자리와 지금말한 앞자리가 같은지 확인.
2. 그리고 지금 말한 단어가 stack에 쌓였는지 확인. 문제없으면 stack에 쌓음
3. 문제가 있다면 현재 진행되고있는 판수와 말한사람을 구해 리턴.
*/