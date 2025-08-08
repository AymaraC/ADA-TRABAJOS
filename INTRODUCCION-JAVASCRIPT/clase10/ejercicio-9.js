/*Escribe un programa que calcule el Índice de Masa Corporal (IMC).
Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado. 
let imc = peso / (altura * altura)*/

let promptsync = require("prompt-sync")();

let peso=  parseFloat (promptsync("Por favor ingrese su peso: "));
let altura = parseFloat (promptsync("Por favor ingrese su altura: "));

let IMC= (peso/(altura*altura));
console.log ("Su Indice de masa Corporal es: ", IMC.toFixed(3));


