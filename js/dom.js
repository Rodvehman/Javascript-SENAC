'use strict';

/* Exemplo 1 */

const exemplo01 = document.getElementById("exemplo1");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

/* Para selecionar vários elementos, use querySelectorAll. O resultado é uma espécie de Array de elementos (NodeList) */

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

/* Sobre eventos
    Um evento é um acontecimento ou fenômeno que, quando acontece, dispara ações em nosso programa.

    O JS suporta centenas de tipos de eventos.
    Ex.: 
    - Clique do mouse;
    - Pressionar teclas;
    - Tocar na tela;
    - Rolagem de página;
    - Carregamento de página;
    - etc.
*/
//Detectando Eventos

//Ao clicar 1x, exibe um texto ao parágrafo  de mensagem.
exemplo01.addEventListener("click", function(){
    mensagem01.textContent = "Mensagem com clique!!";
    //Adiciona a classe de CSS "destaque"
    mensagem01.classList.add("destaque");
});

// Ao clicar 2x, retira o texto do parágrafo da mensagem.
mensagem01.addEventListener("dblclick", function(){
    mensagem01.textContent = '';
    //Remove a classe CSS "destaque"
    mensagem01.classList.remove("destaque");
});

