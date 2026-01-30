const leia = require("readline-sync");

let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let somaPrincipal = 0;
let somaSecundaria = 0;
let elementosPrincipal = "";
let elementosSecundaria = "";

for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
        matriz[linha][coluna] = leia.questionInt(`Digite o numero para [${linha}][${coluna}]: `);
    }
}

for (let i = 0; i < 3; i++) {
    elementosPrincipal += matriz[i][i] + " ";
    somaPrincipal += matriz[i][i];

    elementosSecundaria += matriz[i][2 - i] + " ";
    somaSecundaria += matriz[i][2 - i];
}

console.log("\nElementos da Diagonal Principal:");
console.log(elementosPrincipal);

console.log("\nElementos da Diagonal Secundária:");
console.log(elementosSecundaria);

console.log("\nSoma dos Elementos da Diagonal Principal:");
console.log(somaPrincipal);

console.log("\nSoma dos Elementos da Diagonal Secundária:");
console.log(somaSecundaria);