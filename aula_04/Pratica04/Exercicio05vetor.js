const leia = require("readline-sync");

let vetor = [];
let soma = 0;
let elementosImpares = "";
let elementosPares = "";

for (let i = 0; i < 10; i++) {
    vetor[i] = leia.questionInt(`Digite o numero para a posicao ${i}: `);
    
    soma += vetor[i];
}

for (let i = 0; i < 10; i++) {
    
    if (i % 2 !== 0) {
        elementosImpares += vetor[i] + " ";
    }

    if (vetor[i] % 2 === 0) {
        elementosPares += vetor[i] + " ";
    }
}

let media = soma / 10;

console.log("\nElementos nos índices ímpares:");
console.log(elementosImpares);

console.log("\nElementos pares:");
console.log(elementosPares);

console.log(`\nSoma: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);

