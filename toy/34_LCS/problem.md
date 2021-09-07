LCS
문제
두 문자열을 입력받아 다음의 조건을 만족하는 LCS*의 길이를 리턴해야 합니다.

LCS: 두 문자열에 공통으로 존재하는 연속되지 않는 부분 문자열(Longest Common Subsequence)
문자열 'abc'의 subseqeunce는 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' 입니다.
입력
인자 1 : str1
string 타입의 알파벳 소문자와 숫자로 이루어진 문자열
str1.length는 50 이하
인자 2 : str2
string 타입의 알파벳 소문자와 숫자로 이루어진 문자열
str2.length는 50 이하
출력
number 타입을 리턴해야 합니다.
주의사항
LCS의 길이를 리턴해야 합니다.
LCS가 존재하지 않는 경우, 0을 리턴해야 합니다.
입출력 예시
let output = LCS('abcd', 'aceb');
console.log(output); // --> 2 ('ab' or 'ac')

output = LCS('acaykp', 'capcak');
console.log(output); // --> 4 ('acak')
Advanced
LCS를 계산하는 효율적인 알고리즘(O(M * N))이 존재합니다(두 문자열의 길이가 각각 M, N일 경우). 쉽지 않기 때문에 바로 레퍼런스 코드를 보고 이해하는 데 집중하시기 바랍니다.
LCS의 길이 대신 LCS 자체를 리턴하는 함수를 구현해 보시기 바랍니다.
LIS와 LCS를 변형하여 두 문자열 또는 배열을 입력받아 LCIS(Longest Common Increasing Subsequence)의 길이 또는 그 자체를 리턴하는 함수를 구현해 보시기 바랍니다.