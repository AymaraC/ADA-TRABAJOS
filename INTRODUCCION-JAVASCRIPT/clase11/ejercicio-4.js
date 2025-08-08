/*Los números pueden ser pares o impares. 
Escribe un programa que le pida al usuario un número y determine si es par o impar.
Muestra un mensaje explicativo indicando qué significa cada caso.*/

const promptsync = require("prompt-sync")();

let numero = parseFloat(promptsync("Ingrese un número: "));

let mensaje = numero % 2 === 0 ? "Es número par." : "Es número impar." // El módulo te indica si hay resto y si lo hay es impar.//

 console.log (mensaje);
