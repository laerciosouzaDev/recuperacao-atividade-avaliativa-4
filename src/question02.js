import leia from "readline-sync"

var texto = leia.question("digite seu texto: ")

texto = texto.toLocaleUpperCase();

var contadorConsoante = 0;


for(var i = 0; i < texto.length; i++){
    if(texto[i] !== 'A' && texto[i] !== 'E' && texto[i] !== 'I' && texto[i] !== 'O' && texto[i] !== 'U'){
        contadorConsoante++
    }
}
console.log(`Esse texto tem: ${contadorConsoante} consoantes `)