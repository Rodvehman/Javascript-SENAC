let seila = 6;

// O JS aceita array com dados de tipos diferentes, conforme abaixo.

const coisas = [10,"Senac","<h2>Olá</h2>", seila, 15.88];

console.log(coisas[1]);
console.log(coisas[coisas.length-1]);

/* Exercícios

1) Crie um array contendo o nome de 7 coisas que você gosta.

2 Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo item do array. Use concatenação ou template strings.
*/

let itens = ["Deus", "Filmes", "Música", "Família", "Dinheiro", 1.78, "12"];

console.log(`Segundo item: ${itens[1]};`+`\nQuinto item: ${itens[4]};`+`\nSétimo item: ${itens[6]}.`);

// Matriz

const tecnologias = [
    ["HTLM", "CSS", "JS"], 
    ["Figma", "Photoshop"],
    ["PHP", "Node.js", "SQL", "Expess"]
];

console.log(tecnologias[0][2]);

console.log(tecnologias[1][0]);

console.log(tecnologias[2][3]);
