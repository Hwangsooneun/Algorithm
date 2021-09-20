// 테스트 100%
function solution(n) {
    var answer = '';
    let bit = n.toString(2)
    let count = [0, 0]
    for (let i = bit.length - 1; i >= 0; i--) {
        if (bit[i] === '1' && (bit[i - 1] === '0' || bit[i - 1] === undefined)) {
            let front = bit.slice(0, bit[i - 1] === undefined ? 0 : i - 1);
            if (bit[bit.length - 1] === '0') answer = front + '10'+ '0'.repeat(count[0]) + '1'.repeat(count[1])
            else answer = front + '10' + '1'.repeat(count[1])
            break
        }
        count[Number(bit[i])]++  
    }
    return parseInt(answer.toString(10), 2)
}
/*
더 큰수여야하기 때문에 2진법의 제일끝이 0이면 1을넣으면 더 바로 다음 수가 되지만
1의 개수가 차이나기 때문에 조건을 만족시키기 위해서는 뒤에서부터 탐색을하고 1이 끝나는 지점에서
'01'이라면 '10'으로 바꿔준다. 또한 끝자리가 '0'인 수와 '1'인 수를 구분하고.
'0'이었을때는 그전 1들을 끝에서 부터 넣어줘야 하며 '1'일때는 있던 수대로 넣어주면 된다.
*/