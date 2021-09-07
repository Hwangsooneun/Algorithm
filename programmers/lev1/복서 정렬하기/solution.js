// 테스트 100%
function solution(weights, head2head) {
    let answer = weights.map((el, idx) => {
        el = [0, 0, el, idx + 1]
        return el
    })
    for (let i = 0; i < head2head.length; i++) {
        let count = 0
        for (let j = 0; j < head2head[i].length; j++) {
            if (head2head[i][j] === 'W') {
                answer[i][0]++
                count++
                if (answer[i][2] < answer[j][2]) answer[i][1]++
            }
            if (head2head[i][j] === 'L') count++

            if (j === answer.length - 1) {
                if (count === 0) {
                    answer[i][0] = 0
                } else {
                    answer[i][0] = answer[i][0] / count * 100
                }
            }
        }
    }
    answer.sort((a, b) => {
        if (a[0] === b[0]) {
            if (a[1] === b[1]) {
                if (a[2] === b[2]) {
                    return a[3] - b[3]
                } else {
                    return b[2] - a[2]
                }
            } else {
                return b[1] - a[1]
            }
        } else {
            return b[0] - a[0]
        }
    })
    return answer.map((el) => el[3]);
}
/*
가끔 문제를 보다가 '아 그렇구나'하며 더이상 문제를 안보고 코드부터 작성할때가 있다.
그것때문에 문제를 제대로이해하지 못한 상태에서 풀다보니 시간이 오래걸렸고.. 결국 다시 문제를 정독했다.
*/