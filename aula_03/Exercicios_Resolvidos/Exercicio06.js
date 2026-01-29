const leia = require("readline-sync");

let nome = leia.question("Nome do colaborador: ");
let codigoCargo = leia.questionInt("Codigo do cargo (1 a 6): ");
let salario = leia.questionFloat("Salário atual: ");

let cargo;
let reajuste;
switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        reajuste = 0.10; 
        break;
    case 2:
        cargo = "Vendedor";
        reajuste = 0.07; 
        break;
    case 3:
        cargo = "Supervisor";
        reajuste = 0.09; 
        break;
    case 4:
        cargo = "Motorista";
        reajuste = 0.06; 
        break;
    case 5:
        cargo = "Estoquista";
        reajuste = 0.05; 
        break;
    case 6:
        cargo = "Tecnico de Ti";
        reajuste = 0.08; 
        break;
    
    default:
        console.log("Cargo inválido!");
}

let novoSalario = salario + (reajuste * salario);

console.log("\n---------------------------------");
console.log("Nome do colaborador: " + nome);
console.log("Cargo: " + cargo);
console.log("Novo Salário: R$ " + novoSalario.toFixed(2));
console.log("---------------------------------");
