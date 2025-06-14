/*Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número 
entre 1 y 100.*/

const promptsync = require("prompt-sync")();

let entrada = promptsync("Ingrese un número positivo y entero (que no tenga decimales): ");
let usuario = parseFloat(entrada.replace(",", "."));

if (usuario <= 0 || isNaN(usuario) || !Number.isInteger(usuario)) {
    console.log("Por favor, ingrese un número entero positivo mayor que cero.");
} else {
        
     for (let multiplo = 1; multiplo <=100; multiplo ++ )
        if  (multiplo % usuario === 0)
            console.log (multiplo)
     }


