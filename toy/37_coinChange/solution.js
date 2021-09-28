// memoization
const coinChange = function (total, coins) {
    let table = new Array(total + 1).fill(0, 0)
    table[0] = 1
    coins.map((el) => {
        for (let i = 1; i <= total; i++) {
            if (el <= i) {
                table[i] += table[i - el]
            }
        }
    })
    return table.pop()
};