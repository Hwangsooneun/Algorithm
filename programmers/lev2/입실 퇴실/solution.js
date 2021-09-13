// 테스트 100%
function solution(enter, leave) {
    var answer = new Array(enter.length).fill(0);
    let room = [];
    const exit = (num) => {
        let idx = room.indexOf(num)
        if (idx !== -1) {
            room.splice(idx, 1)
            leave.shift()
            exit(leave[0])
        } else {
            return
        }
    }
    for (let i = 0; i < enter.length; i++) {
        let people = enter[i]
        answer[people - 1] = room.length
        room.push(people);
        for (let i = 0; i < room.length; i++) {
            if (room[i] !== people) answer[room[i] - 1]++
        }
        exit(leave[0])
    }
    return answer;
}
/*
O(NlogM)
나가는 함수 모듈화가 모든걸 다한다.
*/