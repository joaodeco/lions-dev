
function calculadora (a, b,operador) {
    if (operador == '+' ) {
        return a + b
    }
    else if (operador == '-') {
        return a - b
    }
    else if (operador == '/'){
        return a / b 
    }
    else if (operador == '*')
        return a * b
}

let res = calculadora(3,5,'/')
console.log(res)