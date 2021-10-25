// 테스트 100%
function adventure(k, dungeons) {
    let count = 0
    for (let i = 0; i < dungeons.length; i++) {
        let [need, con] = dungeons[i]
        if (k >= need) {
            k -= con
            count++
        }
    }
    return count
}
function solution(k, dungeons) {
    var answer = 0;
    const getPermutations= function (arr, len) {
        const results = [];
        if (len === 1) return arr.map((el) => [el]);

        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
            const permutations = getPermutations(rest, len - 1);
            const attached = permutations.map((el) => [fixed, ...el]);
            results.push(...attached);
        });
        return results;
    }
    let candi = getPermutations(dungeons, dungeons.length)
    for (let i = 0; i < candi.length; i++) {
        let count = adventure(k, candi[i])
        if (count === dungeons.length) return count
        if (count > answer) {
            answer = count
        }
    }
    return answer;
}
// refactoring
function solution(k, dungeons) {
    var answer = 0;
    let filtered = dungeons.filter(el => el[0] <= k)
    let visited = new Array(filtered.length).fill(false)

    const dfs = (energy, cnt) => {
        for (let i = 0; i < filtered.length; i++) {
            if (visited[i]) continue
            let [need, con] = filtered[i]
            if (energy < need) continue
            visited[i] = true
            let nextEnergy = energy - con
            let nextCnt = cnt + 1
            if (nextCnt > answer) answer = nextCnt
            if (answer === filtered.length) return answer
            dfs(nextEnergy, nextCnt)

            visited[i] = false
        }
    }
    dfs(k, 0)
    return answer
}
/*
던전들의 순열중에서 던전을 제일 많이 돌 수 있는 요소의 결과물을 리턴한다.
순열을 구하면서 시간복잡도와 공간복잡도가 많이 사용되므로 리팩토링.
*/