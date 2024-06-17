let somaPares = 0
let somaImpares = 0
let totalPares = 0
let totalImpares = 0
let mediaPares = 0
let mediaImpares = 0

for (let i = 0; i<=999; i++){

    if ( i %2==0 ){
        somaPares += i
        totalPares++
    } else {
        somaImpares += i
        totalImpares ++

    }
    

}
mediaImpares = somaImpares / totalImpares
mediaPares = somaPares / totalPares

console.log(`A media dos pares é ${mediaPares}`)
console.log(`A soma dos pares é ${somaPares}`)
console.log(`O total dos pares é ${totalPares}`)
console.log(`A media dos impares é ${mediaImpares}`)
console.log(`A soma dos impares é ${somaImpares}`)
console.log(`O total dos impares é ${totalImpares}`)

if (mediaPares > mediaImpares) {
    console.log (`A media dos números pares ${mediaPares} é maior que a media dos números impares ${mediaImpares} `)
} else if (mediaPares < mediaImpares) {
    console.log(`A media dos números impares impares ${mediaImpares} é maior que a media doa números pares ${mediaPares}`)
}else {
    console.log('As medias dos numeros pares e impares são iguais')
}