// refactoring 함수 내에서 자기자신을 호출하는 재귀함수가 조금더 나은 결과를 가져온다. 쓸데 없는 코드는 버려야 함
const isPair = (str) => {
    return str[0] === '(' ? true : false
}
const check = (str) => {
    let u = '';
    let v = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count += str[i] === '(' ? 1 : -1
        if (count === 0) {
            u = str.slice(0, i + 1)
            v = str.slice(u.length)
            break
        }
    }
    return [u, v]
}
function solution(p) {
    if (p === '') return p
    let str = ''
    let [u, v] = check(p);
    if (isPair(u)) {
        str += u
        if (v !== undefined) {
            return str += solution(v)
        } 
    } else {
        str += `(${solution(v)})`
        u = u.slice(1, u.length - 1)
        for (let i = 0; i < u.length; i++) {
            str += u[i] === '(' ? ')' : '('
        }
        return str
    }
    return solution(p)
}