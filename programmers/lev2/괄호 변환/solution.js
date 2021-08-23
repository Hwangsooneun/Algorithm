// 테스트 100%
function solution(p) {
    const isPair = (str) => { // 시작이 '(' 이면 무조건 정상적인 괄호이다.
        return str[0] === '(' ? true : false
    }
    const check = (str) => { // 정상적인 부분과 아닌부분을 나눔
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
    const aux = (str) => {
        if (!str.length) return '';
        let [u, v] = check(str);
        if (isPair(u)) {
            return u + aux(v)
        } else {
            let temp = u.slice(1, u.length - 1)
            u = '';
            for (let i = 0; i < temp.length; i++) {
                u += temp[i] === '(' ? ')' : '('
            }
            return `(${aux(v)})${u}`; 
        }
    }
    return aux(p)
}
/*
나름 자신있는 재귀문제에서 힘들었다.
*/


