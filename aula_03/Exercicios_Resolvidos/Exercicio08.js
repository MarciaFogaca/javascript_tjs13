const leia = require("readline-sync");

let saldo = 1000.00; 
let operacao = leia.questionInt("Operacao (1 a 3): ");
let valor; 
switch (operacao) {
    case 1:
        console.log("Operação - Saldo");
        console.log("Saldo: R$ " + saldo.toFixed(2));
        break;

    case 2:
        valor = leia.questionFloat("Valor: R$ ");
        console.log("Operação - Saque");
       if (valor <= saldo) {
        saldo = saldo - valor; 
        console.log("Novo Saldo: R$ " + saldo.toFixed(2));
    } else {
       
        console.log("Saldo Insuficiente!");
    }
    break;

    case 3:
        valor = leia.questionFloat("Valor: R$ ");
        console.log("Operação - Depósito");
        
       
        saldo = saldo + valor; 
        console.log("Novo Saldo: R$ " + saldo.toFixed(2));
        break;
    

    default:
        console.log("Operação Inválida!");
}