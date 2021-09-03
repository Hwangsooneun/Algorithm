// 테스트 100%
function solution(numbers) {
    return numbers.map((el) => {
        let num = '0' + el.toString(2);
        if (num[num.length - 1] === '0') {
            return el + 1
        }
        for (let i = num.length - 1; i >= 0; i--) {
            if (num[i] === '0') {
                return parseInt(num.slice(0, i) + '1' + '0' + num.slice(i + 2).toString(10), 2)
            }
        }
    })
}
/*
'10'(2) => '11'(3)
2진법일때 마지막 인덱스의 값이 0일때 1을 넣어주면 1개가 다른것이고, 10진법 숫자는 원래 숫자에서 +1이 된다.
나머지는 제일 끝에 있는 1을 0으로 바꿔주고, 그 인덱스의 앞의 수는 1을 만들어주면 2진법일때 2개 이하의 다른값을 갖게 된다.
*/