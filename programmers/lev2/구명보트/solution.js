// 테스트 100% 효율성 0%
function solution(people, limit) {
    var answer = 0;
    while (people.length > 0) {
        let boat = people.shift()
        let max = [boat, -1]
        let cnt = 1
        for (let i = 0; i < people.length; i++) {
            if (limit >= boat + people[i]) {
                if (max[0] < boat + people[i]) {
                    max[0] = boat + people[i]
                    max[1] = i
                }
            }
        }
        answer++
        if (max[1] !== -1) {
            people = people.slice(0, max[1]).concat(people.slice(max[1] + 1))
        }

    }
    return answer;
}
// 정확성 100% 효율성 100%
function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a - b)
    while (people.length > 0) {
        if (people[0] + people[people.length - 1] <= limit) {
            people.shift()
            people.pop()
        } else {
            people.pop()
        }
        answer++
    }
    return answer;
}
/*
정렬을 하지않고 몸무게의 최대합을 태워보내는 것으로 구현했지만 최대합을 탐색하는 과정에서 시간복잡도가
많이 증가했다.
오름차순으로 정렬후 첫번째 인덱스와 마지막 인덱스의 무게가 limit와 같거나 작으면 보트에 태워보내면된다.
*/