'strict use';

console.log("Estrutura While\n");

let i = 0;

while (i <= 2){
    console.log("Valor do contador: ",i);
    i++;
}


console.log("Loop For\n");

for (let i = 0; i <= 3; i++){
    console.log("Valor do Contador: ", i);
    
}

console.log("Loop Regressivo");

for (let i = 3; i >= 0; i--){
    console.log("Valor do Contador: ", i);
    
}

const bandas = [
    "Led Zeppelin",
    "Pink Floyd",
    "Deep Purple",
    "Foo Fighters",
    "ZZ Top"
]

for (let index = 0; index <= bandas.length; index++){
    console.log(`Banda ${bandas[index]}`);
}

console.log("Loop For/For of");

for (const banda of bandas){
    console.log(banda);
}

const pessoa = {
    nome: "Rodrigo",
    idade: 48,
    cidade: "São Paulo",
    estado: "SP"
}

for (const prop in pessoa){
    console.log(pessoa[prop]);
}


