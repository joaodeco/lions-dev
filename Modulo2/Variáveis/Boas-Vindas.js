var nome = ''

console.log('Digite seu nome e presione enter');

process.stdin.on('data', function(data){

var nome = data.toString();

process.stdout.write('Seja Bem-Vindo\n' + nome);

process.exit();
});