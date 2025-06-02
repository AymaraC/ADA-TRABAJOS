/* Escribe un programa en donde el usuario deba ingresar su nombre y se muestre un saludo personalizado 
1. Solicite al usuario que ingrese su nombre. 
2. Muestre un saludo personalizado usando el nombre ingresado. 
*/

const PromptSync = require("prompt-sync");

const promptsync = require ("prompt-sync")();

let nombre = promptsync ("Por favor ingrese su nombre: ");

    console.log ("Hola, " + nombre + " ¡Bienvenida a la clase ocho!.");
