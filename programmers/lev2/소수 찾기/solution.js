// 순열 테스트 100%
function solution(numbers) {
    const isPrime = (num) => {
        if (num === 2) return true
        if (num === 1 || num % 2 === 0) return false
        let sqrt = parseInt(Math.sqrt(num))
        for (let i = 3; i <= sqrt; i += 2) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
    const aux = (arr, num) => {
        let frontNum = num || '';
        let primeNum = []
        for (let i = 0; i < arr.length; i++) {
            let prime = frontNum + arr[i]
            if (isPrime(Number(prime))) primeNum.push(Number(prime));
            let numList = [...arr]
            numList.splice(i, 1)
            let result = aux(numList, prime)
            primeNum.push(...result)
        }
        return primeNum
    }
    let numArr = numbers.split('')
    let answer = aux(numArr)
    return [...new Set(answer)].length;
}
/*
재귀는 곧잘쓰는데 순열은 왜이렇게 헷갈리는걸까^^;
*/