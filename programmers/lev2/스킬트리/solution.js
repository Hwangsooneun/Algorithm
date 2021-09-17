// 테스트 100%
function solution(skill, skill_trees) {
    var answer = 0;
    const skillCheck = (str, candi) => {
        let idx = candi.indexOf(str[0])
        if (idx === -1) {
            for (let i = 1; i < str.length; i++) {
                if (candi.includes(str[i])) {
                    return false
                }
            }
        } else {
            for (let i = 1; i < str.length; i++) {
                let idx2 = candi.indexOf(str[i])
                if (idx2 !== -1) {
                    if (idx < idx2) idx = idx2
                    else {
                        return false
                    }
                } else {
                    return skillCheck(str.slice(i), candi)
                }
            }
        }
        return true
    }
    for (let i = 0; i < skill_trees.length; i++) {
        if (skillCheck(skill, skill_trees[i])) answer++
    }
    return answer;
}
/*
1. 첫 skill이 없으면 다른스킬들도 포함되지 않아야 한다.
2. 첫스킬의 인덱스보다 그다음 스킬의 인덱스는 항상 더 커야한다.
3. 확인하는 스킬이 없을경우 그다음 스킬도 없어야 한다.
*/