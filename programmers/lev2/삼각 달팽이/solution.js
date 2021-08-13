// 테스트 100%
function solution(n) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        answer.push([]);
    }
    let count = 0;
    let x = -1;
    let y = 0;
    while (n > 0) {
        for (let i = 0; i < n; i++) {
            x++;
            count++;
            answer[x][y] = count;
        }
        for (let i = 0; i < n - 1; i++) {
            y++;
            count++;
            answer[x][y] = count;
        }
        for (let i = 0; i < n - 2; i++) {
            x--;
            y--;
            count++;
            answer[x][y] = count;
        }
        n -= 3;
    }
    return answer.flat();
}
/*
O(N^2)의 시간복잡도를 가지고있는데 어떻게하면 O(N)으로 만들 수 있는지 아이디어가 안떠오른다.
*/