const leia= require("readline-sync");

let numero =leia.questionInt("Digite um numero: ");

if (numero % 2 === 0 && numero >= 0) {

    console.log(`O Número ${numero} é par e positivo!`);
}

else if (numero % 2 === 0 && numero < 0) {

    console.log(`O Número ${numero} é par e negativo!`);
}

if (numero % 2 !== 0 && numero >= 0) {

    console.log(`O Número ${numero} é impar e positivo!`);
}

else if (numero % 2 !== 0 && numero < 0) {

    console.log(`O Número ${numero} é impar e negativo!`);

}