let nota1
let nota2
var media 

console.log("Qual sua primeira nota?")
process.stdin.once('data', function (data) {
    nota1 = parseFloat(data.toString().trim())
    console.log("Qual sua segunda nota?")

    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())
        processamento(nota1, nota2, media )
        process.exit()
    })
})

function processamento (nota1 , nota2, media ){
    media =  (nota1 + nota2) /2
    if( media >= 6 )
    console.log(`Parabéns você passou, sua nota foi ${media} `)

else
 console.log(`Poxa que pena, você ficou pra recupersção, sua nota foi ${media}`)
}