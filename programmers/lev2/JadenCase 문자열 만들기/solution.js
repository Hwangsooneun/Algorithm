// 테스트 100%
function solution(s) {
    var answer = ''
    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            // 이거 없애고
            answer += s[i].toUpperCase()
        } else {
            if (s[i - 1] === ' ') {
                // if (i === 0 || s[i - 1] === ' ') 로 바꾸는게 코드가 더 간단해 보인다.
                answer += s[i].toUpperCase()
            } else {
                answer += s[i].toLowerCase()
            }
        }
    }
    return answer;
}
/*
쉬운문젠데.. 점수 너무많이준다 6점.. 어이가 없다
*/