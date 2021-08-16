// bubble sort 테스트 100%
function solution(numbers) {
    var answer = '';
     let arr = [];
     let max = Math.max(...numbers);
     for(let i = 0; i <= max; i++){
         arr.push(i + '');
     }
     for(let i = 0; i < max; i++){
         for(let j = 0; j < max; j++){
             if (arr[j] + arr[j + 1] < arr[j + 1] + arr[j]) {
                 let sarr = arr[j];
                 arr[j] = arr[j + 1];
                 arr[j + 1] = sarr;
             }
         }
     }
     for(let i = 0; i < arr.length; i++){
         for(let j = 0; j < numbers.length; j++){
             if(Number(arr[i]) === numbers[j]){
                 answer = answer + arr[i];
             }
         }
     }
     if (answer[0] === '0') return '0'
     return answer;
 }
 // refactoring
 function solution(numbers) {
    var answer = '';
     let arr = [];
     for(let i = 0; i < numbers.length; i++){
         arr.push(numbers[i] + '');
     }
     answer = arr.sort((a, b) => (b + a) - (a + b)).join('')
     if (answer[0] === '0') return '0'
     return answer;
 }
 /*
 O(N^2), refactoring O(N)
 처음 javascript를 배우면서 반복문을 배웠을때 푼 문제이다. sort라는 매서드를 몰랐었고,
 반복문으로만 풀려다 보니 3~4일에 걸쳐 풀 수 있었지만, 시간복잡도가 높은 코드를 짜게 되었다.
 하지만 지금은 아니다 ^^; 너무 간단한 문제..
 */