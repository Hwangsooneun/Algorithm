// 테스트 100%
function solution(table, languages, preference) {
    var answer = [];
    // let langPrefer = {};
    // for (let i = 0; i < languages.length; i++) { 무분별한 객체사용은 금지.
    //     langPrefer[languages[i]] = preference[i]
    // }
    let pointArr = []
    let max = 0
    for (let i = 0; i < table.length; i++) {
        table[i] = table[i].split(' ');
        pointArr.push([table[i][0], 0])
        for (let j = 1; j < table[i].length; j++) {
            let point = 6 - j
            // if (langPrefer[table[i][j]]) {
            //     pointArr[i][1] = pointArr[i][1] + (langPrefer[table[i][j]] * point) 객체를 사용하니 복잡도가 증가한다.
            let idx = languages.indexOf(table[i][j]) // 객체를 사용하지 않고 선호도점수를 곱해주면 더 나은 결과가 나옴.
            if (idx >= 0) {
                pointArr[i][1] = pointArr[i][1] + (preference[idx] * point)
            } else {
                pointArr[i][1] = pointArr[i][1] + point
            }
            if (pointArr[i][1] > max) {
                max = pointArr[i][1]
            }
        }
    }
    for (let i = 0; i < pointArr.length; i++) {
        if (max === pointArr[i][1]) answer.push(pointArr[i][0])
    }
    answer.sort();
    return answer[0]
}
/*
문제를 풀때 객체의 편리함 때문에 무분별하게 객체를 이용해버린 케이스인것 같다.
좋은 퍼포먼스를 주지 못했기 때문에 객체를 이용하지 않는 solution이 나은 포퍼먼스를 가져왔다.
*/