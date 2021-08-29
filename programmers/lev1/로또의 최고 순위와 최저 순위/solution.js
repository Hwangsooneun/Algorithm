// 테스트 100%
function solution(lottos, win_nums) {
    var answer = [];
    let table = [1, 2, 3, 4, 5, 6, 6] // 등수 배열
    let win = 6; // 등수 배열 인덱스 렝쓰
    let count = 0
    for (let i = 0; i < lottos.length; i++) { // 알아볼 수 없는 번호 갯수 찾기
        if (lottos[i] === 0) {
            count++
        }
    }
    for (let i = 0; i < lottos.length; i++) {
        for (let j = 0; j < lottos.length; j++) {
            if (lottos[i] === win_nums[j]) {
                win-- // 내로또가 당첨로또랑 같으면 등수가 올라가야하기때문에 6(등수 배열 인덱스)에서 계속 --해줌
            }
        }
    }
    answer.push(table[win - count]); // 알아볼 수 없는 번호포함 등수
    answer.push(table[win])          // 알아볼 수 없는 번호 뺀 등수
    return answer;
}