const leia= require("readline-sync");

let nome = leia.question("Digite o nome do doador: ");
let idade = leia.questionInt("Digite a idade: ");
let primeiraDoacao = leia.keyInYN("E a primeira doacao de sangue? ");

if (idade >= 18 && idade <= 69) {
if (idade >= 60) {
if (primeiraDoacao === false) {
    console.log(`${nome} está apto(a) para doar sangue!`);
        } else {console.log(`${nome} NÃO está apto(a) para doar sangue!`);
        }} 
    else {
        console.log(`${nome} está apto(a) para doar sangue!`);}} 
else {
    console.log(`${nome} NÃO está apto(a) para doar sangue!`);
}