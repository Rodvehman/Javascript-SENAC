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

const livros = [
    {
        título: "O Assassinato no Oriente Express",
        autor: "Agatha Christie"
    },
    {
        título: "Deuses, Túmulo e Sábios",
        autor: "C.W. Ceran"
    },
    {
        título: "Harry Potter e a Pedra Filosofal",
        autor: "J. K. Rowling"
    }
]

console.log(livros[2].título);

/* Exercícios

1. Crie um objeto chamado "aluno" contendo os seguintes dados:

- Nome Completo
- Data de Nascimento
- (Use ARRAY) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente):
  - rua
  - número
  - bairro

2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */

const aluno = {
    nomeCompleto: "Rodrigo Alexandre",
    dataNascimento: "14/08/1977",
    listaTelefones: ["(11)5669-1543", "(11)97314-1408"],
    endereco: {
        rua: "Irineu Correia da Silva",
        numero: 216,
        bairro: "Jardim Satélite"
    }
}

console.log(`Aluno: ${aluno.nomeCompleto}; \nFone: ${aluno.listaTelefones[1]}; \nBairro: ${aluno.endereco.bairro}.`);