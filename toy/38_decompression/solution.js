// 런타임
const decompression = function (image) {
    let answer = '';
    const aux = (len, location) => {
      const [r, c] = location
      let curNum = image[r][c]
      if (len === 1) {
        answer += String(curNum)
        return
      }
      let check = true
      let half = len / 2
      let pressNum = String(curNum).repeat(len)
      let compare = image[r].slice(c, c + len).join('')
      if (pressNum === compare) {
        for (let i = 1; i < len; i++) {
          if (image[r + i].slice(c, c + len).join('') !== pressNum) {
            check = false
            break
          }
        }
      } else {
          check = false
      }
      if (check) {
        answer += String(curNum)
        return
      } else {
        answer += 'X'
      }
      aux(half, [r, c])
      aux(half, [r, c + half])
      aux(half, [r + half, c])
      aux(half, [r + half, c + half])
    }
    aux(image.length, [0, 0])
    return answer
  };
  // refactoring
  const decompression = function (image) {
    const aux = (len, location) => {
      const [r, c] = location
      let curNum = image[r][c]
      if (len === 1) {
        return String(curNum)
      }
      let half = len / 2

      let leftUp = aux(half, [r, c])
      let rightUp = aux(half, [r, c + half])
      let leftDown = aux(half, [r + half, c])
      let rightDown = aux(half, [r + half, c + half])

      let result = leftUp + rightUp + leftDown + rightDown
      if (result === '1111') return '1'
      else if (result === '0000') return '0'
      else return 'X' + result
    }
    return aux(image.length, [0, 0])
  };
