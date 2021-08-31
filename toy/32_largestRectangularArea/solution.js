// stack solution 테스트 100%
const largestRectangularArea = function (histogram) {
    let stack = [];
    let max = 0;
    let h = 0;
    let w = 0;
    for (let i = 0; i <= histogram.length; i++) {
      while (stack.length && (i === histogram.length || histogram[i] <= histogram[stack[stack.length - 1]])) {
        let idx = stack.pop()
        h = histogram[idx]; // 저장된 인덱스를 꺼내와 높으로 변환하고
        w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1; // 해당 높이가 몇번 지속됐는지를 알 수 있음.
        max = Math.max(max, h * w);
      }
      stack.push(i); // 인덱스 저장
    }
    return max;
};
/*
O(N)
stack solution같은 경우는 할 일들을 stack안에 넣어두고 특정 상황에 그 일들을 수행하도록 설계한다고
생각하면 접근이 쉬워지는것 같다.
*/