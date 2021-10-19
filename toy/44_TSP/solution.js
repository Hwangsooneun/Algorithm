// 테스트 100%
function calculateDistance(p1, p2) {
    const yDiff = p2[0] - p1[0];
    const xDiff = p2[1] - p1[1];
    return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2)) * 100;
}

const TSP = function (places) {
    const getPermutations = function (arr, len) {
        const results = [];
        if (len === 1) return arr.map((el) => [el]);

        arr.forEach((fixed, idx, origin) => {
            const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)]
            const permutations = getPermutations(rest, len - 1);
            const attached = permutations.map((el) => [fixed, ...el]);
            results.push(...attached);
        });
        return results;
    };
    let cities = getPermutations(places, places.length)
    let result = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < cities.length; i++) {
        let distance = 0
        for (let j = 0; j < cities[i].length - 1; j++) {
            distance += parseInt(calculateDistance(cities[i][j], cities[i][j + 1]))
        }
        if (distance < result) result = distance;
    }
    return result
};
/*
순열.
1. places에 들어있는 도시들을 순열의 조합을 만든다.
2. 탐색 시작
  2-1. 조합한 배열을 탐색하며 반복문의 현재 인덱스와 다음 인덱스의 도시간 거리를 계산한다.
  2-2. 두번째 반복문이 끝나면 계산한 도시간 거리가 result보다 작을경우 result에 할당한다.
3. result에는 모든 도시들을 방문했을때 가장 짧은거리가 할당되어 있으므로 리턴.
*/
