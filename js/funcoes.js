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

/* Sempre que tivermos a necessidade de trabalhar com o resultado do processamento de uma função, então essa função deverá ter o return. */

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

console.log("\nSimplificando o Arrow Function\n");


//Sintaxe declarada/nomeada
function somar(valor1, valor2){
    return valor1 + valor2;
}

console.log(somar(3,2));

//Sintaxe Arrow Function com retorno implícito

const soma = (vlr1, vlr2) => vlr1 + vlr2;

console.log(soma(10, 20));

console.log("\nFormatando valor monetário\n");

let preco = 5000;
let desconto = preco * 0.1;
let precoFinal = preco - desconto;

console.log(`Preço: ${preco}\nDesconto: ${desconto}\nPreço Final: ${precoFinal}`);

//Usando recursos da classe Intl (Internacionalização)

const exemp = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
}).format(preco);

console.log(exemp);

function moeda(valor, regiao, moeda){
    return new Intl.NumberFormat(regiao, {
        style: "currency",
        currency: moeda,
    }).format(valor);  
}

let teste1 = moeda(1000, "pt-br", "BRL");
let teste2 = moeda(1000, "en", "USD");

console.log(teste1);
console.log(teste2);
