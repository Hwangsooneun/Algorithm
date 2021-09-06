// 테스트 100%
const LIS = function (arr) {
    let lis = new Array(arr.length).fill(1)
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1
            }
        }
    }
    return Math.max(...lis)
};
/*
O(N^2)
각 인덱스에 해당하는 값의 최대lis를 메모하며 지금까지 탐색한 부분만 재탐색을 해준다.
=> 인덱스 값이 기록해둔 값보다 클때는 현재 인덱스의 값도 증가수열이기 때문에 탐색하고있는
최대lis에 1을 더한 값을 현재 인덱스에 메모한다.
*/
