/* Define una constante PI (3.14159). Pide al usuario que ingrese el radio de un círculo y cálcula su 
área y perímetro utilizando la constante PI) */

let promptsync = require ("prompt-sync")();

const PI = Math.PI

let usuario = parseFloat (promptsync ("Por favor ingrese el radio de un círculo: "))

let area = parseFloat (PI* usuario * usuario);
    console.log ("El área es: " + area.toFixed(2))

let perímetro = parseFloat (2*PI* usuario);
    console.log ("El perímetro es: " + perímetro.toFixed(2));



