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
      // let end = Number(r) + Number(len)
      // for (let i = r; i < end; i++) {
      //   for (let j = c; j < end; j++) {
      //     if (image[i][j] !== curNum) {
      //       check = false;
      //       break
      //     }
      //   }
      // }
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
  