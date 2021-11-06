// 테스트 100%
const getMaxNumber = (signs, numTable) => {
  let max = '';
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === '>') {
      max += String(numTable.pop())
    } else {
      let count = 1;
      for (let j = i + 1; j < signs.length; j++) {
        if (signs[j] === '<') count++
        else break
      }
      max += String(numTable.splice(numTable.length - 1 - count, 1))
    }
  }
  max += numTable.pop()
  return max
}

const getMinNumber = (signs, numTable) => {
  let min = '';
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === '<') {
      min += String(numTable.shift())
    } else {
      let count = 1;
      for (let j = i + 1; j < signs.length; j++) {
        if (signs[j] === '>') count++
        else break
      }
      min += String(numTable.splice(count, 1))
    }
  }
  min += numTable.shift()
  return min
}

const inequalityNumber = function (signs) {
  signs = signs.split(' ')
  let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const answer = getMaxNumber(signs, number.slice()) - getMinNumber(signs, number.slice())
  return answer
}
/*
1. 숫자는 0-9까지 총 10개의 숫자를 사용해서 등호에 맞는 가장 큰 숫자, 작은 숫자를 만들어야
   하기때문에 number의 테이블을 만들어준다.
2. 가장 큰 숫자, 작은 숫자를 만드는 모듈을 만든다
 2-1. 탐색을하며 뒷 숫자보다 뒤에 계속 올 숫자보다 크거나(큰 숫자 모듈), 작아야(작은 숫자 모듈)
      등호가 성립하는 경우를 고려해준다. (같은 등호가 연속될 경우)
3. 등호가 성립하는 큰 숫자애 작은 숫자를 뺀 값을 리턴.
*/