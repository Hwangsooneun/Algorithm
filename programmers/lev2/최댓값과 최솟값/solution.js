// 테스트 100%
function solution(s) {
    s = s.split(' ').sort((a, b) => Number(a) - Number(b))
    return `${s[0]} ${s[s.length - 1]}`;
}