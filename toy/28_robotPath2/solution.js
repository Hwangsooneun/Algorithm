// 테스트 케이스 7, 8 미통과
const robotPath2 = function (room, src, sDir, dst, dDir) {
    let R = room.length;
    let C = room[0].length;
    const MOVES = [
    [1, -1, 0], // UP
    [2, 0, 1], // RIGHT
    [3, 1, 0], // DOWN
    [4, 0, -1], // LEFT
    ];
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (src[0] === i && src[1] === j) {
          room[i][j] = 's'
        } else if (room[i][j] === 1) {
          room[i][j] = 'x'
        }
      }
    }
    const isValid = (row, col) => {
      if (row >= 0 && row < R && col >= 0 && col < C && room[row][col] !== 'x' && room[row][col] !== 's') {
        return true
      } else {
        return false
      }
    }
    const rotate = (curR, nextR) => {
      let rot = 0
      if (curR > nextR) {
        rot = curR - nextR
        if (rot > 2) {
          rot = 1
        }
      } else {
        rot = nextR - curR
        if (rot > 2) {
          rot = 1
        }
      }
      return rot
    }
    const aux = (loc, dir, count, ndir) => {
      const [nextDir, nextR, nextC] = ndir;
      let r = loc[0] + nextR
      let c = loc[1] + nextC
      let rot = 0
      if (isValid(r, c)) {
        if (dir !== nextDir) {
          count++
          rot = rotate(dir, nextDir)
        }
      } else {
        return
      }
      count += rot
      if (room[r][c] !== 0) {
        if (room[r][c] > count) {
          room[r][c] = count
        } else {
          return
        }
      } else {
        room[r][c] = count
      }
      dir = nextDir
      if (r === dst[0] && c === dst[1]) {
        let result = rotate(dir, dDir)
        count += result
        room[r][c] = count
      }
      aux([r, c], dir, count, MOVES[0]);
      aux([r, c], dir, count, MOVES[1]);
      aux([r, c], dir, count, MOVES[2]);
      aux([r, c], dir, count, MOVES[3]);
    };
    aux(src, sDir, 0, MOVES[0]);
    aux(src, sDir, 0, MOVES[1]);
    aux(src, sDir, 0, MOVES[2]);
    aux(src, sDir, 0, MOVES[3]);
    const [r, c] = dst;
    return room[r][c]
  };
  /*
  리팩토링 예정.
  */