// 테스트 100%
const rotateMatrix = function (matrix, rotation) {
  if (rotation === undefined) rotation = 1;
  if (matrix.length === 0) return [];
  let cnt = 0;
  
  function rotate(arr, rot, cnt) {
    if (cnt === rot) return arr;
    let result = []
    cnt++
    let len = arr.length;
    let len2 = arr[0].length;
    for (let i = 0; i < len2; i++) {
      let temp = [];
      for (let j = len - 1; j >= 0; j--) {
        temp.push(arr[j][i])
      }
      result.push(temp)
    }
    return rotate(result, rot, cnt)
  }
  return rotate(matrix, rotation, cnt)
};