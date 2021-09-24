// 테스트 100% 효율성 100%
function solution(n) {
    let answer = 0
    while (n > 0) {
        if (n % 2 !== 0) {
            n--
            answer++
        } else {
            n /= 2
        }
    }
    return answer
}
/*
ex) 5000일 경우 
5000 / 2 = 1250, 625 - 1 answer = 1
624 / 2 = 312, 156, 78, 39 - 1  answer = 2
38 / 2 = 19 - 1                 answer = 3
18 / 2 = 9 - 1                  answer = 4
8 / 2 = 4, 2, 1 - 1             answer = 5
*/