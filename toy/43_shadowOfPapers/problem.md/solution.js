// 테스트 100%
function shadowOfPapers(papers) {
    let maxC = 0;
    for (let i = 0; i < papers.length; i++) {
        let [x, y, ox, oy] = papers[i]
        maxC = Math.max(maxC, y + oy)
    }
    let rIdx = 0;
    let sum = 0
    while (papers.length) {
        let col = new Array(maxC).fill(0)
        let len = papers.length
        for (let i = 0; i < len; i++) {
            let [x, y, ox, oy] = papers.shift()
            if (x === rIdx) {
                for (let j = y; j < y + oy; j++) {
                    col[j] = 1
                }
                if (ox === 1) continue
                else {
                    papers.push([x + 1, y, ox - 1, oy])
                }
            } else {
                papers.push([x, y, ox, oy])
            }
        }
        let count = 0
        for (let i = 0; i < col.length; i++) {
            if (col[i] === 1) count++
        }
        sum += count
        rIdx++
    }
    return sum
}
/*
1. 최대 row와 col을 구하여 매트릭스를 만들고 0을 담아준다.
2. papers의 사각형을 하나식 1로 변환한다.
3. 1의 갯수를 리턴.
// 공간복잡도가 높아지면서 테스트 실패.
1. 최대 컬럼의 길이를 구한다.
2. papers 배열을 탐색 시작.
 2-1. 최대컬럼만큼의 배열을만들고 0을 넣는다. col
 2-2. papers의 길이만큼만 탐색 시작.
  2-2-1. 구조분해할당으로 x, y, 너비, 높이를 할당한다.
  2-2-2. row값이 0부터 세로로 넓이를 구할것이므로 rIdx와 x가 같다면
  2-2-3. 높이만큼 1을 찍어준다. 이후 x의 너비가 남았으면 다음 탐색에도
         해당하는 높이를 찍어줘야하기 때문에 x + 1, 너비는 - 1을 해준다.
  2-2-4. 만일 해당 요소의 너비만큼 사용이 됐다면 버려주고, 그렇지 않으면
         다시 2-2-3의 값을 papers에 넣어둔다.
  2-2-5. papers의 길이만큼 탐색이 끝났다면 1의 개수를 sum에 더해주고
         다음 row를 탐색해야 하기때문에 rIdx를 + 1 해준다.
3. 최종 값이된 sum을 리턴.
*/