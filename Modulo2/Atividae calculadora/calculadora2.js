
var operador

var a 

var b

function calculadora (a, b,operador) {
switch (operador){
    case  '+':  
        return a + b
    
    case '-': 
        return a + b

    
    case '/':
        return a / b 
    
    case '*':
        return a * b
    default:
        console.log('Operador invalido!')
        break
}}


console.log(calculadora(3,5,'/'))