/*Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo.
Luego, imprime la suma de todos los números ingresados. WHILE*/

const promptsync = require("prompt-sync")();

let suma = 0
let usuario = parseInt (promptsync("¡Vamos a sumar! Ingrese un número postivo para iniciar la cuenta y negativo para terminar: "));

    while (usuario >= 0){
        suma += usuario;
        usuario = parseInt (promptsync("Elegí otro número: "));
    }
        console.log ("La suma total es: " + suma);