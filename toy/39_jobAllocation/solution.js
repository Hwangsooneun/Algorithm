const jobAllocation = function (jobs, wokersNum) {
    let answer = []
    const aux = (arr, num, result) => {
      if (num === 1) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i]
        }
        result.push(sum)
        answer.push(result)
        return
      }
      let max = arr.length - (num - 1)
      let sum = 0
      for (let i = 0; i < max; i++) {
        sum += arr[i]
        result[wokersNum - num] = sum
        aux(arr.slice(i + 1), num - 1, result.slice())
      }
    }
    aux(jobs, wokersNum, [])
    return Math.min(...answer.map((el) => el = Math.max(...el)))
  };
/*
어떻게 줄여야 할까.. 내가생각한 테스트 케이스는 통과하지만 시간복잡도문제로
wokersNum이 1000가까히 갈때는 에러가 뜬다.
리팩토링 예정.
*/