// 테스트 100%
function solution(orders, course) {
    var answer = [];
    let map = [];
    let candi = []
    const aux = (range, menu, obj) => {
        if (candi.length === range) {
            let newMenu = candi.slice().sort().join('')
            obj[newMenu] = obj[newMenu] === undefined ? 1 : obj[newMenu] + 1
        } else {
            for (let i = 0; i < menu.length; i++) {
                let next = menu.slice(1 + i)
                candi.push(menu[i])
                aux(range, next, obj)
                candi.pop()
            }
        }
    }
    for (let i = 0; i < course.length; i++) {
        map.push({})
        for (let j = 0; j < orders.length; j++) {
            aux(course[i], orders[j], map[i])
        }
    }
    for (let i = 0; i < map.length; i++) {
        let max = 2;
        for (let j in map[i]) {
            if (map[i][j] >= max) max = map[i][j]
        }
        for (let j in map[i]) {
            if (map[i][j] === max) answer.push(j)
        }
    }
    return answer.sort();
}
/*
1. 각 메뉴마다 조합해서 메뉴마다 대입.
2. 코스개수마다 객체를 만들어서 주문한 횟수를 세어줌.
3. 각 코스의 최대값을 구해서 최대값을 갖는 코스를 answer에 담아줌
4. 마지막으로 정렬
*/