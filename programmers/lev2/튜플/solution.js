// 테스트 통과 100%
function solution(s) {
    var obj = {};
    let numArr = [];
    let result = [];
    s = s.replace(/{/g, '').replace(/}/g, '').split(',')
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]] = obj[s[i]] + 1
        } else {
            obj[s[i]] = 1
            numArr.push([s[i]])
        }
    }
    for (let i = 0; i < numArr.length; i++) {
        numArr[i][1] = obj[numArr[i]]
    }
    numArr.sort((a, b) => b[1] - a[1])
    numArr.map(el => result.push(Number(el[0])))
    return result
}
/*
프로젝트를 진행하면서 데이터관리에 힘쓴 보람을 느꼈다.
*/