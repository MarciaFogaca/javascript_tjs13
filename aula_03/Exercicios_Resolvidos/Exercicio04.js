const leia = require("readline-sync");

let palavra1 = leia.question("Tipo (vertebrado/invertebrado): ");
let palavra2 = leia.question("Classe (ave/mamifero/inseto/anelideo): ");
let palavra3 = leia.question("Alimento (carnivoro/onivoro/herbivoro/hematofago): ");

if (palavra1 === "vertebrado") {
    
    if (palavra2 === "ave") {
        if (palavra3 === "carnivoro") {
            console.log("Aguia");
        } else {
            console.log("Pomba");
        }
    } else { 
        if (palavra3 === "onivoro") {
            console.log("Homem");
        } else {
            console.log("Vaca");
        }
    }

} else { 
    
    if (palavra2 === "inseto") {
        if (palavra3 === "hematofago") {
            console.log("Pulga");
        } else {
            console.log("Lagarta");
        }
    } else { 
        if (palavra3 === "hematofago") {
            console.log("Sanguessuga");
        } else {
            console.log("Minhoca");
        }
        }
}