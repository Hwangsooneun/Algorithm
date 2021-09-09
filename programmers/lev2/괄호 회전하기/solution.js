// 테스트 100%
function solution(s) {
    var answer = 0;
    const isPair = (arr) => {
        let stack = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === ')' || arr[i] === '}' || arr[i] === ']') {
                if (arr[i] === ')' && stack[stack.length - 1] === '(') stack.pop()
                if (arr[i] === '}' && stack[stack.length - 1] === '{') stack.pop()
                if (arr[i] === ']' && stack[stack.length - 1] === '[') stack.pop()
            } else {
                stack.push(arr[i])
            }
        }
        if (stack.length !== 0) {
            return false
        } else {
            return true
        }
    }
    s = s.split('')
    for (let i = 0; i < s.length - 1; i++) {
        if (isPair(s)) answer++
        let temp = s.shift()
        s.push(temp)
    }
    return answer
}