// 테스트 100%
const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b)
  sample.sort((a, b) => a - b)

  let idx = 0;
  let include;
  for (let i = 0; i < sample.length; i++) {
    include = false
    for (let j = idx; j < base.length; j++) {
      if (sample[i] === base[j]) {
        idx = j
        include = true
        break
      }
    }
    if (!include) return false
  }
  return include
};
/*
1. 이미 확인한 인덱스는 확인을 하지 않기 위해 숫자를 오름차순으로 정렬해준다.
2. sample의 숫자가 base에 있는지 확인한다.
 2-1. 숫자가 존재한다면 base에서 확인했던 인덱스를 저장해서 이미 확인한 숫자를 다시 확인하지 않게 해준다.
 2-2. base를 탐색했지만 존재하지 않는다면 false를 리턴.
3. sample의 탐색이 끝난다면 존재하는지 확인하는 변수 include를 리턴.
*/