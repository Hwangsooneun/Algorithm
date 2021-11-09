// 테스트 80%
function findAbbreviation(strA, strB) {
  strA = strA.split('');
  let arr = new Array(strA.length).fill(false)
  let idx = 0;
  let check;
  for (let i = 0; i < strB.length; i++) {
    check = false
    for (let j = idx; j < strA.length; j++) {
      if (strB[i] === strA[j].toUpperCase()) {
        arr[j] = i
        idx = j
        check = true
        break
      }
    }
    if (!check) return false
  }
  let curIdx = 0
  let exe1
  while (arr.length > strB.length) {
    exe1 = false
    for (let i = curIdx; i < arr.length; i++) {
      if (arr[i] !== false && strB[arr[i]] !== strA[i]) {
        curIdx = i
        strA[i] = strA[i].toUpperCase()
        exe1 = true
        break
      }
    }
    if (!exe1) break
    let exe2 = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === false) {
        arr.splice(i, 1)
        strA.splice(i, 1)
        exe2 = true
        break
      }
    }
    if (!exe2) return false
  }
  while (arr.length > strB.length) {
    let exe3 = false;
    let exe4 = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === false && strA[i] !== strA[i].toUpperCase()) {
        strA[i] = strA[i].toUpperCase()
        exe3 = true
        break
      }
    }
    if (!exe3) break
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === false) {
        arr.splice(i, 1)
        strA.splice(i, 1)
        exe4 = true
        break
      }
    }
    if (!exe4) break
  }
  return strA.join('') === strB
}
/*
1. 먼저 strA가 strB의 문자를 가지고 있는지 체크하며 인덱스를 메모한다.
2. strA가 strB와 같은 문자열(대문자)가 되기 위한 exe1, 2를 실행한 후
   같은문자가 전부 대문자로 변환되면 반복문을 빠져나온다.
3. strA의 필요없는 문자열들이 남아있을 수 있기 떄문에 exe3, 4를 실행하며
   혹여 두 실행중 하나라도 실행할 수 없을 경우 반복문을 종료한다.

 - 정교한 코드를 작성하지 못한듯. 리팩토링 예정.
*/