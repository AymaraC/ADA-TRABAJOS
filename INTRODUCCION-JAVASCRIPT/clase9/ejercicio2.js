/* Definir un rango minimo y un rango máximo y pide al usuario que un número y verifica que este dentro del rango 
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. 
Pide al usuario que ingrese un 
número y verifica si está dentro del rango definido por las constantes. */

const promptsync = require("prompt-sync")();

const RANGO_MINIMO = 0
const RANGO_MAXIMO = 50

let number = parseInt (promptsync ("Por favor ingrese un número: "));

    if (number >= RANGO_MINIMO && RANGO_MAXIMO >= number) {
        console.log("El número está dentro del rango.");
    } 
    else { console.log ("El número no está dentro del rango.");

    }  