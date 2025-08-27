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
    //Adiciona a classe de CSS "destaque". Não coloque ponto neste caso.
    mensagem01.classList.add("destaque");
});

// Ao clicar 2x, retira o texto do parágrafo da mensagem.
mensagem01.addEventListener("dblclick", function(){
    mensagem01.textContent = '';
    //Remove a classe CSS "destaque"
    mensagem01.classList.remove("destaque");
});
/* Exercícios
    1) Crie uma constante nova e selecione o h1 da sua página;
    2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "praticando eventos!" e também fique centralizado;
    3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda(padrão).
*/

const primeiroParagrafo = document.querySelector("h1");

console.log(primeiroParagrafo);

primeiroParagrafo.addEventListener("mouseover", function(){
    primeiroParagrafo.textContent = "Praticando Eventos!";
    primeiroParagrafo.classList.add("centralizar");
});


const referencia = document.querySelector("h2:last-of-type");

console.log(referencia);

referencia.addEventListener("click", function(){
    primeiroParagrafo.textContent = "Eventos";
    primeiroParagrafo.classList.remove("centralizar");
});

/* Modo Noturno

*/

const btnText = "Ativar";

const btnModoNoturno = document.querySelector("#noturno");

btnModoNoturno.addEventListener("click", function(){
    /* 
    Usamos o Toggle para alternar entre adicionar a classe ou remover a classe, de acordp com cada clique do botão.
     */
    
    pagina.classList.toggle("modo-noturno");

    /* Desafios
        1) Faça a mudança acontecer gradualmente (use o transition);

        2) Se o modo noturno estiver ativado, ou seja, se a classe modo-noturno estiver aplicada à página, faça o texto do botão mudar para "Desativar", caso contrário, faça o botão exibir "Ativar".
    */
   if (pagina.classList.toggle){
        btnModoNoturno.textContent = "Desativar";
   }
   if (!pagina.classList.toggle) {
        btnModoNoturno = pagina;
        btnText = "Desativar";
   }
});

