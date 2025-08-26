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

console.log(exemplo1);