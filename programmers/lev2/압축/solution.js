// 테스트 100%
function solution(msg) {
    var answer = []
    let alpha = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
    alpha.unshift(0)
    let candi = '';
    let maxStr = '';
    let maxRange = 1
    for (let i = 0; i < msg.length; i++) {
        candi += msg[i]
        let idx = alpha.indexOf(msg[i])
        let maxIdx = -1
        let candiIdx = alpha.indexOf(candi)
        if (candiIdx === -1 && candi.length > 1) {
            if (candi.length > maxRange) {
                maxRange = candi.length
                alpha.push(candi)
            } else {
                alpha.push(candi)
            }
        }
        for (let j = maxRange; j > 1; j--) {
            maxIdx = alpha.indexOf(msg.slice(i, i + j))
            if (maxIdx !== -1) {
                maxStr = msg.slice(i, i + j)
                break
            }
        }
        if (maxIdx !== -1) {
            answer.push(maxIdx)
            candi = maxStr
            i += maxStr.length - 1
        } else {
            answer.push(idx)
            candi = msg[i]
        }
    }
    return answer;
}
// refactoring
function solution(msg) {
    var answer = []
    let map = {}
    let alpha = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
    for (let i = 1; i <= alpha.length; i++) {
        map[alpha[i - 1]] = i
    }
    let candi = '';
    let maxStr = '';
    let maxRange = 1
    let x = 27
    for (let i = 0; i < msg.length; i++) {
        candi += msg[i]
        let idx = map[msg[i]]
        let maxIdx = undefined
        let candiIdx = map[candi]
        if (candiIdx === undefined && candi.length > 1) {
            if (candi.length > maxRange) {
                maxRange = candi.length
                map[candi] = x++
            } else {
                map[candi] = x++
            }
        }
        for (let j = maxRange; j > 1; j--) {
            maxIdx = map[msg.slice(i, i + j)]
            if (maxIdx !== undefined) {
                maxStr = msg.slice(i, i + j)
                break
            }
        }
        if (maxIdx !== undefined) {
            answer.push(maxIdx)
            candi = maxStr
            i += maxStr.length - 1
        } else {
            answer.push(idx)
            candi = msg[i]
        }
    }
    return answer;
}
/*
처음엔 indexOf메서드를 많이 안쓸거라 생각했지만
디버깅과정에서 꽤 많이 써야한다는 것을 알게되었다.
따라서 객체를 이용해 indexOf를 쓰지 않는 방향으로
리팩토링하니 확실히 좋은 퍼포먼스를 가져다 준다.
*/