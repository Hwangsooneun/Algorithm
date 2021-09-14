// 테스트 100%
function calculateDistance(p1, p2) {
    const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
    const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
    const dist = Math.sqrt(yDiffSquared + xDiffSquared);
    return dist
  }
  
  const closestPairOfPoints = function (points) {
    let min = 9999999999
    let idx = 0;
    let stack = []
    while (idx < points.length) {
      let target = points[idx]
      let clone = points.slice(idx + 1)
      for (let i = 0; i < clone.length; i++) {
        let a = Math.abs(target[0] - clone[i][0])
        let b = Math.abs(target[1] - clone[i][1])
        if (a + b < min) {
          stack = [target, clone[i]]
          min = a + b
        }
      }
      idx++
    }
    let [p1, p2] = stack
    return Math.round(calculateDistance(p1, p2) * 100)
  };
/*
최소거리는 points[i]와 points[j]에서 각각의 row와 col의 차이가 가장 작은 두 포인트가
가장 짧은 거리에 있을것이라 생각했다.
테스트는 통과가 다 되었지만 효율적이지는 못하다. 퍼포먼스 자체가
레퍼런스코드랑 차이가 많이 남.
*/