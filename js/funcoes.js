'use strict';

/* 
    Sobre funções 
    São blocos de códigos responsáveis por executar determinadas tarefas.
    Para usar estas funções, é necessário chamar/invocar a função desejada através de seu nome.

    Vantagens de usar funções:
    - Reutilizar o código;
    - Organização de código-fonte, permitindo a separação de diferentes lógicas ou responsabilidades;
    - Performance melhor;
    - Maior facilidade de manutenções.

    No JS, existem várias maneiras de se criar uma função.
    Ex: função anônima, função nomeada/declarada e arrow function.
*/

console.log("Função Anônima");

const exemplo1 = function(){
    //corpo da função (o que a função fará).
    console.log("Olá");
}

exemplo1();

console.log("\nFunção Decarada");

function exemplo2(){
    console.log("Esta é uma função nomeada!");
}

exemplo2();

console.log("Arrow Functions\n");

/*
    Sintaxe potencialmente mais simples para funções Javascript
*/

const exemplo3 = () => {
    console.log("Arrow Function");
    
};

exemplo3();

/* 
    Obs: funções (em qualquer sintaxe) também pode trabalhar com parâmetros/argumentos.

    Quando uma função precisa de valores para algum tipo de processamento, ela recebe valores através de parâmetros entre parêntses.

    Geralmente, ao terminar o processamento dos dados, a função "retorna" para um resultado.
*/

let nome = "Rodrigo";

function saudacao(nome = "Visitante"){
    console.log(`Olá, ${nome}`);
}

saudacao("Rodrigo");
saudacao(2);
saudacao();

console.log("\nFunção com parâmetros e retorno");

function multiplicar(valor1, valor2){
    let resultado = valor1 * valor2;
    return resultado;
}

let resultado1 = multiplicar(10, 5);
let resultado2 = multiplicar(200, 10);

console.log(resultado1);
console.log(resultado2);