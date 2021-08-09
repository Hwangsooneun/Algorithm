function solution(price, money, count) {
    let answer = 0
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        sum = sum + (price * i)
    }
    answer = money - sum
    if (answer < 0) {
        return -1 * answer
    } else {
        return 0
    }
}

// refactoring
function solution(price, money, count) {
    let answer = 0
    let sum = (1 + count) * count * price / 2; // 가우스 공식
    answer = money - sum
    // if (answer < 0) {
    //     return -1 * answer
    // } else {
    //     return 0
    // }
    return answer < 0 ? -1 * answer : 0
}