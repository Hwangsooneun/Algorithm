function score(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] 
    }
    sum = sum / arr.length
    if (sum >= 90) {
        return 'A'
    } else if (sum >= 80) {
        return 'B'
    } else if (sum >= 70) {
        return 'C'
    } else if(sum >= 50) {
        return 'D'
    } else {
        return 'F'
    }
}
function solution(scores) {
    let answer = ''
    for (let i = 0; i < scores.length; i++) {
        let result = ''
        let sumArr = []
        for (let j = 0; j < scores.length; j++) {
            sumArr.push(scores[j][i])
        }
        let max = Math.max(...sumArr)
        let min = Math.min(...sumArr)
        let myScore = sumArr[i]
        if (myScore === max || myScore === min) {
            sumArr.splice(i, 1)
            if (sumArr.includes(myScore)) {
                sumArr.push(myScore)
            }
        }
        result = score(sumArr)
        answer = answer + result
    }
    return answer
}