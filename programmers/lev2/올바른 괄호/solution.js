// 테스트 100% 효율성 100%
function solution(s) {
    let stack = [];
    if (s[0] === ')' || s.length % 2 !== 0) return false
    else stack.push(s[0])
    for (let i = 1; i < s.length; i++) {
        if (stack[stack.length - 1] === '(' && s[i] === ')') {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0;
}
/*
s[0]이 ')'이거나 s의 길이가 짝수가 아니면 올바른 괄호가 아니다.
괄호가 짝을 만났을때 없애주고 그렇지 않은경우 스택에 넣어둔다.
탐색이 끝났을때 stack이 0일때는 올바른 괄호, 그렇지 않으면 올바르지 않은 괄호이다.
*/