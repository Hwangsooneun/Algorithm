// 완전탐색 테스트 60%
const rangeMinimum = function (arr, ranges) {
    return ranges.map(el => {
      let [x, y] = el;
      return Math.min(...arr.slice(x, y + 1))
    })
}
// refactoring 테스트 80%
const rangeMinimum = function (arr, ranges) {
    return ranges.map(el => {
      let [x, y] = el;
      let min = 9999999999
      for (let i = x; i <= y; i++) {
        if (arr[i] < min) min = arr[i]
      }
      return min
    })
}
  // 3,2,7,9 => 2
  // 1,3,2,7 => 1
/*
구간이 정해져있고 정해진 구간별 가장 작은수를 리턴하는 문제
Math메서드도 탐색이 이루어진다고 봐야하기 때문에 퍼포먼스가 좋지 못함.
구간이 정해져 있을 경우 반복문이 더 나은 퍼포먼스를 보여줌.
*/