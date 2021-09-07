// 테스트 100%
const LCS = function (str1, str2) {
    str1 = str1.split('')
    for (let i = 0; i < str1.length; i++) {
        // str1을 LCIS자체로 만들기 때문에 둘중 하나만 탐색하면 된다.
        let idx = str2.indexOf(str1[i])
        if (idx === -1) str1[i] = ''
        else str2 = str2.slice(idx + 1)
        // str1[i]가 LCIS의 경우 비교대상이 되는 str2의 앞부분을 짤라준다. 다시 str1을 탐색할때 str2의 앞부분에서 뽑아낼 수도 있기 때문. 
    }
    str1 = str1.join('')
    // LCIS에 해당되지 않아 빈문자열로 만들어준 부분을 없애주고, 문자열로 만들어준다.
    return str1.length
};