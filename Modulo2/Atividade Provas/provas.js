let notas = []
let nota1
let nota2
let media

console.log('Digite sua primeira nota.')

process.stdin.once('data', function(data){
    nota1 = parseFloat(data.toString().trim())
    console.log('Digite sua segunda nota.')

    process.stdin.once('data', function(data){
        nota2 = parseFloat(data.toString().trim())
        processamento(nota1, nota2)
        process.exit()
    })
    

})

function processamento(nota1, nota2){

    notas.push(nota1, nota2)
    media = (notas[0] + notas[1]) / 2
    console.log(`Sua media é ${media} `)

}
