fns = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a *  b
}

let exp = '1+2+3+4'


// '3+3+4'

// 6+4

// 10


function evaluateMultiExpression(str){
    let start = str.substring(0,3)
    let end = str.substring(3)

    let newExp;

    while(end.length > 1){

        newExp = `${evaluteSingleExpression(start)}${end}`

        start = newExp.substring(0,3)
        end = newExp.substring(3)
    }

    console.log(start,end)

    return +newExp
}


// string has 3 values 
function evaluteSingleExpression(str) {

    let arr = str.split('');

    let evaluate = (arr) => fns[arr[1]](+arr[0], +arr[2])
    
    return evaluate(arr)
}

evaluateMultiExpression(exp)