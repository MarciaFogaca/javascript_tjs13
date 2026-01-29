const leia= require("readline-sync");

let A=leia.questionInt("Digite o valor A: ");
let B=leia.questionInt("Digite o valor B: ");
let C=leia.questionInt("Digite o valor C: ");

let soma= A + B;

    if(soma > C) {
       console.log(`${A} + ${B} = ${soma} > ${C}`);
       console.log("A Soma de A + B e Maior que C");

    }
 else if(soma < C) {
       console.log(`${A} + ${B} = ${soma} < ${C}`);
       console.log("A Soma de A + B e Menor que C");
 }

 else {
       console.log(`${A} + ${B} = ${soma} = ${C}`);
       console.log("A Soma de A + B for Igual a C");
 }