'use strict';

//Exemplo 1: objeto com os dados de uma pessoa

const pessoa = {
    nome: "Chaves",
    idade: 8,
    cidade: "Acapulco",
    estado: "ACA",
};

console.log(pessoa);

// Acessamos as propriedades usando o nomeDoObjeto.propriedade
console.log("Exemplo 1\n");

console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos`);

// Exemplo 2: Objeto con Array
console.log("Exemplo 2\n");

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R Tolkien",
    volumes: ["A Sociedade do Anel", "As Duas Torres", "O Retorno do Rei"]
}

// Para acessar algum dos volumes, primeiro passamos pela propriedade (volumes), usando 'ponto' e, chegando nela, usamos os 'colchetes' com índice, pois se trata de um Array.

console.log(`Meu livro preferido é o ${livro.titulo} - ${livro.volumes[1]}`);
