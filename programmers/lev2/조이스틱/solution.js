// 테스트 81%
function solution(name) {
    if (name.replace(/[A]/g, '').length === 0) return 0
    var answer = 0;
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let map = {}
    for (let i = 0; i < alpha.length; i++) {
        let location = alpha.indexOf(alpha[i])
        map[alpha[i]] = Math.min(location, 26 - location)
    }
    let maxA = 0;
    let maxRange = [0, 0]
    for (let i = 0; i < name.length; i++) {
        if (name[i] === "A") {
            for (let j = i + 1; j <= name.length; j++) {
                if (name[j] !== "A") break
                let range = name.slice(i, j + 1)
                if (range.replace(/[A]/g, '').length === 0 && range.length >= maxA) {
                    maxA = range.length
                    maxRange = [i, j]
                }
            }
        }
    }
    const [front, back] = maxRange
    if (front < name.length - 1 - back && front * 2 - 1 <= maxA + 1 && maxA > 1) {
        for (let i = 0; i < front; i++) {
            answer += map[name[i]]
        }
        answer += front * 2 - 1 - 1
        for (let i = back + 1; i < name.length; i++) {
            answer += map[name[i]]
            answer++
        }
    } else if (name.length - 1 - back < front && (name.length - 1 - back) * 2 <= maxA + 1 && maxA > 1) {
        for (let i = back + 1; i < name.length; i++) {
            answer += map[name[i]]
        }
        answer += (name.length - 1 - back) * 2
        for (let i = 0; i < front; i++) {
            answer += map[name[i]]
            answer++
        }
    } else {
        for (let i = 0; i < name.length; i++) {
            if (i === 1 && name[i] === 'A') {
                answer--
                for (let j = name.length - 1; j > 1; j--) {
                    answer += map[name[j]]
                }
                break
            }
            if (i === name.length - 1 && name[i] === 'A') answer--
            answer += map[name[i]]
        }
        return answer + name.length - 1;
    }
    return answer
}
/*
문제가 이상한가;;
*/