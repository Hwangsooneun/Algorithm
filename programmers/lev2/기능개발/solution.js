// 테스트 100% max 0.73ms
function solution(progresses, speeds) {
    var answer = [];
    while (progresses.length) {
        if (progresses[0] >= 100) {
            for (let i = 0; i < progresses.length; i++) {
                if (progresses[i] >= 100 && progresses[i + 1] < 100 || !progresses[i + 1]) {
                    answer.push(i + 1)
                    progresses.splice(0, i + 1)
                    speeds.splice(0, i + 1)
                    break
                }
            }
        }
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i]
        }
    }
    return answer;
}
// refactoring max 0.10ms
function solution(progresses, speeds) {
    let answer = [0]
    let days = []
    for (let i = 0; i < progresses.length; i++) {
        days.push(Math.ceil((100 - progresses[i]) / speeds[i])) // 100%가 되거나 100%를 넘겨야하기 때문에 올림해준다.
    }
    let comDay = days[0]
    for (let i = 0; i < days.length; i++) {
        if (days[i] <= comDay) { // 완료되는 시간이 더 작으면 함께 배포될 수 있는 기술이다.
            answer[answer.length - 1]++
        } else {
            comDay = days[i]
            answer.push(1)
        }
    }
    return answer
}
/*
쓸데없는 처리횟수를 줄이자.
*/