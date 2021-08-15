const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(line[i]);
      matrix.push(row);
    });
    return matrix;
  };
  
  const gossipProtocol = function (village, row, col) {
    // bfs 구현을 위해 큐를 선언한다.
    // enQueue, deQueue시마다 인덱싱을 다시 하지 않기 위해
    // 순환 큐(circular queue)로 구현한다.
    // queue의 가능한 최대 크기만큼 배열을 선언한다.
    // 문제의 특성에 따라 큐에는 좌표 평면의 한 점이 삽입되고, 한번 삽입된 요소는 두 번 다시 삽입되지 않는다.
    const R = village.length;
    const C = village[0].length;
    const matrix = createMatrix(village);
    const MOVES = [
      [-1, 0], // UP
      [1, 0], // DOWN
      [0, 1], // RIGHT
      [0, -1], // LEFT
    ];
    const MAX_SIZE = R * C; // 가능한 모든 좌표의 크기만큼 큐가 선언되었으므로, 사실 순환큐일 필요는 없다.
    const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;
    const queue = Array(MAX_SIZE);
    let front = 0;
    let rear = 0;
    const isEmpty = (queue) => front === rear;
    const enQueue = (queue, pos) => {
      // 실행 중에 큐가 가득차지는 않기 때문에 별도의 조건문을 작성할 필요가 없다.
      queue[rear] = pos;
      // 모듈러스 연산을 할 필요도 사실 없다.
      rear = (rear + 1) % MAX_SIZE;
    };
    const deQueue = (queue) => {
      const pos = queue[front];
      // 모듈러스 연산을 할 필요도 사실 없다.
      front = (front + 1) % MAX_SIZE;
      return pos;
    };
  
    let cnt = 0;
    enQueue(queue, [row, col]);
    // 소문이 퍼지는 데 걸리는 시간을 저장한다.
    matrix[row][col] = 0;
    while (isEmpty(queue) === false) {
      // 큐의 가장 앞 자리의 좌표를 얻는다.
      const [row, col] = deQueue(queue);
      cnt = matrix[row][col];
  
      // 현재 지점을 기준으로 네 방향을 검토한다.
      MOVES.forEach((move) => {
        const [rDiff, cDiff] = move;
        const nextRow = row + rDiff;
        const nextCol = col + cDiff;
        if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === '1') {
          enQueue(queue, [nextRow, nextCol]);
          matrix[nextRow][nextCol] = matrix[row][col] + 1;
        }
      });
    }
    return cnt;
  };