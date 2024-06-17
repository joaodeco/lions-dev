let coresFavoritas =  ['preto', 'azul', 'verde']
let coresEspeciais = []
let corDoUsuario

console.log('Qual sua cor favorita?')
process.stdin.once('data', function(data) {
    corDoUsuario = data.toString().trim()
    processamento (corDoUsuario)
    process.exit()

})

function processamento (corDoUsuario){

if  (coresFavoritas .includes(corDoUsuario) )
    console.log(`A sua cor favorita é umas das favoritas da turma!`)
    
else 
console.log(`A sua cor favorita é diferente, vamos adicionar a lista `)


coresEspeciais.push(corDoUsuario)

console.log(`As cores favoritas são ${coresFavoritas}, as especiais são ${coresEspeciais} e ao todo temos ${coresFavoritas.length} cores favoritas`)

}
