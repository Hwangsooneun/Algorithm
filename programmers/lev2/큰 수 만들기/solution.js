// Greedy 테스트 100%
function solution(number, k) {
    var answer = '';
    let arr = [];
    for (let i = 0; i < number.length; i++) {
        answer = number[i];
        while (k > 0 && answer > arr[arr.length - 1]) {
            arr.pop()
            k--
            if (k === 0) return arr.join('') + number.slice(i) // k가 0이면 더이상 제거할 수가 없기 때문에 바로 리턴한다.
        }
        arr.push(answer)
    }
    arr.splice(arr.length - k, k) // 테스트12, ex) "1000", 1과 같은 값이 입력되었을때에는 이미 가장 큰 수라서 모든 문자가 배열에 담겨지기 때문에 꼬리를 잘라준다.
    answer = arr.join('')
    return answer
}
/*
O(N^2)
*/