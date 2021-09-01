// 테스트 100%
function solution(nums) {
    var answer = 0;
    let len = nums.length / 2; // 반이상 가져갈 수 있어서 미리 계산
    let table = [];
    for (let i = 0; i < nums.length; i++) {
        if (table.indexOf(nums[i]) === -1) {
            table.push(nums[i]); // 테이블에 없을 경우 넣어준다(중복방지)
            answer++ // 이프문 통과할경우 뽑았기때문에++
        }
    }
    if (answer > len) answer = len // 포켓몬을 반이상 뽑았을때 반만 뽑게 만들어줌
    return answer;
}