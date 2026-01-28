const leia= require("readline-sync");

let salarioBruto = leia.questionFloat("Digite o valor do salario bruto: ");
let adicionalNoturno = leia.questionFloat("Digite o valor de adicional noturno: ");
let horaExtra = leia.questionFloat("Digite o valor de hora extra: ");
let descontos = leia.questionFloat("Digite o valor de descontos: ");
let insalubridade = leia.questionFloat("digite o valor de insalubridade: ");
let faturamento = leia.questionFloat("Digite o valor do faturamento total da empresa ");

let impostoINSS = leia.questionFloat ("Digite o percentual do imposto (ex 11): ");

let calculoImposto = salarioBruto * (impostoINSS / 100);
let salarioLiquido = (salarioBruto + adicionalNoturno + insalubridade + (horaExtra * 5) + (faturamento * 0.02)) - descontos - calculoImposto;

console.log("Salário Líquido: R$ ", salarioLiquido.toFixed(2));
