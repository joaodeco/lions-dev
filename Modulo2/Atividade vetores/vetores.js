let numeros = [27, 10, 3, 0, 20, 5, 6, 3]


let pares = []

let impares = []

console.log(`Os números são ${numeros}`)

numeros.push (15)

console.log(`Agora adicionei um número ${numeros}`)

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 != 0) {
        impares.push(numeros [i])
    }
  else {
        pares.push(numeros[i])
 
    }
}
    
console.log(`Os números pares são ${pares}`)
console.log(`Os números impares são ${impares}`)