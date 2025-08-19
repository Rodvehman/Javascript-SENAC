'use strict'

/* Operadores Lógicos
    && -> E -> and;
    || -> Ou -> or;
    ! -> Negação -> not;
    == -> Cracteres Iguais;
    === -> caracteres e tipos de dados iguais.
*/

//Retorne True se todas as condições forem verdadeiras
console.log("Exemplo &&:");
let idade = 20;
let temCarta = true;

if (idade >=10 && temCarta){
    console.log("Habilitado");
} else {
    console.log("Não Habilitado");    
}

if (idade >= 18 && temCarta === true){
    console.log("Habilitado");
    
} else {
    console.log("Não Habilitado");
}

 console.log("\nExemplo Ou - ||");
let feriado = false;
let fimDeSemana = true;

if (feriado === true || fimDeSemana === true){
    console.log("Não tem aula!");
} else {
    console.log("Tem aula!");    
}

console.log("Exemplo !");

/* Inverte a lógica */

let blackFriday = false;

if (!blackFriday){
    console.log("Preços Normais");
} else {
    console.log("Desconto");
}