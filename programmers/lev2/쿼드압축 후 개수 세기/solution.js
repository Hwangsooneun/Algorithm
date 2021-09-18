// 테스트 100%
function solution(arr) {
    var answer = [0, 0];
    const press = (range, point) => {
        let [x, y] = point
        let pointNum = arr[x][y]
        if (range === 1) {
            pointNum === 0 ? answer[0]++ : answer[1]++
            return
        }
        let half = range / 2
        let check = true;
        let pressNum = String(pointNum).repeat(range)
        let compare = arr[x].slice(y, y + range).join('')
        if (pressNum === compare) {
            for (let i = 1; i < range; i++) {
                if (arr[x + i].slice(y, y + range).join('') !== pressNum) {
                    check = false
                    break
                }
            }
        } else {
            check = false
        }
        if (check) {
            pointNum === 0 ? answer[0]++ : answer[1]++
            return
        }
        press(half, [x, y])
        press(half, [x + half, y])
        press(half, [x + half, y + half])
        press(half, [x, y + half])
    }
    press(arr.length, [0, 0])
    return answer;
}
/*
1. 크게 4등분으로 나누어서 압축가능한지 여부를 확인한다.
2. 압축이되면 0인지 1인지 확인하고 갯수를 + 1해주고 더이상 탐색하지 않게 return한다.
3. range가 1이되면 압축이 안된 범위이기 때문에 좌표값에 해당하는 것을 + 1 해준다.
*/