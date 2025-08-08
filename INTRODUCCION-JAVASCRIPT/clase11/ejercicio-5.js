/*Escribe un programa que le pida al usuario dos números enteros (inicio y fin). 
El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites 
si son pares. Utiliza un ciclo for para recorrer los números entre el inicio y el fin. 
Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.*/

const promptsync = require("prompt-sync")();

let numeroInicial= parseFloat (promptsync("Ingrese un número de inicio: "));
let numeroFinal = parseFloat (promptsync("Ingrese un número final: "));

if (numeroInicial > numeroFinal){
    console.log ("Números incorrectos, el número inicial debe ser menor que el número final.")
} else {
    for (let numero = numeroInicial ; numero <= numeroFinal ; numero ++ )
    
    if (numero % 2 === 0)

    console.log ("Número par: " + numero);
}


