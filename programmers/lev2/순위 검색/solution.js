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
// refactoring
function solution(info, query) {
    var answer = new Array(query.length).fill(0)
    let map = {}
    const combination = (point, arr, start) => {
        let str = arr.join('')
        if (map[str]) {
            map[str].push(point)
        } else {
            map[str] = [point]
        }
        for (let i = start; i < arr.length; i++) {
            let temp = arr.slice()
            temp[i] = '-'
            combination(point, temp, i + 1)
        }
    }
    for (let i = 0; i < info.length; i++) {
        let arr = info[i].split(' ')
        let point = +arr.pop()
        combination(point, arr, 0)
    }
    for (let el in map) {
        map[el].sort((a, b) => a - b)
    }
    for (let i = 0; i < query.length; i++) {
        let arr = query[i].split(' and ')
        let point = arr.pop()
        arr.push(...point.split(' '))
        point = +arr.pop()
        let str = arr.join('')
        let sortedArr = map[str]
        if (sortedArr) {
            let start = 0
            let end = sortedArr.length;
            while (start < end) {
                let mid = Math.floor((start + end) / 2);
                if (sortedArr[mid] >= point) {
                    end = mid
                } else if (sortedArr[mid] < point) {
                    start = mid + 1
                }
            }
            answer[i] = sortedArr.length - start
        }
    }
    return answer;
}
/*
info배열이 1이상 50000이하이기 때문에 query배열이 100만되도 최악의 경우 5000000번의
연산을 해야한다. 따라서 첫번째 solution에서는 효율성이 통과하지 못했다.
1. info에 있는 지원자의 정보들을 조합을 통해 query를 탐색할시 연산횟수를 줄인다.
2. info조합에는 중복일경우를 대비해 키의 값으로 배열을 만들고 배열에 지원자의 점수를 넣는다.
3. 이분탐색을 사용해서 효율적으로 점수조건에 맞는 지원자를 리턴하기 위해서 저장한 배열은 오름차순으로 정렬 해준다.
4. query를 map에 담은 key와 같은 형식으로 만들어주고, 값이 있을경우 조건에 맞는 점수를 이분탐색을 통해 리턴한다.
이분탐색을 사용하지 않고 내림차순하여 조건의 점수보다 작을경우는 탐색중단하는 로직으로 먼저
접근했었다. 다른로직은 같았지만 배열의 길이가 길고, 모두 조건에 일치한다면 배열의 길이를 전부
탐색해야하는 최악의 경우이기 때문에 효율성에서 다시 통과하지 못하는 결과를 낳았다. 간단히 생각했을때는
이분탐색과 큰차이가 없을것이라 생각하지만 최악의 경우를 생각하면 2배가 차이가 나므로 이분탐색을
적극 사용해야 한다.
*/