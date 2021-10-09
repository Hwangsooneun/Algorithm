// 테스트 100%
function solution(str1, str2) {
    var answer = 0;
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let regex = new RegExp(/[a-z]/g);
    const pair = (str) => {
        let candi = []
        for (let i = 0; i < str.length - 1; i++) {
            let pairStr = str[i] + str[i + 1]
            if (pairStr.replace(regex, '').length === 0) candi.push(pairStr)
            else continue
        }
        return candi
    }
    let str1Arr = pair(str1)
    let str2Arr = pair(str2)
    let sum = str1Arr.length + str2Arr.length
    let int = []
    for (let i = 0; i < str1Arr.length; i++) {
        let idx = str2Arr.indexOf(str1Arr[i])
        if (idx !== -1) {
            int.push(str1Arr[i])
            str2Arr = str2Arr.slice(0, idx).concat(str2Arr.slice(idx + 1))
        }
    }
    let divide = sum - int.length
    if (!int.length && sum === 0) {
        answer = 65536
    } else {
        answer = parseInt(int.length / divide * 65536)
    }
    return answer
}