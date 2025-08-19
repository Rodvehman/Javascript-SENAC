'strict use';

/* Comandos condicionais mais comuns:
    if -> se
    else -> senão
*/

console.log("Exemplo 1:");

let numero = 5;

if (numero >= 10){
    console.log("Valor superior");
} else {
    console.log("Valor inferior");
}


let aluno ="Ozzy";
let idade = 18

let aluno2 = {
    nome: "Ozzy",
    idade: 18
};

if (aluno2.idade >= 18){
    console.log("Maior");
} else {
    console.log("Menor");
}

aluno2.idade >= 18? console.log("maior") : console.log("Menor");

