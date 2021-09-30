function solution(n, t, m, p) {
    var answer = '';
    let word = '';
    let start = 0
    while (word.length < t * m) {
        let temp = start.toString(n)
        word += temp.toUpperCase()
        start++
    }
    for (let i = p - 1; i < word.length; i += m) {
        answer += word[i]
    }
    return answer.slice(0, t);
}