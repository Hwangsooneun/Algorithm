// Greedy 테스트 100%
function solution(n, lost, reserve) {
    var answer = 0;
    let idx = 0;
    let lost1 = lost.filter((a) => !reserve.includes(a))
    let reserve1 = reserve.filter((a) => !lost.includes(a)) // 여벌도난 카운트
    
    answer = n - lost1.length;
     
    for (let i = 0; i < lost1.length; i++) {
        let min = lost1[i] - 1
        let max = lost1[i] + 1
        let idx1 = reserve1.indexOf(min);
        let idx2 = reserve1.indexOf(max);
        if (idx2 !== -1) {
            reserve1.splice(idx2, 1);
            answer++
        } else if (idx1 !== -1) {
            reserve1.splice(idx1, 1);
            answer++
        }
    }
    return answer;
}
/*
n	lost	reserve	return
5	[2, 4]	[1, 3, 5]	5
[1,2,3,4,5] // 2,4 잃어버림
[1,3,5] // [1,3,5] 여분있음
- 여분있는 친구들이 도난당했을 수 있음
 => reserve에서 뺴고 lost에서 빼준다.
*/