/*Crea un script que calcule el Índice de Masa Corporal (IMC) del usuario.
Solicita su peso (en kg) y altura (en metros) usando readline-sync, y luego muestra el resultado*/

const readlineSync = require('readline-sync');

const peso = readlineSync.questionFloat('Ingrese su peso: ');
const altura = readlineSync.questionFloat('Ingrese su altura: ');

const resultado = peso / (altura * altura)

console.log(`Su Índice de Masa Corporal (IMC) es: ${resultado.toFixed(2)}`);


























