// 테스트 100%
function solution(n, wires) {
    let min = Number.MAX_SAFE_INTEGER
    const connect = (arr, aMap, bMap) => {
        let queue = []
        for (let i = 0; i < arr.length; i++) {
            let [l, r] = arr[i]
            if (aMap[l] || aMap[r]) {
                aMap[l] = 1, aMap[r] = 1
            } else if (bMap[l] || bMap[r]) {
                bMap[r] = 1, bMap[l] = 1
            } else {
                queue.push(arr[i])
            }
        }
        if (queue.length) {
            connect(queue, aMap, bMap)
        }
        let aCount = Object.values(aMap)
        let bCount = Object.values(bMap)
        return Math.abs(aCount.length - bCount.length)
    }
    for (let i = 0; i < wires.length; i++) {
        let [a, b] = wires[i]
        let front = wires.slice(0, i)
        let back = wires.slice(i + 1)
        let aMap = {}
        let bMap = {}
        aMap[a] = 1, bMap[b] = 1
        let result = connect(front.concat(back), aMap, bMap)
        if (min > result) min = result
    }
    return min;
}
/*
끊을 대상을 제외하고 연결시킨 후
전력망 개수의 차이를 구한다.
*/