const leia = require("readline-sync");

let n1 = leia.questionFloat("Digite o 1º numero: ");
let n2 = leia.questionFloat("Digite o 2º numero: ");
let operacao = leia.questionInt("Operacao (1 a 4): ");

let resultado;
let simbolo;
switch (operacao) {
    case 1:
        resultado = n1 + n2;
        simbolo = "+";
        break;
    case 2:
        resultado =n1 - n2;
        simbolo ="-"
        break;
    case 3:
        resultado =n1 * n2;
        simbolo ="*"
        break;
    case 4:
        resultado =n1 / n2;
        simbolo ="/"
        break;
    default:
        console.log("Operação Inválida!");
}
if (operacao >= 1 && operacao <= 4) {

console.log(`\n${n1.toFixed(1)} ${simbolo} ${n2.toFixed(1)} = ${resultado.toFixed(1)}`);
}