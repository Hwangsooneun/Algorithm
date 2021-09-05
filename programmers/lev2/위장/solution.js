// 테스트 100%
function solution(clothes) {
    var answer = 1;
    let obj = {};
    for (let i = 0; i < clothes.length; i++) {
        if (obj[clothes[i][1]]) {
            obj[clothes[i][1]]++
        } else {
            obj[clothes[i][1]] = 2
        }
    }
    for (let key in obj) {
        answer *= obj[key]
    }
    return answer - 1
}
/*
중복되는 옷은 입을 수 없기 때문에 각 부위의 옷을 하나식 입었을때를 고려해서 부위마다 +1
부위를 조합해서 입을 수 있는 옷은 일반 산수와 같다.
*/