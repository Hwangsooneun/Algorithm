// 테스트 100%
const robotPath2 = function (room, src, sDir, dst, dDir) {
    let R = room.length;
    let C = room[0].length;
    const MOVES = [
    [1, -1, 0],
    [2, 0, 1],
    [3, 1, 0],
    [4, 0, -1],
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
    const rotate = (curD, nextD) => {
      let rot = 0
      rot = Math.abs(curD - nextD)
      if (rot > 2) {
        rot = 1
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
      if (count === 0 && dir === nextDir) { // 현재 방향과, 나갈 방향이 같고, 첫걸음이라면 1을 더해줘야 한다.
        count++
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
      if (r === dst[0] && c === dst[1]) {
        let result = rotate(nextDir, dDir)
        count += result
        room[r][c] = count
      }
      aux([r, c], nextDir, count, MOVES[0]);
      aux([r, c], nextDir, count, MOVES[1]);
      aux([r, c], nextDir, count, MOVES[2]);
      aux([r, c], nextDir, count, MOVES[3]);
    };
    aux(src, sDir, 0, MOVES[0]);
    aux(src, sDir, 0, MOVES[1]);
    aux(src, sDir, 0, MOVES[2]);
    aux(src, sDir, 0, MOVES[3]);
    const [r, c] = dst;
    return room[r][c]
  };
  /*
  O(N^2)
  스택, 큐 보다는 재귀를 자주 쓰게 되는 것 같다.
  중간에 논리가 조금 부족해 테스트를 전부 통과하지 못했지만 결국 해결했다.
  */