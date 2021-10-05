문제
문자열을 입력받아 부분 문자열 중 가장 긴 (palindrome)*의 길이를 리턴해야 합니다.

palindrome: 데이터를 앞에서 뒤로 또는 뒤에서 앞으로 조회한 결과가 동일한 경우
입력
인자 1 : str
string 타입의 공백이 있는 알파벳 소문자 문자열
출력
number 타입을 리턴해야 합니다.
주의사항
문자열 str의 부분 문자열은 자기 자신을 포함합니다.
공백도 회문에 포함될 수 있습니다.
입출력 예시
let str = 'My dad is a racecar athlete';
let result = longestPalindrome(str);
console.log(result); // --> 11 ('a racecar a')

str = ' dad ';
result = longestPalindrome(str);
console.log(result); // --> 5 (' dad ')