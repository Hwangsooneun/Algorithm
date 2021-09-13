// 테스트 100%
function solution(s) {
    var answer = [];
    let count = 1;
    let stack = [];
    const aux = (cut, str, len) => {
        if (cut === str.slice(0, len)) {
            count++
            aux(cut, str.slice(len), len)
        } else {
            if (count > 1) {
                stack.push(String(count) + cut)
                count = 1
                if (str === '') return
                aux(str.slice(0, len), str.slice(len), len)
            } else {
                stack.push(cut)
                if (str === '') return
                aux(str.slice(0, len), str.slice(len), len)
            }
        }
    }
    if (s.length <= 1) return s.length
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        aux(s.slice(0, i), s.slice(i), i)
        answer.push(stack.join(''))
        stack = []
    }
    answer.sort((a, b) => a.length - b.length)
    return answer[0].length
}
/*
O(NlogM)
1. 재귀적 접근, 1개부터 ~ s.length / 2까지 재귀를 돌린다.
2. 재귀함수내에 반복문의 i와 자르려고 하는 숫자부터 자른다
3. 자른 숫자가 연속되는 숫자일경우 다시 재귀, 아니면 continue로 건너뛴다.
4. 1 ~ s.length / 2의 결과의 문자열을 배열에 넣고 length기준으로 오름차순 정렬한다.
5. 배열의 0번째 인덱스 리턴
*/