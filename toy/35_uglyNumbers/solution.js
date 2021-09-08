// 테스트 100%
const uglyNumbers = function (n) {
    let uglyNums = [1]
    let idx2 = 0 , idx3 = 0, idx5 = 0;
    for (let i = 0; i < n; i++) {
        let op2 = uglyNums[idx2] * 2
        let op3 = uglyNums[idx3] * 3
        let op5 = uglyNums[idx5] * 5
        let min = Math.min(op2, op3, op5);
        // 중복방지 + 오름차순 정렬
        uglyNums.push(min)
        if (min === op2) idx2++
        if (min === op3) idx3++
        if (min === op5) idx5++
        // 다음연산 준비, 중복일 경우에도 처리.
    }
    return uglyNums[n - 1]
};
/*
O(N)
*/