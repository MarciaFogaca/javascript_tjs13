const leia= require("readline-sync");

console.log("=== EXECUÇÃO DO TESTE 01 ===");
let n1= leia.questionFloat("Digite o valor de n1:");
let n2= leia.questionFloat("Digite o valor de n2:");
let n3= leia.questionFloat("Digite o valor de n3:");
let n4= leia.questionFloat("Digite o valor de n4:");

let calculo1 = (n1 * n2) - (n3 * n4);

console.log("\nDiferença: ", calculo1.toFixed(1));

console.log("=== EXECUÇÃO DO TESTE 02 ===");

let m1= leia.questionFloat("Digite o valor de m1:");
let m2= leia.questionFloat("Digite o valor de m2:");
let m3= leia.questionFloat("Digite o valor de m3:");
let m4= leia.questionFloat("Digite o valor de m4:");


let calculo2 = (m1 * m2) - (m3 * m4);
console.log("Diferença 2: ", calculo2.toFixed(1));