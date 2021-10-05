// 테스트 100%
function solution(n,a,b) {
    let answer = 0
    while (true) {
        if (a === b) return answer
        a = Math.ceil(a / 2)
        b = Math.ceil(b / 2)
        answer++
    }
}
/*
경기는 2명이서 하므로 a와 b를 2로 나눈뒤 올림을 하면
해당 경기의 대진 순서가 나오게 된다.
경기의 팀이 같아진다면 a와 b가 만나게 된 것이므로
answer를 리턴한다.
*/