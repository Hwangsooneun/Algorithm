// 테스트 100%
function solution(record) {
    var answer = [];
    let nameInfo = {};
    for (let i = 0; i < record.length; i++) {
        record[i] = record[i].split(' ');
        if (record[i][0] !== 'Leave') {
            nameInfo[record[i][1]] = record[i][2];
        }
    }
    for (let i = 0; i < record.length; i++) {
        if (record[i][0] !== 'Change') {
            if (record[i][0] === 'Enter') {
                answer.push(`${nameInfo[record[i][1]]}님이 들어왔습니다.`)
            } else {
                answer.push(`${nameInfo[record[i][1]]}님이 나갔습니다.`)
            }
        }
    }
    return answer;
}
/*
O(N)
객체를 사용하면 문제가 아주 쉬워진다.
*/