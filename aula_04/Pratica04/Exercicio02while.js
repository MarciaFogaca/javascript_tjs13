const leia = require("readline-sync");

let menores21 = 0;
let maiores50 = 0;

let idade = 0;

while (idade >= 0) {
    
    idade = leia.questionInt("Digite uma idade: ");

    if (idade >= 0) {
        
        if (idade < 21) {
            menores21++; 
        } else if (idade > 50) {
            maiores50++; 
        }
     
    }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menores21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiores50}`);