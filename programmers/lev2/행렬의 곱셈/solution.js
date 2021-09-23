// 테스트 100%
function solution(arr1, arr2) {
    var answer = []
    for (let i = 0; i < arr1.length; i++) {
        let result = []
        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0
            for (let n = 0; n < arr2.length; n++) {
                sum += arr1[i][n] * arr2[n][j]
            }
            result.push(sum)
        }
        answer.push(result)
    }
    return answer;
}