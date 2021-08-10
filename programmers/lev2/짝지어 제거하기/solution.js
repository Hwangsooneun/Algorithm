// 재귀 & 정규표현식 solution
// 런타임에러, 효율성 통과x 35.3%
function solution(s) {
    let regex = /a{2}|b{2}|c{2}|d{2}|e{2}|f{2}|g{2}|h{2}|i{2}|j{2}|k{2}|l{2}|m{2}|n{2}|o{2}|p{2}|q{2}|r{2}|s{2}|t{2}|u{2}|v{2}|w{2}|x{2}|y{2}|z{2}/g
    function aux(str) {
        if (str.length === 0) {
            return 1
        }
        let newStr = str.replace(regex, '');
        if (str.length !== newStr.length) {
            return aux(newStr)
        } else {
            return 0
        }
    }
    return aux(s);
}
// 스택 solution
// 테스트, 효율성 통과 100%
function solution(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (arr[arr.length - 1] !== s[i]) {
            arr.push(s[i])
        } else {
            arr.pop()
        }
    }
    return arr.length === 0 ? 1 : 0
}
/*
문자열이 재귀함수를 통과할때 다 없어지거나 같은 문자를 출력할때 리턴한다는
간단한 생각으로 접근했지만 재귀와 정규표현식사용으로 시간복잡도가 높은 코드를 짜게 되었다.
퍼즐게임을 떠올리며 스택으로 다시 생각하니 쉽게 해결되는 문제였다.
*/