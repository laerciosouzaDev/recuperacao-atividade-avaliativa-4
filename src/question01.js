import leia from 'readline-sync'

let nomes = [];
var idades = [];


for (var i = 0; i < 2; i++) {
    var nome = leia.question(`Digite o nome da pessoa ${i + 1}:`);
    var idade = leia.questionInt(`Digite a idade de ${nome}:`);
    
    nomes.push(nome);
    idades.push(idade);
}

// Encontrar a pessoa mais velha e a mais nova
var maiorIdade = idades[0];
var menorIdade = idades[0];
var indexMaiorIdade = 0;
var indexMenorIdade = 0;

for (var i = 1; i < idades.length; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        indexMaiorIdade = i;
    }
    
    if (idades[i] < menorIdade) {
        menorIdade = idades[i];
        indexMenorIdade = i;
    }
}

// Exibir o resultado
console.log(`A pessoa mais velha é ${nomes[indexMaiorIdade]} com ${maiorIdade} anos.`);
console.log(`A pessoa mais nova é ${nomes[indexMenorIdade]} com ${menorIdade} anos.`);



