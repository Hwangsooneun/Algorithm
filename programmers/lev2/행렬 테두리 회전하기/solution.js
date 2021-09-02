// stack solution 테스트 100%
function solution(rows, columns, queries) {
    var answer = [];
    let matrix = new Array(rows * columns).fill(0)
    const rotate = (querie) => {
        let [x1, y1, x2, y2] = querie
        x1--, y1--, x2--, y2--;
        let queue = [];
        for (let i = y1; i < y2; i++) {
            let idx = x1 * columns + i
            if (matrix[idx] === 0) {
                queue.push(idx + 1)
            } else {
                queue.push(matrix[idx])
            }
        }
        for (let i = x1; i < x2; i++) {
            let idx = i * columns + y2
            if (matrix[idx] === 0) {
                queue.push(idx + 1)
            } else {
                queue.push(matrix[idx])
            }
        }
        for (let i = y2; i > y1; i--) {
            let idx = x2 * columns + i
            if (matrix[idx] === 0) {
                queue.push(idx + 1)
            } else {
                queue.push(matrix[idx])
            }
        }
        for (let i = x2; i > x1; i--) {
            let idx = i * columns + y1
            if (matrix[idx] === 0) {
                queue.push(idx + 1)
            } else {
                queue.push(matrix[idx])
            }
        }
        answer.push(Math.min(...queue))
        let temp = queue.pop()
        queue.unshift(temp)
        for (let i = y1; i < y2; i++) {
            let idx = x1 * columns + i
            matrix[idx] = queue.shift()
        }
        for (let i = x1; i < x2; i++) {
            let idx = i * columns + y2
            matrix[idx] = queue.shift()
        }
        for (let i = y2; i > y1; i--) {
            let idx = x2 * columns + i
            matrix[idx] = queue.shift()
        }
        for (let i = x2; i > x1; i--) {
            let idx = i * columns + y1
            matrix[idx] = queue.shift()
        }
    }
    queries.map((el) => rotate(el))
    return answer
}
/*
증가하는 matrix를 만드는데 시간복잡도가 늘어난다 생각하여
배열을 r * c로 만들어 놓고 index값으로 계산해서 변화된 값을 알게 만들었다.
퍼포먼스는 증가하는 matrix를 만드는것과 별반 차이없다.
구지 반복문을 줄이려는 노력보다는 효율적인 구도를 생각해야 한다.
*/