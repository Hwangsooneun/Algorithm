문제
두 개의 문자열 strA, strB를 입력받아 아래에 정의된 작업들을 통해 두 문자열을 동일하게 만들 수 있는지 확인해야 합니다.

작업1: strA의 소문자 한개를 대문자로 변경
작업2: strA의 소문자 한개를 제거
입력
인자 1: strA
string 타입의 알파벳 문자열
strA.length는 100 이하
인자 2: strB
string 타입의 알파벳 대문자 문자열
strB.length는 100 이하
출력
boolean 타입을 리턴해야 합니다.
주의사항
작업의 수와 순서는 상관없습니다.
greedy 알고리즘(매칭이 된다고 바로 매칭으로 간주)이 해결하지 못하는 입력이 있을 수 있습니다.
입출력 예시
let output = findAbbreviation('AbcDE', 'ABDE');
console.log(output); // --> true ('b'를 대문자로 변경, 'c'를 제거)

output = findAbbreviation('AbcDE', 'AFDE');
console.log(output); // --> false
Advanced
strA의 각 소문자에 대해서 대문자로 변경하거나 제거하는 선택이 있기 때문에 최악의 경우(strA가 모두 유망한 소문자로 이루어진 경우), O(2^N)의 시간 복잡도를 가지게 됩니다. 중복을 제거하여 훨신 효율적인 알고리즘의 작성이 가능합니다. 이를 위해서는 어디에서 중복이 발생하는지 파악하는 게 우선입니다. 반드시 직접 경우의 수를 나열하고 관찰하여 중복을 찾아내시기 바랍니다.