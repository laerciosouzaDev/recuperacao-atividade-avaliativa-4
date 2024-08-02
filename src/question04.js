import leia from "readline-sync"

var criarSenha = leia.question("digite o comprimento da senha: ", 10)

if ((criarSenha) || criarSenha < 1) {
    console.log('O comprimento da senha deve ser um número válido maior ou igual a 1.');
} else {
    // Definição dos caracteres possíveis
    const caracteresMaiusculos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresMinusculos = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const caracteresEspeciais = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Conjunto completo de caracteres
    const todosCaracteres = caracteresMaiusculos + caracteresMinusculos + numeros + caracteresEspeciais;
    
    
    var senha = '';

    
    for (var i = 0; i < criarSenha; i++) {

        var indiceAleatorio = Math.floor(Math.random() * todosCaracteres.length);

        senha += todosCaracteres[indiceAleatorio];
    }

    // Exibe a senha gerada
    console.log(`Sua senha gerada é: ${senha}`);
}