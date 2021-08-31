// queue solution 테스트 100%
function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    let bridge = []
    let len = truck_weights.length
    let path = 0;
    while (len > path) {
        answer++
        if (truck_weights[0] <= weight) {
            weight -= truck_weights[0]
            let truck = truck_weights.shift()
            bridge.push([truck, 1])
        }
        let count = 0
        for (let i = 0; i < bridge.length; i++) {
            if (bridge[i][1] === bridge_length) {
                count++
            } else {
                bridge[i][1] += 1
            }
        }
        if (count !== 0) {
            weight += bridge[0][0]
            bridge.shift()
            path++
        }
    }
    return answer;
}
// refactoring
function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    let bridge = []
    let len = truck_weights.length
    let path = 0;
    while (len > path) {
        answer++
        if (truck_weights[0] <= weight) {
            weight -= truck_weights[0]
            let truck = truck_weights.shift()
            bridge.push([truck, answer])
        }
        if (bridge_length - 1 === answer - bridge[0][1]) {
            weight += bridge[0][0]
            bridge.shift()
            path++
        }
    }
    return answer;
}
/*
O(N)
다리를 건너는 트럭마다의 시간을 체크하려고 반복문을 하나 더 사용해서 시간복잡도가 늘어났지만
사실 1분에 트럭 1대만 나갈 수 있기 때문에 반복문을 구지 쓸 필요는 없다. 0번째 인덱스의 트럭만 체크하고,
트럭이 다리에 들어설때는 몇분인지 카운팅하는 변수를 할당해주면 간단히 해결 가능하다.
*/