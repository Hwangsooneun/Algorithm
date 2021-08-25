// queue solution
function policeChase(N, M) {
    const visit = Array(100000).fill(0);
  
    const queue = [[N, 0]];
    while(queue.length) {
        const [current, depth] = queue.shift();
        if(visit[current]) continue;
  
        visit[current] = 1;
  
        if (current === M) return depth;
        if (current * 2 <= 100000) queue.push([current * 2, depth + 1]);
        if (current + 1 <= 100000) queue.push([current + 1, depth + 1]);
        if (current - 1 >= 0) queue.push([current - 1, depth + 1]);
    }
}
/*
queue에 가능한 테스크만 하나식 저장해서 탐색.
100,000이 들어와도 작동함.
*/