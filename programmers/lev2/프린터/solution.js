// 스택/큐 solution 테스트 100%
function solution(priorities, location) {
    var answer = 0;
    priorities[location] = priorities[location].toString();
    while (priorities.length) {
        let result = true;
        let target = priorities[0];
        priorities.shift()
        for (let item of priorities) {
            if (item > target) {
                priorities.push(target);
                result = false;
                break;
            }
        }
        
        if (result === false) {
            continue;   
        } else {
            answer++;
        }

        if (typeof target === "string") return answer;
    }
    return answer;
}
/*
스택/큐를 활용하여 먼저 알아봐야하는 중요도를 string으로 만들어서 target이 string일때 프린트한 횟수를 리턴한다.
O(N^2)의 시간복잡도를 가지고 있는데, O(N)으로 리팩토링 예정.
*/