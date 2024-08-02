import leia from "readline-sync"
var baralho = 0;

var copas = 0;

var espadas = 0;

var ouros = 0;

var paus = 0;

const tentativas = 1000;



for(var baralho = 0; baralho < tentativas; baralho++){
    var valorSorteado = Math.floor(Math.random() * 4)

    if (valorSorteado === 0) {
        copas++;
    } else if (valorSorteado === 1) {
        espadas++;
    } else if (valorSorteado === 2) {
        ouros++;
    } else if (valorSorteado === 3) {
        paus++;
    }


}


const espadasPorcent = (espadas / tentativas)* 100;

const copasPorcent = (copas / tentativas)* 100;

const ourosPorcent = (ouros / tentativas)* 100;

const pausPorcent = (paus / tentativas)* 100;

console.log(`O espadas foi sorteado ${espadasPorcent.toFixed(2)}% das vezes.`);

console.log(`O copas foi sorteado ${copasPorcent.toFixed(2)}% das vezes.`);

console.log(`O ouros foi sorteado ${ourosPorcent.toFixed(2)}% das vezes.`);

console.log(`O paus foi sorteado ${pausPorcent.toFixed(2)}% das vezes.`);

if (espadasPorcent > 30 || copasPorcent > 30 || ourosPorcent > 30 || pausPorcent > 30) {
    console.log("baralho pode esta viciado.")
}else{
    console.log("O baralho não parece estar viciado.");
}




