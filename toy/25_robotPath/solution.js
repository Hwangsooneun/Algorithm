// 테스트 100%
const robotPath = function (room, src, dst) {
  const R = room.length;
  const C = room[0].length;
  const isValid = (r, c) => r >= 0 && r < R && c >= 0 && c < C
  const aux = (candi, step) => {
    const [row, col] = candi;
    if (!isValid(row, col)) return

    if (room[row][col] === 0 || room[row][col] > step) {
      room[row][col] = step;
    } else {
      return;
    }
    aux([row + 1, col], step + 1); // 상
    aux([row - 1, col], step + 1); // 하
    aux([row, col - 1], step + 1); // 좌
    aux([row, col + 1], step + 1); // 우
  };
  aux(src, 0);
  const [r, c] = dst;
  return room[r][c];
};
/*
dfs
*/