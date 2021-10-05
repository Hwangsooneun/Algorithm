// 테스트 64%
function solution(relation) {
    var answer = 0;
    let done = {}
    let queue = []
    let result = []
    const overlap = (arr) => arr.length === [...new Set(arr)].length
    const tuple = (idx, range, arr) => {
       if (idx.length === range) {
           let candi = []
           for (let i = 0; i < relation.length; i++) {
               let str = ''
               for (let j = 0; j < idx.length; j++) {
                   str += relation[i][idx[j]] + ','
               }
               candi.push(str)
           }
           let check = true
           if (overlap(candi)) {
               done[idx[0]] = range
               console.log(idx)
               idx = idx.sort().join('')
               console.log(idx)
               if (done[idx]) return
               else {
                   done[idx] = range
                   answer++
                   result.push(idx)
               }
           } else {
               return
           }
       } else {
           for (let i = 0; i < arr.length; i++) {
               idx.push(arr[i])
               queue.push([idx.slice(), range + 1, arr.slice(i + 1)])
               tuple(idx.slice(), range, arr.slice(i + 1))
               idx.pop()
           }
        }
        if (!done[idx[0]] && arr.length >= range) {
            let [nextIdx, nextRange, nextArr] = queue.shift();
            tuple(nextIdx, nextRange, nextArr)
        }
    }
    let curIdx = 0
    while (curIdx < relation[0].length) {
        let candi = [];
        for (let i = 0; i < relation.length; i++) {
            candi.push(relation[i][curIdx] + ',')
        }
        if (overlap(candi)) {
            done[curIdx] = 1
            answer++
        }
        curIdx++
    }
    let table = []
    for (let i = 0; i < relation[0].length; i++) {
        if (!done[i]) table.push(i)
    }
    for (let i = 0; i < table.length; i++) {
        tuple([table[i]], 2, table.slice(i + 1))
    }
    for (let i = 0; i < result.length; i++) {
        let count = 1
        let regex = new RegExp(result[i])
        for (let j = 0; j < result.length; j++) {
            let candi = result[j].replace(regex, '')
            if (candi.length !== result[j].length) {
                count--
            }
        }
        if (count < 0) answer--
    }
    
    return answer;
}
// refactoring
function solution(relation) {
    var answer = 0;
    let combi = []
    const overlap = (arr) => arr.length === [...new Set(arr)].length
    const combination = (idxTable, range, arr) => {
       if (arr.length === range) {
           combi.push(arr)
       } else {
           for (let i = 0; i < idxTable.length; i++) {
               arr.push(idxTable[i])
               combination(idxTable.slice(i + 1), range, arr.slice())
               arr.pop()
           }
        }
    }
    let table = new Array(relation[0].length).fill(0).map((el, idx) => el = idx)
    for (let i = 0; i < relation[0].length; i++) {
        combination(table, i + 1, [])
    }
    while (combi.length) {
        let target = combi.shift();
        let candi = []
        for (let i = 0; i < relation.length; i++) {
            let str = '';
            for (let j = 0; j < target.length; j++) {
                str += relation[i][target[j]] + ','
            }
            candi.push(str)
        }
        if (overlap(candi)) {
            let nextCombi = []
            for (let i = 0; i < target.length; i++) {
                for (let j = 0; j < combi.length; j++) {
                    if (!combi[j].includes(target[i])) nextCombi.push(combi[j])
                }
            }
            answer++
            combi = nextCombi
        }
    }
    return answer;
}
/*
방향을 잘못잡아 푸는데 너무 오래걸렸다.
처음에 풀지 못한 원인은 시작 속성을 유일성을 체크하고 최소성을 바로 체크하기
때문에 모든 조합이 이루어지기 전에 최소성을 확인하게 되므로 풀지 못했다.
모든 인덱스의 조합들을 만들어 놓고, 최소성을 보장하는 첫번째 인덱스부터 탐색하며
전체적인 유일성을 체크 후, 조합들의 최소성을 보장하여 진행하였다.
일에는 순서가 있다.. 
*/