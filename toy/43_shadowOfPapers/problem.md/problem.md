shadowOfPapers
좌표평면 위에 존재하는 수많은 직사각형에 대한 정보가 2차원 배열로 주어집니다. 이 직사각형들은 서로 겹처 있을(overlapping) 수 있습니다. 이 직사각형들이 이루는 면적을 리턴해야 합니다.

문제를 다르게 표현하면 아래와 같습니다.

- 밑이 투명한 좌표평면 위에 직사각형 모양의 종이을 여러 개 올려놓고 위에서 빛을 비출 때 생기는 그림자의 넓이를 구해야 합니다.
입력
인자 1 : papers
배열을 요소로 갖는 배열
papers.length는 30 이하
papers[i]는 number 타입을 요소로 갖는 배열
papers[i]는 차례대로 직사각형의 좌측 하단 모서리의 x좌표, y좌표, 너비(width), 높이(height)
papers[i][j]는 10,000 이하의 양의 정수
출력
number 타입을 리턴해야 합니다.
입출력 예시
let result = shadowOfPapers([[0, 1, 4, 4]]);
console.log(result); // --> 16

/*
4 | x x x x
3 | x x x x 
2 | x x x x 
1 | x x x x 
0 |   
--------------
    0 1 2 3 4 
*/

result = shadowOfPapers([
  [0, 0, 4, 4],
  [2, 1, 2, 6],
  [1, 5, 5, 3],
  [2, 2, 3, 3],
]);
console.log(result); // --> 36
/*
7 |   x x x x x
6 |   x x x x x
5 |   x x x x x
4 |     x x x
3 | x x x x x
2 | x x x x x
1 | x x x x
0 | x x x x
------------------
    0 1 2 3 4 5 6 7
*/