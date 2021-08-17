// 테스트 100%
function solution(numbers, hand) {
    var answer = '';
    let l = [1, 4, 7, 10];
    let r = [3, 6, 9, 12];
    let m = [2, 5, 8, 11];
    let ltemp = 10;
    let rtemp = 12;
    let lidx = 3;
    let ridx = 3;
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (num === 0) num = 11
        if (l.indexOf(num) !== -1) {
            answer += 'L'
            lidx = l.indexOf(num);
            ltemp = num;
        } else if (r.indexOf(num) !== -1) {
            answer += 'R'
            ridx = r.indexOf(num);
            rtemp = num;
        } else if (m.includes(num)) {
            let midx = m.indexOf(num);
            let ld = lidx > midx ? lidx - midx : midx - lidx;
            let rd = ridx > midx ? ridx - midx : midx - ridx;
            if (!m.includes(ltemp)) ld++;
            if (!m.includes(rtemp)) rd++;
            if (ld > rd) {
                answer += 'R';
                rtemp = num;
                ridx = midx;
            } else if (ld < rd) {
                answer += 'L';
                ltemp = num;
                lidx = midx;
            } else if (ld === rd) {
                if (hand === 'left') {
                    answer += 'L';
                    ltemp = num;
                    lidx = midx;
                } else if (hand === 'right') {
                    answer += 'R';
                    rtemp = num;
                    ridx = midx;
                }
            }
        }
    }
    return answer;
}
/*
O(N)
중앙에 있는 숫자를 누를때 왼손에서 중앙숫자까지 가는 거리,
오른손에서 중앙숫자까지 가는 거리를 구해서 가까운 손으로 중앙숫자를 누르게하고,
같을때는 hand의 'left', 'right'에 따라 눌러주면 되는 간단한 문제다. 추가로 왼손의 *을 10,
오른손의 #을 12로 만들어 이동거리를 구할 수 있게 만들어 줬다. 하지만 190줄이 넘는 코드를 썻었고,
13번부터 20번의 테스트케이스는 통과하지 못했었다. 수많은 조건문을 써도 통과하지 못하는 것은
부족한 논리때문이었다. "엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은
거리로 1에 해당합니다." 문제를 차분히 다시읽어보니 놓친 부분이 있었다. 문제에 답이있다. 차분히 진행하자.
*/