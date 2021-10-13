// 테스트 100%
function solution(cacheSize, cities) {
    var answer = 0;
    let queue = []
    if (cacheSize === 0) return cities.length * 5
    const LRU = (arr, city) => {
        let time = 0;
        let idx = arr.indexOf(city)
        if (idx !== -1) {
            time = 1
            arr.splice(idx, 1)
        } else {
            time = 5
            if (arr.length === cacheSize) {
                arr.shift()
            }
        }
        arr.push(city)
        return time
    }
    for (let i = 0; i < cities.length; i++) {
        answer += LRU(queue, cities[i].toLowerCase())
    }
    return answer;
}
/*
LRU알고리즘을 공부할 수 있는 좋은 기회였음.
queue형식이지만 캐쉬사이즈 내에 검색한 기록이 있으면
중간에 있든 제일 끝에있든 빼서 최근 검색기록으로 바꿔줌.
*/