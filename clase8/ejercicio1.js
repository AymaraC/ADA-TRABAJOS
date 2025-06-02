// 1. Solicite al usuario que ingrese un número cualquiera.

// 2. Calcule el doble de ese número.

// 3. Muestre el resultado en la consola.

const promptsync = require ("prompt-sync")({sigint: true});

let numero = promptsync ("Por favor, escriba un número:");
 
let doble = parseInt (numero) *2

console.log ("El doble de " + numero + " es " + doble + " ")


