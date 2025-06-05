/*Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, 
y luego muestre un mensaje personalizado que incluya toda esta información.*/

let promptsync = require("prompt-sync")();

let nombre = promptsync ("Ingrese su nombre: ");
let edad = promptsync ("Por favor ingrese su edad: ");
let peso = promptsync("Por favor ingrese su peso: ");

console.log ("¡Hola " + nombre + "!" + " Usted tiene " + edad + " años y su peso es de " + peso + " kg.");





