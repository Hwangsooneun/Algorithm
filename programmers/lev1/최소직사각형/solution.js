// 테스트 100%
function solution(sizes) {
    let maxX = 0;
    let maxY = 0;
    sizes.map((el) => {
        let x = el[0];
        let y = el[1]
        if (el[0] > el[1]) x = el[1], y = el[0]
        if (x > maxX) maxX = x
        if (y > maxY) maxY = y
    })
    return maxX * maxY;
}