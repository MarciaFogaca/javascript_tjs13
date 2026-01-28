const leia = require('readline-sync');

let nota1 = leia.questionFloat("not1= 10.0");
let nota2 = leia.questionFloat("nota2= 8.0");
let nota3 = leia.questionFloat("not3= 7.0");
let nota4 = leia.questionFloat("nota4= 7.5");

let media= (nota1 + nota2 + nota3 + nota4) /4;

console.log("A média final é: ", media);