// 테스트 100%
function solution(expression) {
    var answer = [];
    let candi = ''
    let operator = [];
    let table = []
    let calculator = {
        '+': function(a, b) {
            return Number(a) + Number(b)
        },
        '*': function(a, b) {
            return Number(a) * Number(b)
        },
        '-': function(a, b) {
            return Number(a) - Number(b)
        }
    }
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*') {
            table.push(candi)
            candi = ''
            table.push(expression[i])
            if (!operator.includes(expression[i])) {
                operator.push(expression[i])
            }
        } else {
            candi += expression[i]
        }
    }
    table.push(candi)
    
    let permute = []
    let usedOp = []
    const combination = (arr) => {
        let clone = [...arr];
        for (let i = 0; i < clone.length; i++) {
            let pick = clone.splice(i, 1);
            usedOp.push(pick);
            if (!clone.length) {
                permute[permute.length] = usedOp.join('');
            }
            combination(clone);
            clone.splice(i, 0, pick);
            usedOp.pop();
        }
    }
    combination(operator)
    
    const calculate = (op, arr) => {
        for (let i = 0; i < op.length; i++) {
            let idx = 1
            while (idx < arr.length) {
                if (arr[idx] === op[i]) {
                    arr[idx - 1] = calculator[op[i]](arr[idx - 1], arr[idx + 1])
                    arr.splice(idx, 2)
                } else {
                    idx += 2
                }
            }
        }
        answer.push(Math.abs(arr[0]))
    }
    for (let i = 0; i < permute.length; i++) {
        calculate(permute[i], [...table])
    }
    return Math.max(...answer);
}
/*
1. 숫자와 오퍼레이터를 나눠서 배열에 저장한다.
2. 오퍼레이터 배열을 받아 0인덱스의 연산자순서대로의 값을 리턴하는 함수를 만든다.
3. 오퍼레이터에 들어간 연산자들의 순열을 함수에 넣는다.
4. 함수의 결과물을 answer배열에 저장하고, 가장 큰값을 리턴한다.
*/