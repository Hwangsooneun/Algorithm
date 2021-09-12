// 정확성 100% 효율성 0%
function solution(info, query) {
    var answer = new Array(query.length).fill(0)
    info = info.map((el) => {
        return el.split(' ')
    })
    query = query.map((el, idx) => {
        el = el.split(' and ')
        let temp = el.pop()
        el.push(...temp.split(' '))
        return el
    })
    let idx = 0
    while (idx < query.length) {
        for (let i = 0; i < info.length; i++) {
            let cnt = 0;
            for (let j = 0; j < info[i].length; j++) {
                if (j === 4) {
                    if (Number(query[idx][j]) <= Number(info[i][j])) cnt++
                    else {
                        break
                    }
                } else {
                    if (query[idx][j] !== '-') {
                        if (query[idx][j] === info[i][j]) cnt++
                        else {
                            break
                        }
                    } else {
                        cnt++
                    }
                }
            }
            if (cnt === 5) answer[idx]++
        }
        idx++
    }
    return answer;
}