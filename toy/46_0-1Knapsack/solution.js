// 테스트 7/8
const knapsack = function (weight, items) {
  items = items.filter((el) => el[0] <= weight)
  if (!items.length) return 0
  let memo = new Array(items.length).fill(0).map((el) => {
    return new Array(weight + 1).fill(0)
  })
  let [firstWeight, item] = items[0]
  memo[0][firstWeight] = item
  let max = item
  for (let i = 1; i < items.length; i++) {
    let [W, item] = items[i]
    for (let j = 1; j < memo[i].length; j++) {
      if (j === W && memo[i - 1][W] < item) {
        memo[i][W] = item
        max = max < item ? item : max
        continue
      }
      if (memo[i - 1][j]) memo[i][j] = memo[i - 1][j]
      if (memo[i - 1][j - W] && memo[i - 1][j - W] < memo[i - 1][j - W] + item) {
        memo[i][j] = memo[i - 1][j - W] + item
        max = max < memo[i - 1][j - W] + item ? memo[i - 1][j - W] + item : max
      }
    }
  }
  return max
};
// const knapsack = function (weight, items) {
//   let col = 0
//   items = items.filter((el) => el[0] <= weight)
//   if (!items.length) return 0
//   for (let i = 0; i < items.length; i++) {
//     col += items[i][1]
//   }
//   items.sort((a, b) => a[0] - b[0])
//   let memo = new Array(items.length).fill(0).map((el) =>
//    el = new Array(col + 1).fill(0))
  
//   let [firWeight, item] = items[0]
//   memo[0][item] = weight - firWeight
//   let max = item
//   for (let i = 1; i < items.length; i++) {
//     for (let j = 0; j < memo[i].length; j++) {
//       if (items[i][1] === j) {
//         let con = weight - items[i][0]
//         if (memo[i][j] < con) {
//           memo[i][j] = con;
//         }
//         max = j > max ? j : max
//         continue
//       }
//       if (memo[i - 1][j]) memo[i][j] = memo[i - 1][j]
//       if (memo[i - 1][j] && memo[i - 1][j] >= items[i][0]) {
//         let con = memo[i - 1][j] - items[i][0]
//         if (memo[i][j + items[i][1]] < con) memo[i][j + items[i][1]] = con
//         max = max < j + items[i][1] ? j + items[i][1] : max
//       }
//     }
//   }
//   return max
// };
/*
dp
item이 중복되고 무게가 다를경우 수정필요
*/