// 테스트 100%
function solution(n, left, right) {
    var answer = [];
    let len = right + 1 - left
    while (answer.length < len) {
        if (left < n) {
            answer.push(left + 1)
            left++
        } else {
            let row = parseInt(left / n)
            let col = left % n
            if (row >= col) {
                answer.push(row + 1)
                left++
            } else {
                let op = col - row
                answer.push(row + 1 + op)
                left++
            }
        }
    }
    return answer
}
/*
1. 매트릭스를 만들어서 행, 열을 기준으로 반복문을 돌며 해당 인덱스 + 1의 값을 찍는다
2. flat(2)함수를 통해 2차원배열을 풀어주고 left에서 right까지 값을 리턴한다.
// 런타임아웃 실패.
1. left를 n으로 나눠줌으로써 해당 row값을 얻는다.
2. row값이 col값보다 크면 해당 row에 해당하는 숫자를 찍어준다
3. 그이상이면 row와 col의 차이를 row에 더해 숫자를 찍어준다.
*/