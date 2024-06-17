var numero

console.log('Qual tabuada você deseja saber?')
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()

})

function processamento (numero){
    for (let i = 0; i <= 100; i++ ) {
        console.log(`${numero} x ${i} = ${i * numero}`)
    }

}