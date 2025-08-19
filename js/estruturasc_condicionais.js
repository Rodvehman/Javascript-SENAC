'use strict';

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


let aluno = {
    nome: "Ozzy",
    idade: 18
};

if (aluno.idade >= 18){
    console.log("Maior");
} else {
    console.log("Menor");
}

aluno.idade >= 18? console.log("maior") : console.log("Menor");

let aluno2 = {
    nome: "Carlos",
    nota1: 10,
    nota2: 0
};

let media = (aluno2.nota1 + aluno2.nota2)/2;

let resposta = "aprovado"; 

if (media >= 7){
    resposta = "aprovado";
} else {
    resposta = "reprovado";
}

console.log(`O Aluno ${aluno2.nome.toUpperCase()} foi ${resposta.toUpperCase()}, com a média ${media}`);

aluno2.nome = "João";
aluno2.nota2 = 7;

media = (aluno2.nota1 + aluno2.nota2)/2;

if (media >= 7){
    resposta = "aprovado";
} else {
    resposta = "reprovado";
}

console.log(`O Aluno ${aluno2.nome.toUpperCase()} foi ${resposta.toUpperCase()}, com a média ${media}`);

/* Verificando média do aluno
    Média acima de 9: ótimo;
    Média acima de 7: bom;
    Média acima de 5: ruim;
    Média abaixo de 5: péssimo.
*/

let n1 = 10;
let n2 = 4;

let mediaAluno = (n1 + n2) / 2;
let msg;


if (mediaAluno < 5){
    msg = "Péssimo";
} else if (mediaAluno < 7){
    msg = "Ruim";
} else if (mediaAluno < 9){
    msg = "Bom";
} else if (mediaAluno >= 9){
    msg = "Ótimo";   
} if (mediaAluno > 10 || mediaAluno < 0){
    msg = "Nota inválida. O máximo é 10 e o mínimo é 0."
}

console.log(msg.toUpperCase());

console.log("Exemplo 4");

let idade = 18;

let idadeStatus = idade >= 18? console.log("maior"):console.log("menor");